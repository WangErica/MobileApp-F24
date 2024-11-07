import React from 'react';
import Button from '../components/Button';
import PopOver from '../components/PopOver';

export default function PopOverPage(){
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">PopOver</h1>
      <PopOver content={<div>This is the popover content!</div>}>
        <Button primary className="text-white px-4 py-2 rounded">Click me</Button>
      </PopOver>
    </div>
  );
};
