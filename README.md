## React Canvas POC ##
Simple Proof of Concept app for manipulating a canvas element in HTML with React Hooks. Creates a small box in the web browser window with a square in the box that can be moved around without actually leaving the box.

### Running ###
With Node.js, can run the app locally with the following commands

```
npm install
npm run build
npm run start
```

### Frameworks, Technologies, and Utitlies ###
 - Basic [HTML canvas element](https://www.w3schools.com/graphics/canvas_intro.asp) to draw graphics.
 - [React Hooks](https://reactjs.org/docs/hooks-reference.html) for data manipulation in JavaScript; useEffect, useRef, and useState specifically.
 - [JSS](https://cssinjs.org/) for basic styling; which doesn't really exist for the Minimum Viable Product.
 - [Material-UI](https://material-ui.com/) for Grid styling.
 - [Webpack](https://webpack.js.org/) for bundling the application.
 - [Babel](https://babeljs.io/) for compiling the JavaScript.

## Canvas Docs ##
```context.arc(x, y, r, sAngle, eAngle, counterclockwise);```
* ```x``` The x-coordinate of the center of the circle
* ```y``` The y-coordinate of the center of the circle
* ```r``` The radius of the circle
* ```sAngle``` The starting angle, in radians (0 is at the 3 o'clock position of the arc's circle)
* ```eAngle``` The ending angle, in radians
* ```counterclockwise``` Optional. Specifies whether the drawing should be counterclockwise or clockwise. False is default, and indicates clockwise, while true indicates counter-clockwise.
[W3 Source](https://www.w3schools.com/tags/canvas_arc.asp)
