import React, {Component, useState} from 'react';
import {recipeList} from './recipeList';
import RecipeCard from './RecipeCard';

class RecipeCategory extends Component{

    constructor(props) {
        super(props);
        this.state = {
            shownRecipes : recipeList.slice()
        };
    }



    extractRecipe = (tags) => {
        const foundRecipes = [];
        if(tags.length > 0) {
            recipeList.forEach(function (recipe) {
                tags.forEach(function (tag) {
                    if (recipe.tags.some((elem) => elem.toLowerCase() === tag.toLowerCase())) {
                        if (!foundRecipes.includes(recipe)) {
                            foundRecipes.push(recipe);
                            return;
                        }
                    }
                })
            });
            return foundRecipes;
        }
        else{
            return recipeList.slice();
        }
    }

    containsString = (recipe, searchString) => {
        const recipeValues = Object.values(recipe);
        for (let i = 0; i < recipeValues.length; i++) {
            const value = recipeValues[i];
            if (typeof value === 'string' && value.toLowerCase().includes(searchString.toLowerCase())) {
                return true;
            }
            if (Array.isArray(value)) {
                for (let j = 0; j < value.length; j++) {
                    const arrayValue = value[j];
                    if (typeof arrayValue === 'string' && arrayValue.toLowerCase().includes(searchString.toLowerCase())) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    // checkSearch = (searchTags) => {
    //     var self = this;
    //     var tmpRecipes = this.state.shownRecipes.slice();
    //     if(searchTags.length>0) {
    //         tmpRecipes.forEach(function (recipe) {
    //             searchTags.forEach(function (searchTag) {
    //                 if (!self.containsString(recipe, searchTag)) {
    //                     const index = tmpRecipes.indexOf(recipe);
    //                     if (index !== -1) {
    //                         tmpRecipes.splice(index, 1);
    //                     }
    //                 }
    //             })
    //         })
    //     }
    //     return tmpRecipes.slice();
    // }

    checkSearch = (searchTags) => {
        var self = this;
        var tmpRecipes = self.state.shownRecipes.slice();
        if(searchTags.length>0) {
            tmpRecipes = tmpRecipes.filter(recipe => {
                return searchTags.some(searchTag => {
                    return self.containsString(recipe, searchTag);
                });
            });
        }
        return tmpRecipes
    }

    render = () =>
    {
        const {title, tags, search} = this.props;
        this.state.shownRecipes = this.extractRecipe(tags);
        this.state.shownRecipes = this.checkSearch(search);
        return (
            <div className="category">
                <h2>{title}</h2>
                <div className="recipe-cards">

                    {this.state.shownRecipes.map((recipe) => (
                        <RecipeCard
                            key={recipe.id}
                            name={recipe.name}
                            image={recipe.image}
                            difficulty={recipe.difficulty}
                            prepTime={recipe.prepTime}
                            tags={recipe.tags}
                        />
                    ))}
                </div>
            </div>
        );
    }
};

export default RecipeCategory;
