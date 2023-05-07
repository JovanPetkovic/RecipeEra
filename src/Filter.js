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
        <div className="d-flex flex-wrap align-items-between mx-auto text-center my-5" style={{width: '90%'}}>
            {items.map((item) => (
                <label key={item} className="form-check form-check-inline" style={{width: '100px'}}>
                    <input
                        type="checkbox"
                        value={item}
                        checked={selected.includes(item)}
                        onChange={() => handleToggle(item)}
                        className="form-check-input"
                    />
                    <span className="form-check-label">{item}</span>
                </label>
            ))}
        </div>

    );
};

export default Filter;