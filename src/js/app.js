import React from 'react';
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

const app = props => {
  const { classes } = props;

  return (
    <div className={classes.appWrapper}>
      <Header />
      <CanvasBox />
      <Footer />
    </div>);
};

export default withStyles(styles)(app);
