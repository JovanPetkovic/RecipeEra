import React from 'react';

const RecipeCard = ({ name, image, difficulty, prepTime, tags }) => {
    return (
        <div className="card recipe-card">
            <img src={image} alt={name} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Difficulty: {difficulty}</p>
                <p className="card-text">Prep Time: {prepTime}</p>
                <p className="card-text">Tags: {tags.join(', ')}</p>
            </div>
        </div>
    );
};

export default RecipeCard;
