import { useEffect } from "react";

declare global {
  interface Window {
    n8nChatLoaded?: boolean;
  }
}

const Chatbot = () => {
  useEffect(() => {
    // Prevent loading the script multiple times
    if (window.n8nChatLoaded) return;

    // Load the n8n chat script
    const script = document.createElement("script");
    script.type = "module";
    script.innerHTML = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      
      createChat({
        webhookUrl: 'https://johnhassan.app.n8n.cloud/webhook/7f57f4a9-c51e-4bc7-84fe-8fe9b4df0d8e/chat'
      });

      // Custom styling function with DOM safety checks
      function applyCustomTheme(retries = 0) {
        const chatContainer = document.querySelector('n8n-chat');

        if (!chatContainer) {
          if (retries < 10) {
            setTimeout(() => applyCustomTheme(retries + 1), 500);
          }
          return;
        }

        // Apply theme colors matching the website
        const style = document.createElement('style');
        style.textContent = \`
          n8n-chat {
            --chat-background-color: #f8fbff;
            --chat-header-background: linear-gradient(90deg, #007BFF, #1E90FF);
            --chat-header-text-color: #ffffff;
            --chat-bubble-user-bg: #007BFF;
            --chat-bubble-user-text: #ffffff;
            --chat-bubble-bot-bg: #e9f2ff;
            --chat-bubble-bot-text: #1e293b;
            --chat-input-background: #ffffff;
            --chat-input-text-color: #111827;
            --chat-button-color: #007BFF;
            --chat-font-family: 'Poppins', sans-serif;
            border-radius: 18px;
            box-shadow: 0 8px 25px rgba(0, 123, 255, 0.2);
          }

          /* Floating position adjustment */
          n8n-chat::part(container) {
            bottom: 20px;
            right: 20px;
          }
        \`;
        document.head.appendChild(style);

        console.log("✅ Alpha Chatbot theme applied successfully");
      }

      // Run styling function with delay (ensures chatbot loaded)
      setTimeout(() => applyCustomTheme(), 1000);
    `;

    document.body.appendChild(script);
    window.n8nChatLoaded = true;

    return () => {
      // Cleanup script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
};

export default Chatbot;
