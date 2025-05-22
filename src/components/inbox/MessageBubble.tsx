import React from 'react';
import clsx from 'clsx';

interface MessageBubbleProps {
  children: React.ReactNode;
  isUser?: boolean;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ 
  children, isUser = false 
}) => {
  return (
    <div className={clsx(
      "max-w-[85%] mb-3 p-3 rounded-lg",
      isUser 
        ? "bg-intercom-blue text-white ml-auto" 
        : "bg-gray-100 text-intercom-text"
    )}>
      <p className="text-sm">{children}</p>
    </div>
  );
};