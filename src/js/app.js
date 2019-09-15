import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Footer from './components/footer';
import Header from './components/header';
import CanvasBox from './containers/canvasBox';

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
      <CanvasBox />
      <Footer />
    </div>);
};

app.propTypes = propTypes;
export default withStyles(styles)(app);
