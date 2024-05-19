import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const DraggableItem = ({ item }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'RESOURCE',
        item,
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    return (
        <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
            {item.name}
        </div>
    );
};

export default DraggableItem;
