import PropTypes from 'prop-types';
const Recipe_cook = ({wantcook}) => {
    const {recipe_id, recipe_name, preparing_time, calories} = wantcook;
    return (
        <div className='rounded-3xl border-2 border-[#28282852] p-3'>
            <h2 className='text-center text-2xl font-medium'>Want to cook: {wantcook.length}</h2>
            <hr className='border-t-2' />
            <div>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th className='mx-3'>Name</th>
                            <th className='mx-3'>Time</th>
                            <th className='mx-3'>Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            wantcook.map((wantcook) => (
                             <tr className='text-base font-normal' key={recipe_id}>
                                <th className='text-base font-normal'>{wantcook.recipe_id}</th>
                                <th className='text-base font-normal'>{wantcook.recipe_name}</th>
                                <th className='text-base font-normal'>{wantcook.preparing_time}</th>
                                <th className='text-base font-normal'>{wantcook.calories}</th>
                                <th>
                                <button className='btn bg-[#0BE58A] border-[#0BE58A] text-base rounded-full ' onClick={() => handleRecipeClick(recipe_id)}>Preparing </button>
                                </th>
                            </tr>
                            ))  
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

Recipe_cook.PropTypes = {
    wantcook: PropTypes.object.isRequired
}

export default Recipe_cook;