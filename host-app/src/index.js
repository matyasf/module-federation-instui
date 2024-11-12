import ReactDOM from "react-dom";
import React from "react";
globalThis.aaa = "globalthis set in host app"

console.log("Loading host app")
// The important part 1:
// MUST be before importing appInjector because it imports InstUI v10
// This makes sure that globalThis contains the InstUI v8 theme
import {canvas, canvasHighContrast} from "@instructure/ui";
console.log('imported:', canvas, canvasHighContrast)

// this makes the init async, this allows the federation plugin lot load the guest module.
// It needs to be here otherwise the guestApp/appInjector would not exist
import('./bootstrap').catch((e) => {
    // will end up here if the guest module cannot be downloaded
    ReactDOM.render(<code>Init error: {e.toString()}<br/><br/>{e.stack}</code>,
        document.getElementById('root'));
});
