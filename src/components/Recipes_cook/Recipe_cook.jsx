import PropTypes from 'prop-types';

const Recipe_cook = ({wantcook,handledelete}) => {
    const {recipe_id, recipe_name, preparing_time, calories} = wantcook;

    return (
        <div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th className='mx-3'>Name</th>
                            <th >Time</th>
                            <th className='mx-3'>Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            wantcook.map((wantcook, index) => (
                             <tr className='text-base font-normal mb-5' key={recipe_id}>
                                <td className='text-base font-normal'>{index+1}</td>
                                <td className='text-base font-normal'>{wantcook.recipe_name}</td>
                                <td className='text-base font-normal'>{wantcook.preparing_time}</td>
                                <td className='text-base font-normal'>{wantcook.calories}</td>
                                <td>
                                  <button onClick={()=>
                                    handledelete(wantcook)
                                    } className="btn p-1 bg-[#0BE58A] border-[#0BE58A] text-base rounded-full" >Preparing </button>
                                </td>
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