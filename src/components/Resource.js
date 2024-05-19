import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

const Resource = ({ resource, onRename, onDelete, moveResource, index, moduleIndex }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(resource.name);

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'RESOURCE',
        item: { resource, index, moduleIndex },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    const [, drop] = useDrop({
        accept: 'RESOURCE',
        hover: (draggedItem) => {
            if (draggedItem.index !== index || draggedItem.moduleIndex !== moduleIndex) {
                moveResource(draggedItem.moduleIndex, draggedItem.index, moduleIndex, index);
                draggedItem.index = index;
                draggedItem.moduleIndex = moduleIndex;
            }
        },
    });

    const handleRename = () => {
        onRename(resource.id, newName);
        setIsEditing(false);
    };

    return (
        <div ref={(node) => drag(drop(node))} style={{ opacity: isDragging ? 0.5 : 1 }}>
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                    />
                    <button onClick={handleRename}>Save</button>
                </div>
            ) : (
                <div className="resource">
                    <span>{resource.name}</span>
                    <FiEdit onClick={() => setIsEditing(true)} />
                    <FiTrash2 onClick={() => onDelete(resource.id)} />
                </div>
            )}
        </div>
    );
};

export default Resource;
