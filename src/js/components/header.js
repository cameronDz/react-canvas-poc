import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

const styles = {
  display: 'block',
  headerContainer: {
    marginBottom: '32px',
    position: 'relative',
    textAlign: 'center',
    width: '100%'
  }
};
const propTypes = { classes: PropTypes.object };
const header = ({ classes }) => {
  return (
    <div className={classes.headerContainer}>
      This is the Header
    </div>);
};

header.propTypes = propTypes;
export default withStyles(styles)(header);
