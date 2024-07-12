"use client"
import React, { useEffect, useRef, useState } from 'react';

interface Vertex {
  id: number;
  x: number;
  y: number;
}

interface Edge {
  from: number;
  to: number;
}

const BentoGraph = () => {
  const [hoveredCircle, setHoveredCircle] = useState<number | null>(null);
  const [activeCircle, setActiveCircle] = useState<number | null>(null);

  const circles: Vertex[] = [
    { id: 0, x: 50, y: 28 },
    { id: 1, x: 168, y: 36 },
    { id: 2, x: 35, y: 129 },
    { id: 3, x: 350, y: 75 },
    { id: 4, x: 250, y: 166 },
    { id: 5, x: 383, y: 194 },
    { id: 6, x: 502, y: 90 },
    { id: 7, x: 627, y: 158 },
    { id: 8, x: 515, y: 247 },
    { id: 9, x: 395, y: 361 },
    { id: 10, x: 618, y: 350 },
    { id: 11, x: 559, y: -22 },

    { id: 12, x: -150, y: 100 },
    { id: 13, x: 360, y: -100 },
    { id: 14, x: 727, y: 158 },
    { id: 15, x: 500, y: 480 },
  ];

  const connections: Edge[] = [
    { from: 0, to: 1 },

    { from: 1, to: 2 },
    { from: 1, to: 3 },

    { from: 2, to: 0 },

    { from: 3, to: 4 },
    { from: 3, to: 11 },
    { from: 3, to: 5 },
    { from: 3, to: 6 },
    { from: 3, to: 8 },

    { from: 4, to: 5 },

    { from: 5, to: 6 },
    { from: 5, to: 7 },
    { from: 5, to: 9 },

    { from: 6, to: 11 },
    { from: 6, to: 7 },
    { from: 6, to: 8 },

    { from: 7, to: 8 },
    { from: 7, to: 10 },

    { from: 8, to: 9 },

    { from: 12, to: 0 },
    { from: 12, to: 2 },

    { from: 13, to: 3 },

    { from: 14, to: 7 },

    { from: 15, to: 8 },
    { from: 15, to: 9 },
  ];

  const getOffsetCoordinates = (x1: number, y1: number, x2: number, y2: number, radius: number) => {
    const angle = Math.atan2(y2 - y1, x2 - x1);
    const offsetX = Math.cos(angle) * radius;
    const offsetY = Math.sin(angle) * radius;
    return { x: x2 - offsetX, y: y2 - offsetY };
  };

  const handleMouseEnter = (id: number) => {
    setHoveredCircle(id);
  };

  const handleMouseLeave = () => {
    setHoveredCircle(null);
  };

  const handleCircleClick = (id: number) => {
    setActiveCircle(id);
    setTimeout(() => setActiveCircle(null), 5000); // Reset active circle after animation
  };

  return (
    <div
      className="absolute top-0 left-0 w-full h-full max-md:hidden"
    >
      <svg className="absolute top-0 left-0 w-full h-full">
        {connections.map((connection, index) => {
          const fromCircle = circles.find(circle => circle.id === connection.from);
          const toCircle = circles.find(circle => circle.id === connection.to);

          
          if (fromCircle && toCircle) {
            const isConnected = hoveredCircle === connection.from || hoveredCircle === connection.to;
            const isActiveConnection = activeCircle === connection.from || activeCircle === connection.to;

            const fromX = fromCircle.x * (529 / 700) + 17;
            const fromY = fromCircle.y * (334 / 450) + 17;
            const toX = toCircle.x * (529 / 700) + 17;
            const toY = toCircle.y * (334 / 450) + 17;

            const fromCoords = getOffsetCoordinates(fromX, fromY, toX, toY, 17);
            const toCoords = getOffsetCoordinates(toX, toY, fromX, fromY, 17);

            return (
              <line
                key={index}
                x1={fromCoords.x}
                y1={fromCoords.y}
                x2={toCoords.x}
                y2={toCoords.y}
                stroke="black"
                strokeWidth="2"
                className={`${isConnected ? "opacity-50" : "opacity-20"} ${isActiveConnection ? "animate-draw-line" : ""}`}
              />
            );
          }

          return null;
        })}
      </svg>
      {circles.map((circle) => (
        <span
          key={circle.id}
          className="absolute bg-white rounded-full opacity-50 h-[34px] w-[34px] hover:cursor-pointer hover:opacity-60 hover:scale-110 duration-100"
          style={{ top: `${circle.y*(334/450)}px`, left: `${circle.x*(529/700)}px` }}
          onMouseEnter={() => handleMouseEnter(circle.id)}
          onMouseLeave={handleMouseLeave}
          /*onClick={() => handleCircleClick(circle.id)}*/
        ></span>
      ))}
      <style jsx>{`
        @keyframes draw-line {
          from {
            stroke-dasharray: 0, 1000;
          }
          to {
            stroke-dasharray: 1000, 0;
          }
        }
        .animate-draw-line {
          animation: draw-line 3s linear forwards;
        }
      `}</style>
    </div>

  );
};

export default BentoGraph;
