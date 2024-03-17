import { useEffect } from "react";
import { useState } from "react";
import Recipes from "../Recipes/Recipes";
import Recipe_cook from "../Recipes_cook/Recipe_cook";

const Recipes_box = () => {

    const [recipeses, setrecipeses] = useState([]);
    const [wantcook, setwantcook] = useState([]);


    useEffect(() => {
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setrecipeses(data))
    },[])

    const handleWantcook = (Recipes) => {
        const isExist = wantcook.find((pd) => pd.recipe_id == Recipes.recipe_id);
        if(!isExist){
            const newcook = [...wantcook, Recipes];
            setwantcook(newcook);
        }
        else {
            alert("Already in Cook");
        }
    }
    const handledelete = (id) => {
        const newwantcook = wantcook.filter(item => item.recipe_id != id);
        setwantcook(newwantcook);
    }

    return (
        <div className="lg:w-10/12 lg:mx-auto mt-14 mx-3">
            <div className="text-center w-3/5 mx-auto mb-6">
                <h2 className="text-5xl font-extrabold text-black mb-6">Our Recipes</h2>
                <p className="text-xl  text-[#878787]">Bengali cuisine: Vibrant spices, seafood delights, aromatic rice dishes, and sweet treats, capturing the essence of Bengali culture and tradition.</p>
            </div>
            <div className="lg:flex gap-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:w-3/4">
                    {
                        recipeses.map(recipes =><Recipes key={recipeses.recipe_id}  recipes={recipes} handleWantcook={handleWantcook}></Recipes>)
                    }
                </div>
                <div className="w-1/4">
                    <Recipe_cook wantcook={wantcook} handledelete={handledelete}></Recipe_cook>
                </div>
                

            </div>
            
        </div>
    );
};

export default Recipes_box;