import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Layer } from "./pages/Layer";


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layer></Layer>
    </BrowserRouter>
  )
}
export default App;