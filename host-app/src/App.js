import React, { useEffect } from 'react';
// path must match what is in host-app/rspack.config.js -> plugins/remotes
import { inject, unmount } from 'guestApp/appInjector';
import {Button, Tooltip, Alert, canvas, InstUISettingsProvider, RadioInput, RadioInputGroup} from "@instructure/ui";
import {PopoverSample} from "./popover";
const parentElementId = 'parent';

const App = () => {
  useEffect(() => {
    inject(parentElementId);
    return () => unmount(parentElementId);
  }, []);

  return (
  <InstUISettingsProvider theme={canvas}>
    <div>
      <h1>Host Application - React Version {React.version}</h1>
      <h2>Using InstUI v8</h2>
      <RadioInputGroup name="hostRG" defaultValue="foo" description="Select something">
        <RadioInput key="1" value="foo" label="option 1" />
        <RadioInput key="2" value="foo2" label="option 2" />
        <RadioInput key="3" value="foo3" label="option 3" />
      </RadioInputGroup>
      <Tooltip renderTip="Hello. I'm a host tool tip 1" as={Button}>
        Hover or focus me
      </Tooltip>
      <Tooltip renderTip="Hello. I'm a host tool tip 2" as={Button}>
        Hover or focus me
      </Tooltip>
      <PopoverSample />
      <Alert variant="warning">Alert in the host app.</Alert>
      <div id={parentElementId}></div>
    </div>
  </InstUISettingsProvider>
  );
};
export default App;
