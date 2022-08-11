import React from "react";
import Root from "./pages/Root";
import ContextProvider from "./contexts/ContextProvider";
function App() {
  return (
    <ContextProvider>
      <Root />;
    </ContextProvider>
  );
}

export default App;
