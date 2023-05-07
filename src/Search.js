import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        const searchWords = value.trim().split(' ');
        onSearch(searchWords);
    };

    return (
        <div>
            <input type="text" className={"form-control srch"} placeholder="Search..." value={searchTerm} onChange={handleInputChange} />
        </div>
    );
};

export default SearchBar;
