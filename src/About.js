import React from 'react';
import {Container} from "react-bootstrap";

function About(){
    return (
        <Container className="my-5">
        <h1 className="text-center mb-5">About RecipeEra</h1>
        <p>
            RecipeEra is a platform that allows you to search and discover new recipes from all around the world. Whether you are looking for a quick and easy dinner recipe or a fancy dessert for a special occasion, our database has something for everyone.
        </p>
        <p>
            Our team of recipe experts is constantly adding new recipes to our database, so you will never run out of ideas for what to cook. We also allow users to submit their own recipes, so if you have a family favorite or a secret recipe that you would like to share with the world, you can do so on our platform.
        </p>
        <p>
            Our mission is to make cooking and meal planning as easy and enjoyable as possible. With RecipeEra, you can easily find recipes that fit your dietary preferences and requirements, such as vegetarian, gluten-free, or low-carb. You can also save your favorite recipes to your account and create custom meal plans for the week ahead.
        </p>
        </Container>
    )
}

export default About;