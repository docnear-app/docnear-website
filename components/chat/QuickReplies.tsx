import type { QuickReply } from "@/data/chat";

interface QuickRepliesProps {
  replies: QuickReply[];
  onSelect: (value: string) => void;
}

export default function QuickReplies({ replies, onSelect }: QuickRepliesProps) {
  return (
    <div className="flex flex-wrap gap-2 px-4 pb-3">
      {replies.map((reply) => (
        <button
          key={reply.value}
          onClick={() => onSelect(reply.value)}
          className="text-xs px-3 py-1.5 rounded-full border border-teal-200 text-teal-700 bg-teal-50 hover:bg-teal-100 transition-colors"
        >
          {reply.label}
        </button>
      ))}
    </div>
  );
}
