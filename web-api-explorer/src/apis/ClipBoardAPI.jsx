import React, { useState } from "react";

const ClipboardAPI = () => {
  const [textToCopy, setTextToCopy] = useState("");
  const [clipboardText, setClipboardText] = useState("");
  const [message, setMessage] = useState("");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setMessage("✅ Text copied to clipboard!");
    } catch (err) {
      setMessage("❌ Failed to copy: " + err.message);
    }
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setClipboardText(text);
      setMessage("📋 Text read from clipboard!");
    } catch (err) {
      setMessage("❌ Failed to read: " + err.message);
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#f0f8ff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        maxWidth: "500px",
        margin: "40px auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2
        style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}
      >
        📋 Clipboard API Demo
      </h2>

      <input
        type="text"
        value={textToCopy}
        onChange={(e) => setTextToCopy(e.target.value)}
        placeholder="Type something to copy"
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      <div style={{ marginBottom: "10px" }}>
        <button
          onClick={handleCopy}
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 14px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            marginRight: "10px",
          }}
        >
          Copy to Clipboard
        </button>

        <button
          onClick={handlePaste}
          style={{
            backgroundColor: "#28a745",
            color: "white",
            padding: "10px 14px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Paste from Clipboard
        </button>
      </div>

      {message && <p style={{ color: "#333", marginTop: "10px" }}>{message}</p>}

      {clipboardText && (
        <div
          style={{
            marginTop: "15px",
            padding: "10px",
            backgroundColor: "#e9ffe9",
            border: "1px solid #d4f5d4",
            borderRadius: "6px",
          }}
        >
          <strong>Clipboard contains:</strong>
          <p>{clipboardText}</p>
        </div>
      )}
    </div>
  );
};

export default ClipboardAPI;

/*
⚙️ How It Works in Theory
1. ✅ navigator.clipboard.writeText(text)
What it does:

-> Copies the given string (text) into the user’s system clipboard.
How it works:

-> The browser takes the string you provide.
-> Stores it in the OS-level clipboard.
-> Makes it available to paste in other apps (like Notepad, Word, etc.).
Requirements:

-> Must be called inside a user interaction (e.g. button click).
-> No permissions prompt needed (in most browsers).
-> Must be on a secure origin (HTTPS).

2. 📥 navigator.clipboard.readText()
What it does:
-> Retrieves (reads) the current content of the system clipboard as a text string.

How it works:

-> Requests clipboard access from the browser.
-> If allowed, grabs the current clipboard text and returns it to your app.
Requirements:
-> Must be inside a user-initiated event (like a button press).
-> May trigger a permissions prompt on first use.
-> Only works on HTTPS pages or localhost during development.
*/
