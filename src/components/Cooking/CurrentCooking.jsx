import React from 'react'
import PropTypes from 'prop-types'

const CurrentCooking = ({cooking}) => {
    console.log(cooking)
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th className='mx-3'>Name</th>
                    <th >Time</th>
                    <th className='mx-3'>Calories</th>
                </tr>
            </thead>
            <tbody>
                {
                    cooking.map((cook, index) => (
                    <tr className='text-base font-normal mb-5' key={cook.recipe_id}>
                        <td className='text-base font-normal'>{index+1}</td>
                        <td className='text-base font-normal'>{cook.recipe_name}</td>
                        <td className='text-base font-normal'>{cook.preparing_time}</td>
                        <td className='text-base font-normal'>{cook.calories}</td>
                    </tr>
                    ))  
                }
            </tbody>
        </table>
      
    </div>
  )
}

CurrentCooking.propTypes = {
    cooking: PropTypes.object.isRequired

}

export default CurrentCooking
