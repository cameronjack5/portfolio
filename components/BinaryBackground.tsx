import React, { useEffect, useState } from 'react';

const BinaryBackground = ({ isHovering }: { isHovering: boolean }) => {
  const [binaryGrid, setBinaryGrid] = useState<string[][]>([]);
  const gridSizeY = 6; // Define the grid size
  const gridSizeX = 100;

  useEffect(() => {
    const initialGrid = Array.from({ length: gridSizeY }, () =>
      Array.from({ length: gridSizeX }, () => (Math.random() > 0.5 ? '1' : '0'))
    );
    setBinaryGrid(initialGrid);
  }, []);

  useEffect(() => {
    if (isHovering) {
      const interval = setInterval(() => {
        const newGrid = binaryGrid.map(row => row.slice()); // Copy the grid

        // Randomly update 10% of the grid cells
        const totalCells = gridSizeX * gridSizeY;
        const cellsToUpdate = Math.floor(totalCells * 0.02);

        for (let i = 0; i < cellsToUpdate; i++) {
          const randRow = Math.floor(Math.random() * gridSizeY);
          const randCol = Math.floor(Math.random() * gridSizeX);
          newGrid[randRow][randCol] = newGrid[randRow][randCol] === '0' ? '1' : '0';
        }

        setBinaryGrid(newGrid);
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isHovering, binaryGrid]);

  

  return (
    <div className="opacity-40 cursor-default select-none absolute top-0 left-0 z-5 w-full h-full grid grid-cols-20 grid-rows-20">
      {binaryGrid.map((row, rowIndex) =>
        <div className="flex">
          {row.map((digit, colIndex) => (
            <span
              key={`${rowIndex}-${colIndex}`}
              className="flex items-center justify-center hover:bg-opacity-50"
            >
              {digit}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default BinaryBackground;
