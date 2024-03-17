import PropTypes from 'prop-types';
import Cooking from './../Cooking/Cooking';

const Recipe_cook = ({wantcook}) => {
    const {recipe_id, recipe_name, preparing_time, calories} = wantcook;
    // const [cooking, setcooking] = useState([]);

    // const handlecooking = wantcook => {
    //     const newcooking = [...cooking, wantcook];
    //     setcooking(newcooking);
    // }
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
                            <th >Time</th>
                            <th className='mx-3'>Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            wantcook.map((wantcook) => (
                             <tr className='text-base font-normal mb-5' key={recipe_id}>
                                <td className='text-base font-normal'>{wantcook.recipe_id}</td>
                                <td className='text-base font-normal'>{wantcook.recipe_name}</td>
                                <td className='text-base font-normal'>{wantcook.preparing_time}</td>
                                <td className='text-base font-normal'>{wantcook.calories}</td>
                                <td>
                                  <button className="btn p-1 bg-[#0BE58A] border-[#0BE58A] text-base rounded-full" >Preparing </button>
                                </td>
                            </tr>
                            ))  
                        }
                    </tbody>
                </table>
            </div>
            {/* <Cooking cooking={cooking} ></Cooking> */}
        </div>
    );
};

Recipe_cook.PropTypes = {
    wantcook: PropTypes.object.isRequired
}

export default Recipe_cook;