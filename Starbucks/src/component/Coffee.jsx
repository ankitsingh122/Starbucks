import React from 'react'
import PropTypes from "prop-types";

function Coffee(props) {
  return (
    <>
      <div>
        <img className="w-35 h-24 rounded-full" src={props.img} alt="" />
      </div>
      
    </>
  );
}
Coffee.propTypes = {
  img: PropTypes.string.isRequired,
};


export default Coffee
