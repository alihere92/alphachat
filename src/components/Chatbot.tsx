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
        webhookUrl: 'https://itsalibhai92.app.n8n.cloud/webhook/7f57f4a9-c51e-4bc7-84fe-8fe9b4df0d8e/chat',
        initialMessages: [
          'Hello! 👋',
          'I\\'m your virtual assistant. How can I help you today?'
        ],
        i18n: {
          en: {
            title: 'Chat with us',
            subtitle: 'We\\'re here to help!',
            footer: '',
            getStarted: 'Start conversation',
            inputPlaceholder: 'Type your message...'
          }
        }
      });
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
