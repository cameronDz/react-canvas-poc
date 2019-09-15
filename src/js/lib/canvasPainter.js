import get from 'lodash.get';
import { DOWN, LEFT, RIGHT, UP } from '../types/directions';

export const drawOnCanvas = (canvasContext, payload = {}) => {
  if (canvasContext) {
    // get all variables out of payload
    const boxHeight = get(payload, 'box.height', 0);
    const boxWidth = get(payload, 'box.width', 0);

    const xCoord = get(payload, 'positions.xCoord', 0);
    const yCoord = get(payload, 'positions.yCoord', 0);
    const width = get(payload, 'positions.width', 0);
    const height = get(payload, 'positions.height', 0);

    // paint canver
    canvasContext.clearRect(0, 0, boxWidth, boxHeight);
    canvasContext.fillRect(xCoord, yCoord, width, height);
  }
};

export const determineChangesOnCanvas = (payload = {}) => {
  console.log('payload', payload);
  // attempt to safely get all payload material
  const canvasHeightRef = get(payload, 'canvasHeightRef', -1);
  const canvasWidthRef = get(payload, 'canvasWidthRef', -1);
  const height = get(payload, 'height', -1);
  const keyCode = get(payload, 'keyCode', -1);
  const width = get(payload, 'width', -1);
  const xCoordRef = get(payload, 'xCoordRef', -1);
  const yCoordRef = get(payload, 'yCoordRef', -1);

  let newCoord;
  const response = { changes: {} };
  switch (keyCode) {
    case (LEFT):
      newCoord = xCoordRef - 5;
      if (newCoord >= 0) {
        response.changes.xCoord = newCoord;
      }
      break;
    // d keycode
    case (RIGHT):
      newCoord = xCoordRef + 5;
      if (newCoord <= canvasWidthRef - width) {
        response.changes.xCoord = newCoord;
      }
      break;
    // s keycode
    case (DOWN):
      newCoord = yCoordRef + 5;
      if (newCoord <= canvasHeightRef - height) {
        response.changes.yCoord = newCoord;
      }
      break;
    // w keycode
    case (UP):
      newCoord = yCoordRef - 5;
      if (newCoord >= 0) {
        response.changes.yCoord = newCoord;
      }
      break;
    default: // do nothing
  };
  return response;
};
