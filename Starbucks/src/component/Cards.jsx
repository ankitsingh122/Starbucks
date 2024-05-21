import React from "react";
import PropTypes from "prop-types";

function Cards(props) {
  return (
    <div
      className="max-w-5xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 josefin-sans-uniqueProfile"
      data-aos="fade-in"
    >
      <img className="rounded-t-lg" src={props.img} alt="" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Starbucks India
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          At Starbucks, the aroma of freshly brewed coffee beckons, A sanctuary
          where moments are savored, friendships deepen. From the first sip to
          the last, a journey of delight, In each cup, a symphony of flavors, a
          moment of respite.
        </p>
      </div>
    </div>
  );
}

Cards.propTypes = {
  img: PropTypes.string.isRequired,
};

export default Cards;
