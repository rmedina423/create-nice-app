import React from 'react';
import PropTypes from 'prop-types';


export default function Party(props) {
  return (
    <div>
      <img src={props.partyPenguin} alt="🐧" />
    </div>
  );
}

Party.propTypes = {
  partyPenguin: PropTypes.string.isRequired
};