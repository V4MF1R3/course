import React from 'react';

const ResourceUploader = ({ addResource }) => {
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            addResource({
                id: Date.now(),
                name: file.name,
                type: file.type,
                url: URL.createObjectURL(file),
            });
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileUpload} />
        </div>
    );
};

export default ResourceUploader;
