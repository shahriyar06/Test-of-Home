import React from 'react'
import PropTypes from 'prop-types'

const Cooking = ({cooking}) => {
    const {recipe_id, recipe_name, preparing_time, calories} = cooking;
  return (
    <div>
      
    </div>
  )
}

Cooking.propTypes = {
    cooking: PropTypes.object.isRequired
}

export default Cooking;
