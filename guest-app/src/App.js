import LocalButton from './LocalButton';
import React from 'react';
import {Button, Tooltip, Alert, InstUISettingsProvider, RadioInput, RadioInputGroup} from "@instructure/ui";
// The important part 2: this local theme does not read from globalThis
import {canvasHighContrastThemeLocal} from "@instructure/ui-themes";
import {PopoverSample} from "./popover";

console.log("rendering guest app")

const App = () => (
    <InstUISettingsProvider theme={canvasHighContrastThemeLocal}>
        <div style={{ border: '1px red solid' }} data-e2e="SHARED__REACT_BLOCK">
        <h1>Guest Application - React Version {React.version}</h1>
        <h2>InstUI v10</h2>
        <RadioInputGroup name="guestRG" defaultValue="foo" description="Select something">
            <RadioInput key="1" value="foo" label="option 1" />
            <RadioInput key="2" value="foo2" label="option 2" />
            <RadioInput key="3" value="foo3" label="option 3" />
        </RadioInputGroup>
        <Tooltip renderTip="Hello. I'm a guest tool tip 1" as={Button}>
            Hover or focus me
        </Tooltip>
        <Tooltip renderTip="Hello. I'm a guest tool tip 2" as={Button}>
            Hover or focus me
        </Tooltip>
        <Alert variant="warning">Alert in the guest app.</Alert>
          <PopoverSample />
        </div>
    </InstUISettingsProvider>
);

// piercing module federation: Accessing a variable that was created in the host app
console.log('globalThis value read in guest: ' + globalThis.aaa)
// piercing module federation: Creating an element outside the guest container
const para = document.createElement("p");
const node = document.createTextNode("This is from guest app.");
para.appendChild(node);
// piercing module federation: appending to a DOM element in host
const element = document.getElementById("footer");
if (element) {
    element.appendChild(para);
} else {
    console.warn('Guest app: no footer found in DOM');
}


export default App;
