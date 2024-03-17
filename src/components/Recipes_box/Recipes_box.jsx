import { useEffect } from "react";
import { useState } from "react";
import Recipes from "../Recipes/Recipes";
import Recipe_cook from "../Recipes_cook/Recipe_cook";
import CurrentCooking from "../Cooking/CurrentCooking";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Recipes_box = () => {

    const [recipeses, setrecipeses] = useState([]);
    const [wantcook, setwantcook] = useState([]);
    const [cooking, setcooking] = useState([]);
    
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
            toast("Successfully Added !");
        }
        else {
            toast("Already it is in Preparing Section !");
        }
    }
    const handledelete = (id) => {
        const newwantcook = wantcook.filter(item => item.recipe_id != id.recipe_id);
        setwantcook(newwantcook);
        const newcooking = [...cooking, id];
        setcooking(newcooking);
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
                <div className="w-1/4 rounded-3xl border-2 border-[#28282852] p-3">
                    <h2 className='text-center text-2xl font-medium'>Want to cook: {wantcook.length}</h2>
                    <hr className='border-t-2' />
                    <div className="bg-[#8f8f8f33] rounded-xl my-2 p-1">
                        <Recipe_cook wantcook={wantcook} handledelete={handledelete}></Recipe_cook>
                    </div>

                    <h2 className='text-center text-2xl font-medium mt-5'>Currently cooking: {cooking.length}</h2>
                    <hr className='border-t-2' />
                    <div>
                        <CurrentCooking cooking={cooking} ></CurrentCooking>
                    </div>
                </div>
                
                <ToastContainer />
            </div>
            
        </div>
    );
};

export default Recipes_box;