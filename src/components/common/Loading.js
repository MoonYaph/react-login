import React from 'react';
import PropTypes from 'prop-types'

import Spinner from 'react-spinkit';

const propTypes = {
  isLoading: PropTypes.bool.isRequired,
  timedOut: PropTypes.bool.isRequired,
  pastDelay: PropTypes.bool.isRequired,
  error: PropTypes.bool,
};

function Loading(props) {
  if (props.isLoading) {
    // While our other component is loading...
    if (props.timedOut) {
      // In case we've timed out loading our other component.
      return 'Loader timed out!';
    } else if (props.pastDelay) {
      // Display a loading screen after a set delay.
      return (
        <Spinner name="cube-grid" color="purple" style={{ margin: 'auto' }} />
      );
    } 
      // Don't flash "Loading..." when we don't need to.
      return null;
    
  } else if (props.error) {
    // If we aren't loading, maybe
    return 'Error! Component failed to load';
  } 
    // This case shouldn't happen... but we'll return null anyways.
    return null;
  
}

Loading.propTypes = propTypes;

export default Loading;
