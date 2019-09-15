import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

const styles = {
  display: 'block',
  headerContainer: {
    marginTop: '32px',
    position: 'relative',
    textAlign: 'center',
    width: '100%'
  }
};
const propTypes = { classes: PropTypes.object };
const footer = ({ classes }) => {
  return (
    <div className={classes.headerContainer}>
      This is the Footer
    </div>);
};

footer.propTypes = propTypes;
export default withStyles(styles)(footer);
