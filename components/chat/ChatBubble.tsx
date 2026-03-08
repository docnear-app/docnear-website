import { cn } from "@/lib/utils";
import type { ChatMessage } from "@/types";

interface ChatBubbleProps {
  message: ChatMessage;
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

export default function ChatBubble({ message }: ChatBubbleProps) {
  const isBot = message.role === "bot";

  return (
    <div className={cn("flex gap-2 items-end", isBot ? "justify-start" : "justify-end")}>
      {isBot && (
        <div className="w-7 h-7 rounded-full bg-teal-600 flex items-center justify-center shrink-0 mb-1">
          <svg
            width="14"
            height="14"
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
      )}

      <div className="flex flex-col gap-1 max-w-[78%]">
        <div
          className={cn(
            "px-4 py-2.5 rounded-2xl text-sm leading-relaxed",
            isBot
              ? "bg-gray-100 text-gray-800 rounded-bl-sm"
              : "bg-teal-600 text-white rounded-br-sm",
          )}
        >
          {message.text}
        </div>
        <span
          className={cn("text-[10px] text-gray-400", isBot ? "text-left pl-1" : "text-right pr-1")}
        >
          {formatTime(message.timestamp)}
        </span>
      </div>
    </div>
  );
}
