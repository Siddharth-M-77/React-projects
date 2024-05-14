import React from 'react';

function BgChanger({ setColor }) {
  const colors = [
    { name: 'Red', value: 'red', bg: 'bg-red-600' },
    { name: 'Yellow', value: 'yellow', bg: 'bg-yellow-700' },
    { name: 'Grey', value: 'grey', bg: 'bg-gray-600' },
    { name: 'Orange', value: 'orange', bg: 'bg-orange-600' },
    { name: 'Black', value: 'black', bg: 'bg-black text-white' },
    { name: 'Blue', value: 'blue', bg: 'bg-blue-800' },
    { name: 'Maroon', value: 'maroon', bg: 'bg-amber-800' },
    { name: 'Purple', value: 'purple', bg: 'bg-purple-800' }
  ];

  return (
    <div className='btns w-full h-10 absolute bottom-1 flex items-center justify-center gap-10 rounded-full bg-gray-800'>
      {colors.map((color, index) => (
        <button
          key={index}
          onClick={() => setColor(color.value)}
          className={`px-4 py-2 rounded-full ${color.bg}`}
        >
          {color.name}
        </button>
      ))}
    </div>
  );
}

export default BgChanger;
