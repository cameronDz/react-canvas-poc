import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import { withStyles } from '@material-ui/styles';
import { determineChangesOnCanvas, drawOnCanvas } from '../lib/canvasPainter';

const styles = {
  display: 'block',
  canvasElement: {
    height: 'auto',
    outlineStyle: 'solid',
    position: 'relative',
    width: '100%'
  }
};
const propTypes = { classes: PropTypes.object };
const canvasBox = ({ classes }) => {
  const height = 5;
  const width = 5;

  const [canvasHeight, setCanvasHeight] = useState(0);
  const [canvasWidth, setCanvasWidth] = useState(0);
  const [xCoord, setXCoord] = useState(0);
  const [yCoord, setYCoord] = useState(0);

  // keep state updated for event listener
  const canvasHeightRef = useRef(canvasHeight);
  const canvasWidthRef = useRef(canvasWidth);
  const xCoordRef = useRef(xCoord);
  const yCoordRef = useRef(yCoord);

  useEffect(() => {
    // set size of canvas only once
    const canvasElement = document.getElementById('canvas-element');
    const box = getBoxDetails(canvasElement);
    setCanvasHeight(box.height);
    setCanvasWidth(box.width);

    // movement key event listener
    document.addEventListener('keydown', handleKeyDownEvent);
  }, []);

  // repaint canvas
  useEffect(() => {
    const canvasElement = document.getElementById('canvas-element');
    const context = canvasElement.getContext('2d');

    // create position objects and redraw on canvas
    const box = getBoxDetails(canvasElement);
    const positions = getPositions();
    const payload = { box, positions };
    drawOnCanvas(context, payload);
  }, [xCoord, yCoord]);

  // update refs
  useEffect(() => {
    canvasHeightRef.current = canvasHeight;
    canvasWidthRef.current = canvasWidth;
    xCoordRef.current = xCoord;
    yCoordRef.current = yCoord;
  }, [canvasHeight, canvasWidth, xCoord, yCoord]);

  const getBoxDetails = element => {
    return {
      height: element.height,
      width: element.width
    };
  };

  const getPositions = () => {
    return { height, width, xCoord, yCoord };
  };

  const handleKeyDownEvent = event => {
    const keyCode = get(event, 'keyCode', -1);
    const currentCanvasPayload = {
      height,
      keyCode,
      width,
      canvasHeightRef: canvasHeightRef.current,
      canvasWidthRef: canvasWidthRef.current,
      xCoordRef: xCoordRef.current,
      yCoordRef: yCoordRef.current
    };
    const changesOnCanvasPayload = determineChangesOnCanvas(currentCanvasPayload);
    const newXCoord = get(changesOnCanvasPayload, 'changes.xCoord', -1);
    const newYCoord = get(changesOnCanvasPayload, 'changes.yCoord', -1);
    if (newXCoord >= 0) {
      setXCoord(newXCoord);
    } else if (newYCoord >= 0) {
      setYCoord(newYCoord);
    }
  };

  return <canvas className={classes.canvasElement} id="canvas-element"></canvas>;
};

canvasBox.propTypes = propTypes;
export default withStyles(styles)(canvasBox);
