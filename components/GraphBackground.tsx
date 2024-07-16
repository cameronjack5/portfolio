import React, { useState, useEffect } from 'react';

interface GraphBackgroundProps {
  isHovering: number;
}

const generateRandomPoints = () => {
  const points = [];
  for (let i = 0; i < 5; i++) {
    const x = i * 16;
    const y = Math.floor(Math.random() * 20 - i*5 + 20);
    points.push({ x, y });
  }
  return points;
};

const generatePathData = (points: { x: number; y: number }[]) => {
  return points.map((point, index) => {
    return `${index === 0 ? 'M' : 'L'}${point.x} ${point.y}`;
  }).join(' ');
};

const GraphBackground: React.FC<GraphBackgroundProps> = ({ isHovering }) => {
  const [lines, setLines] = useState<Array<{ x: number; y: number }[]>>([]);
  const colours = ["stroke-red-700/[0.5]", "stroke-green-700/[0.5]", "stroke-yellow-700/[0.5]", "stroke-blue-700/[0.5]"]

  useEffect(() => {
    const generatedLines = Array.from({ length: 4 }, () => generateRandomPoints());
    setLines(generatedLines);
  }, []);

  return (
    <div className="absolute top-1 left-0 w-full h-full">
      <svg
        className={`line-graph ${
          isHovering === 2 ? 'animate-graph-draw' : 'animate-graph-undraw'
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 32"
      >
        {lines.map((points, index) => { 
          return (
            <path
              key={index}
              d={generatePathData(points)}
              fill="none"
              className={`line-graph ${
                isHovering === 2 ? 'animate-graph-draw' : 'animate-graph-undraw'
              } ${colours[index % colours.length]}`} // Assign a Tailwind color class to each line
            />
          )}
        )}
      </svg>
    </div>
  );
};

export default GraphBackground;
