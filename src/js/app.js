import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';
import Footer from './components/footer';
import Header from './components/header';
import Canvas from './containers/canvasOrbit';

const styles = {
  appWrapper: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '1280px'
  }
};
const propTypes = { classes: PropTypes.object };
const app = ({ classes }) => {
  return (
    <div className={classes.appWrapper}>
      <Header />
      <Grid container spacing={8}>
        <Grid item xs={12} sm={2} md={3}></Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Canvas />
        </Grid>
        <Grid item xs={12} sm={2} md={3}></Grid>
      </Grid>
      <Footer />
    </div>);
};

app.propTypes = propTypes;
export default withStyles(styles)(app);
