import React from 'react';
import RecipeCategory from "./RecipeCategory";

function Home() {
    return (
        <div>
            <RecipeCategory title={"Vegan"} tags={['Vegan']} search={[]}/>
            <RecipeCategory title={"Seafood"} tags={['Seafood']} search={[]}/>
            <RecipeCategory title={"Popular"} tags={['popular']} search={[]}/>
            <RecipeCategory title={"Dessert"} tags={['Dessert']} search={[]}/>
        </div>
    );
}

export default Home;
