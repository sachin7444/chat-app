import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSmile } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  const [activeChannel, setActiveChannel] = useState("Introductions");
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "PubNub Bot",
      initials: "PN",
      avatarColor: "#e056fd",
      time: "12:16",
      text: "Welcome to Team Chat. 🙌🙌 Send a message now to start interacting with other users in the app. ⬇️",
    },
    {
      id: 2,
      sender: "Gregory Goolsby",
      initials: "GG",
      avatarColor: "#badc58",
      time: "17:28",
      text: "Hey everyone!",
    },
    {
      id: 3,
      sender: "Elin Emmanuel",
      initials: "EE",
      avatarColor: "#ff7979",
      time: "17:30",
      text: "Oh hi, Gregory! Rolande is around, too...",
    },
  ]);
  const [inputText, setInputText] = useState("");

  const channels = ["Poland Office", "Introductions", "India Office"];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMessage = {
      id: Date.now(),
      sender: "Rolande Raimondi",
      initials: "RR",
      avatarColor: "#ff4757",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      text: inputText,
    };

    setMessages([...messages, newMessage]);
    setInputText("");
  };

  return (
    <div className="chat-app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="user-profile">
          <div className="avatar-wrapper">
            <div className="user-avatar">RR</div>
            <span className="status-dot"></span>
          </div>
          <div className="user-details">
            <h2>Rolande Raimondi</h2>
            <p>Research Nurse</p>
          </div>
        </div>

        <div className="conversations-header">
          <span>Conversations</span>
          <button className="add-channel-btn" aria-label="Add channel">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>

        <ul className="channel-list">
          {channels.map((channel) => (
            <li
              key={channel}
              className={`channel-item ${activeChannel === channel ? "active" : ""}`}
              onClick={() => setActiveChannel(channel)}
            >
              # {channel}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Chat Area */}
      <main className="chat-main">
        <header className="chat-header">
          <div className="channel-meta">
            <h2>{activeChannel}</h2>
            <p>This Channel Is For Company Wide Chatter</p>
          </div>
          <div className="chat-stats">
            <span>3 | 100</span>
            <i className="fa-solid fa-users">👤</i>
          </div>
        </header>

        <div className="message-feed">
          {messages.map((msg) => (
            <div key={msg.id} className="message-row">
              <div className="msg-avatar" style={{ backgroundColor: msg.avatarColor }}>
                {msg.initials}
              </div>
              <div className="msg-content">
                <div className="msg-info">
                  <span className="msg-sender">{msg.sender}</span>
                  <span className="msg-time">{msg.time}</span>
                </div>
                <div className="msg-bubble">{msg.text}</div>
              </div>
            </div>
          ))}
        </div>

        <form className="chat-input-area" onSubmit={handleSendMessage}>
          <input
            type="text"
            placeholder="Type a message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button type="button" className="emoji-btn" aria-label="Insert emoji">
            <FontAwesomeIcon icon={faSmile} />
          </button>
        </form>
      </main>
    </div>
  );
}

export default App;