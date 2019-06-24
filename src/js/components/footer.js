import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = {
  display: 'block',
  headerContainer: {
    marginTop: '32px',
    position: 'relative',
    textAlign: 'center',
    width: '100%'
  },
};

const footer = props => {
  const { classes } = props;
  return (
    <div className={classes.headerContainer}>
      This is the Footer
    </div>);
};

export default withStyles(styles)(footer);
