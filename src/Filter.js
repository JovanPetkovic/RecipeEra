import React, {useState} from 'react';

const Filter = ({ items, onChange }) => {
    const [selected, setSelected] = useState([]);

    const handleToggle = (value) => {
        const index = selected.indexOf(value);
        const newSelected = [...selected];

        if (index === -1) {
            newSelected.push(value);
        } else {
            newSelected.splice(index, 1);
        }

        setSelected(newSelected);
        onChange(newSelected);
    };

    return (
        <div>
            {items.map((item) => (
                <label key={item}>
                    <input
                        type="checkbox"
                        value={item}
                        checked={selected.includes(item)}
                        onChange={() => handleToggle(item)}
                    />
                    {item}
                </label>
            ))}
        </div>
    );
};

export default Filter;