import { useEffect } from "react";
import { useState } from "react";
import Recipes from "../Recipes/Recipes";
import Recipe_cook from "../Recipes_cook/Recipe_cook";

const Recipes_box = () => {

    const [recipeses, setrecipeses] = useState([])

    useEffect(() => {
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setrecipeses(data))
    },[])

    return (
        <div className="lg:w-10/12 mx-auto mt-14">
            <div className="text-center w-3/5 mx-auto mb-6">
                <h2 className="text-5xl font-extrabold text-black mb-6">Our Recipes</h2>
                <p className="text-xl  text-[#878787]">Bengali cuisine: Vibrant spices, seafood delights, aromatic rice dishes, and sweet treats, capturing the essence of Bengali culture and tradition.</p>
            </div>
            <div>
                <div className="grid grid-cols-2 gap-4">
                    {
                        recipeses.map(recipes =><Recipes key={recipeses.recipe_id}  recipes={recipes}></Recipes>)
                    }
                </div>
                <Recipe_cook></Recipe_cook>

            </div>
            
        </div>
    );
};

export default Recipes_box;