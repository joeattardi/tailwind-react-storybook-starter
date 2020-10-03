import React from 'react';

export default function Button({ children }) {
  return (
    <button className="bg-teal-700 px-8 py-2 text-white rounded">{children}</button>
  );
}
