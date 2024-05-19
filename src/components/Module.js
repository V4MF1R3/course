import React from 'react';
import DraggableItem from './DraggableItem';

const Module = ({ module, updateModule }) => {
    const renameModule = (newName) => {
        updateModule({ ...module, name: newName });
    };

    const deleteModule = () => {
        updateModule(null);
    };

    return (
        <div className="module">
            <input
                type="text"
                value={module.name}
                onChange={(e) => renameModule(e.target.value)}
            />
            <button onClick={deleteModule}>Delete Module</button>
            <div className="resources">
                {module.resources.map((resource) => (
                    <DraggableItem key={resource.id} item={resource} />
                ))}
            </div>
        </div>
    );
};

export default Module;
