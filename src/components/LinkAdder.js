import React, { useState } from 'react';

const LinkAdder = ({ addLink }) => {
    const [link, setLink] = useState('');

    const handleAddLink = () => {
        addLink({ id: Date.now(), url: link });
        setLink('');
    };

    return (
        <div>
            <input
                type="text"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="Add a link"
            />
            <button onClick={handleAddLink}>Add Link</button>
        </div>
    );
};

export default LinkAdder;
