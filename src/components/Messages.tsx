import {
  Edit,
  Info,
  Phone,
  Video,
  Image as ImageIcon,
  Heart,
  Smile,
  MessageSquare,
} from "lucide-react";
import { profileData, initialChatsData, Chat, Message } from "../data";
import { useState, useRef, useEffect } from "react";

export default function Messages() {
  const [chats, setChats] = useState<Chat[]>(initialChatsData);
  const [activeChatId, setActiveChatId] = useState<number | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const activeChat = chats.find((c) => c.id === activeChatId);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [activeChat?.messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !activeChatId) return;

    const newMsg: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: "me",
      timestamp: "Just now",
    };

    setChats((prevChats) =>
      prevChats.map((chat) => {
        if (chat.id === activeChatId) {
          return { ...chat, messages: [...chat.messages, newMsg] };
        }
        return chat;
      }),
    );

    setNewMessage("");
  };

  return (
    <div className="max-w-4xl mx-auto flex h-[80vh] border border-neutral-800 rounded-lg overflow-hidden mt-4 bg-black">
      {/* Sidebar */}
      <div className="w-1/3 border-r border-neutral-800 flex flex-col">
        <div className="p-4 border-b border-neutral-800 flex justify-between items-center">
          <h2 className="font-bold text-lg truncate">{profileData.username}</h2>
          <Edit className="w-6 h-6 cursor-pointer flex-shrink-0" />
        </div>
        <div className="flex-1 overflow-y-auto p-2 scrollbar-hide">
          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setActiveChatId(chat.id)}
              className={`flex items-center gap-3 p-3 cursor-pointer rounded-lg transition-colors ${activeChatId === chat.id ? "bg-neutral-900" : "hover:bg-neutral-900/50"}`}
            >
              <div className="w-12 h-12 rounded-full bg-neutral-800 overflow-hidden flex-shrink-0">
                <img
                  src={chat.avatar}
                  alt={chat.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="overflow-hidden flex-1">
                <div
                  className={`text-sm truncate ${activeChatId === chat.id ? "font-semibold" : ""}`}
                >
                  {chat.name}
                </div>
                <div className="text-xs text-neutral-500 truncate">
                  {chat.messages.length > 0
                    ? chat.messages[chat.messages.length - 1].text
                    : chat.activeTime}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="w-2/3 flex flex-col bg-black">
        {activeChat ? (
          <>
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b border-neutral-800">
              <div className="flex items-center gap-3">
                <img
                  src={activeChat.avatar}
                  alt="avatar"
                  className="w-10 h-10 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-semibold text-sm">{activeChat.name}</div>
                  <div className="text-xs text-neutral-500">
                    {activeChat.activeTime}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-neutral-300">
                <Phone className="w-6 h-6 cursor-pointer hover:text-white" />
                <Video className="w-6 h-6 cursor-pointer hover:text-white" />
                <Info className="w-6 h-6 cursor-pointer hover:text-white" />
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
              {activeChat.messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
                >
                  {msg.sender === "them" && (
                    <img
                      src={activeChat.avatar}
                      alt="avatar"
                      className="w-8 h-8 rounded-full object-cover mr-2 self-end"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div
                    className={`max-w-[70%] rounded-2xl px-4 py-2 text-sm ${msg.sender === "me" ? "bg-blue-600 text-white" : "bg-neutral-800 text-white"}`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="p-4">
              <form
                onSubmit={handleSendMessage}
                className="flex items-center gap-3 border border-neutral-700 rounded-full px-4 py-2 focus-within:border-neutral-500"
              >
                <Smile className="w-6 h-6 text-neutral-400 cursor-pointer flex-shrink-0 hover:text-white" />
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Message..."
                  className="flex-1 outline-none text-sm bg-transparent text-white placeholder-neutral-500"
                />
                {newMessage.trim() ? (
                  <button
                    type="submit"
                    className="text-blue-500 font-semibold text-sm hover:text-blue-400"
                  >
                    Send
                  </button>
                ) : (
                  <>
                    <ImageIcon className="w-6 h-6 text-neutral-400 cursor-pointer flex-shrink-0 hover:text-white" />
                    <Heart className="w-6 h-6 text-neutral-400 cursor-pointer flex-shrink-0 hover:text-white" />
                  </>
                )}
              </form>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
            <div className="w-24 h-24 border-2 border-white rounded-full flex items-center justify-center mb-4">
              <MessageSquare
                className="w-12 h-12 text-white"
                strokeWidth={1.5}
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">Your Messages</h2>
            <p className="text-neutral-400 mb-6">
              Send private photos and messages to a friend or group.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Send Message
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
