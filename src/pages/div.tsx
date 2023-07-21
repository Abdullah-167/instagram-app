import { useRef, useState } from "react";

const DraggableDiv = ({ onDrag }) => {
  const draggableRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const { left, top } = draggableRef.current.getBoundingClientRect();
    setDragOffset({ x: e.clientX - left, y: e.clientY - top });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const { clientX, clientY } = e;
    const parentRect = draggableRef.current.parentElement.getBoundingClientRect();
    const newX = clientX - parentRect.left - dragOffset.x;
    const newY = clientY - parentRect.top - dragOffset.y;
    draggableRef.current.style.transform = `translate(${newX}px, ${newY}px)`;
    if (onDrag) {
      onDrag({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={draggableRef}
      className="absolute bg-blue-500 p-4 rounded cursor-move transition-transform duration-300"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      Drag me!
    </div>
  );
};

export default DraggableDiv;
