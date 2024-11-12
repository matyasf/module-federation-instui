import React, { useEffect } from 'react';
// path must match what is in host-app/rspack.config.js -> plugins/remotes
import { inject, unmount } from 'guestApp/appInjector';
import {Alert, canvas, InstUISettingsProvider} from "@instructure/ui";
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
      <PopoverSample />
      <Alert variant="warning">Alert in the host app.</Alert>
      <div id={parentElementId}></div>
    </div>
  </InstUISettingsProvider>
  );
};
export default App;
