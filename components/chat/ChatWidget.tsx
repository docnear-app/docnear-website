"use client";

import { useState, useCallback } from "react";
import { MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";
import ChatWindow from "@/components/chat/ChatWindow";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = useCallback(() => setIsOpen(false), []);
  const handleToggle = useCallback(() => setIsOpen((p) => !p), []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3" aria-live="polite">
      {isOpen && (
        <div className="transition-all duration-200 origin-bottom-right">
          <ChatWindow onClose={handleClose} />
        </div>
      )}

      <div className="relative group">
        {!isOpen && (
          <div className="absolute bottom-full right-0 mb-2 whitespace-nowrap">
            <div className="bg-teal-600 text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-md">
              Got questions? Ask DocBot 👋
              <div className="absolute top-full right-4 border-4 border-transparent border-t-teal-600" />
            </div>
          </div>
        )}

        <button
          onClick={handleToggle}
          aria-label={isOpen ? "Close chat" : "Open DocBot chat assistant"}
          aria-expanded={isOpen}
          className="w-14 h-14 bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
        >
          {isOpen ? (
            <X size={22} aria-hidden="true" />
          ) : (
            <MessageCircle size={22} aria-hidden="true" />
          )}
        </button>

        {!isOpen && (
          <span
            className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 border-2 border-white rounded-full"
            aria-label="New message"
          />
        )}
      </div>
    </div>
  );
}
