import React from 'react';
import Module from './Module';

const ModuleList = ({ modules, setModules }) => {
    const updateModule = (index, updatedModule) => {
        const newModules = [...modules];
        if (updatedModule === null) {
            newModules.splice(index, 1);
        } else {
            newModules[index] = updatedModule;
        }
        setModules(newModules);
    };

    return (
        <div className="module-list">
            {modules.map((module, index) => (
                <Module
                    key={module.id}
                    module={module}
                    updateModule={(updatedModule) => updateModule(index, updatedModule)}
                />
            ))}
        </div>
    );
};

export default ModuleList;
