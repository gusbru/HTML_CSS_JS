# HTML/CSS/JS

This project shows a use case of `requestAnimationFrame` API.

Because of the way JavaScript event loop works, when a style is changed using `setInterval`, the UI update can take some time to be done. In that case, using `requestAnimationFrame` makes the browser to update the styles before the next repaint.

In this example, the font style is changed at each 1.0 second.
