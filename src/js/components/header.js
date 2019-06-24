import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  display: 'block',
  headerContainer: {
    marginBottom: '32px',
    position: 'relative',
    textAlign: 'center',
    width: '100%'
  },
};

const header = props => {
  const { classes } = props;
  return (
    <div className={classes.headerContainer}>
      This is the Header
    </div>);
};

export default withStyles(styles)(header);
