import React from 'react';
import PropTypes from 'prop-types';

const Banner = ({ message }) => (
  <section className="main-banner">
    <h1>{message}</h1>
  </section>
);

Banner.defaultProps = {
  message: 'Welcome developers!',
};

Banner.propTypes = {
  message: PropTypes.string,
};

export default Banner;
