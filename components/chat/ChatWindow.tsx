"use client";

import {
  useRef,
  useEffect,
  useState,
  useCallback,
  type ChangeEvent,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import { X, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ChatMessage } from "@/types";
import { BOT_RESPONSES, FALLBACK_RESPONSE, GREETING_MESSAGE, QUICK_REPLIES } from "@/data/chat";
import ChatBubble from "@/components/chat/ChatBubble";
import QuickReplies from "@/components/chat/QuickReplies";

interface ChatWindowProps {
  onClose: () => void;
}

function generateId(): string {
  return Math.random().toString(36).slice(2, 9);
}

function getBotResponse(input: string): string {
  const lower = input.toLowerCase();
  const match = BOT_RESPONSES.find((r) => r.trigger.some((t) => lower.includes(t)));
  return match ? match.response : FALLBACK_RESPONSE;
}

export default function ChatWindow({ onClose }: ChatWindowProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: generateId(),
      role: "bot",
      text: GREETING_MESSAGE,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const sendMessage = useCallback((text: string) => {
    if (!text.trim()) return;

    const userMessage: ChatMessage = {
      id: generateId(),
      role: "user",
      text: text.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    setShowQuickReplies(false);

    setTimeout(() => {
      const botMessage: ChatMessage = {
        id: generateId(),
        role: "bot",
        text: getBotResponse(text),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 900);
  }, []);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      sendMessage(input);
    },
    [input, sendMessage],
  );

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage(input);
      }
    },
    [input, sendMessage],
  );

  const handleQuickReply = useCallback(
    (value: string) => {
      sendMessage(value);
    },
    [sendMessage],
  );

  return (
    <div
      className="flex flex-col bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
      style={{ width: 360, height: 520 }}
      role="dialog"
      aria-label="DocNear chat assistant"
      aria-modal="true"
    >
      {/* Header */}
      <div className="bg-teal-600 px-4 py-3.5 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M20 8C16.134 8 13 11.134 13 15C13 19.5 20 28 20 28C20 28 27 19.5 27 15C27 11.134 23.866 8 20 8Z"
                fill="white"
                fillOpacity="0.9"
              />
              <circle cx="20" cy="15" r="3.2" fill="#0d9488" />
              <path
                d="M20 13.2V16.8M18.2 15H21.8"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div>
            <p className="text-white font-semibold text-sm leading-tight">DocBot</p>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" aria-hidden="true" />
              <span className="text-teal-100 text-xs">Online — replies instantly</span>
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-white/70 hover:text-white transition-colors p-1 rounded-md hover:bg-white/10"
          aria-label="Close chat"
        >
          <X size={18} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scroll-smooth">
        {messages.map((msg) => (
          <ChatBubble key={msg.id} message={msg} />
        ))}

        {isTyping && (
          <div className="flex items-end gap-2">
            <div className="w-7 h-7 rounded-full bg-teal-600 flex items-center justify-center shrink-0">
              <svg width="12" height="12" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <path
                  d="M20 8C16.134 8 13 11.134 13 15C13 19.5 20 28 20 28C20 28 27 19.5 27 15C27 11.134 23.866 8 20 8Z"
                  fill="white"
                  fillOpacity="0.9"
                />
                <circle cx="20" cy="15" r="3.2" fill="#0d9488" />
                <path
                  d="M20 13.2V16.8M18.2 15H21.8"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="bg-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1 items-center">
              <span
                className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: "0ms" }}
              />
              <span
                className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: "150ms" }}
              />
              <span
                className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: "300ms" }}
              />
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Quick replies */}
      {showQuickReplies && !isTyping && (
        <QuickReplies replies={QUICK_REPLIES} onSelect={handleQuickReply} />
      )}

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="px-4 py-3 border-t border-gray-100 flex items-center gap-2 shrink-0"
      >
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Ask me anything..."
          aria-label="Type your message"
          className="flex-1 text-sm px-4 py-2.5 rounded-full border border-gray-200 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-all bg-gray-50"
          suppressHydrationWarning
        />
        <button
          type="submit"
          disabled={!input.trim()}
          aria-label="Send message"
          className={cn(
            "w-9 h-9 rounded-full flex items-center justify-center transition-all shrink-0",
            input.trim()
              ? "bg-teal-600 hover:bg-teal-700 text-white"
              : "bg-gray-100 text-gray-300 cursor-not-allowed",
          )}
        >
          <Send size={15} />
        </button>
      </form>
    </div>
  );
}
