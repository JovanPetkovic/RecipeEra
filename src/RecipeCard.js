import React from 'react';

const RecipeCard = ({ name, image, difficulty, prepTime, tags }) => {
    return (
        <div className="recipe-card">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>Difficulty: {difficulty}</p>
            <p>Prep Time: {prepTime}</p>
            <p>Tags: {tags.join(', ')}</p>
        </div>
    );
};

export default RecipeCard;
