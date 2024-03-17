import PropTypes from 'prop-types';

const Recipes = ({recipes}) => {
    const {recipe_name, recipe_image, short_description, preparing_time, calories, ingredients} = recipes;
    return (
        <div>
            <div className="card rounded-3xl border-2 border-[#28282852]">
                <div className="mx-5 mt-5 ">
                    <img className="w-full h-full rounded-3xl" src={recipe_image} alt="" />
                </div>
                <div className="card-body">
                    <h2 className="text-2xl text-black font-semibold">{recipe_name}</h2>
                    <p className="text=xl text-[#878787] my-6">{short_description}</p>
                    <hr className="mb-5" />
                    <div>
                        <h2 className="text-xl font-medium mb-3">Ingredients: 5</h2>
                        {
                            ingredients.map((ingredient, idx) => <span key={idx} className='text-[#878787]'><li>{ingredient}</li></span>)
                        }
                    </div>
                    <hr className="my-5" />
                    <div className="text-[#282828] flex gap-6">
                        <h2> {preparing_time} </h2>
                        <h3>{calories}</h3>
                    </div>
                    <div className="mt-5">
                    <button className="btn bg-[#0BE58A] border-[#0BE58A] text-base rounded-full px-7">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Recipes.PropTypes = {
    recipes: PropTypes.object.isRequired
}

export default Recipes;