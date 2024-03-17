import { useEffect } from "react";
import { useState } from "react";

const Recipes_box = () => {

    const [recipes, setrecipes] = useState([])

    useEffect(() => {
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setrecipes(data))
    },[])

    return (
        <div>
            
        </div>
    );
};

export default Recipes_box;