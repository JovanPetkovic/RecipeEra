import React, {useState} from 'react';
import RecipeCategory from "./RecipeCategory";
import Filter from "./Filter";
import {recipeList} from "./recipeList";
import Search from "./Search";
function Recipes(){

    const tagList = [];
    function listTags() {
        recipeList.forEach(function(recipe){
            // Prolazimo sve recepte
            recipe.tags.forEach(function (rTag) { //Prolazimo sve tagove unutar jednog recepta
                if(!tagList.includes(rTag)){
                    tagList.push(rTag); //Ako ne postoji tag unutar liste svih tagova, dodaj ga
                }
            })
        });
    }
    listTags();

    const [selectedTags, setSelectedTags] = useState([]);
    const [searchTags, setSearchTags] = useState([]);

    const handleSearchChange = (selected) => {
        setSearchTags(selected);
    }
    const handleTagFilterChange = (selected) => {
        setSelectedTags(selected);
    };

    return(
        <div>
            <Search onSearch={handleSearchChange}/>
            <Filter items={tagList} onChange={handleTagFilterChange}/>
            <RecipeCategory title={"Recipes"} tags={selectedTags} search={searchTags}/>
        </div>
    );
}

export default Recipes;