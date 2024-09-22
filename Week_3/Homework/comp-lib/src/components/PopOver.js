import React, { useState } from 'react';

const PopOver = ({ content, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <div onClick={() => setIsOpen(!isOpen)}>
        {children}
      </div>
      {isOpen && (
        <div className="absolute top-50 z-0absolute top-full left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 p-2 shadow-lg z-50">
          {content}
        </div>
      )}
    </div>
  );
};

export default PopOver;

