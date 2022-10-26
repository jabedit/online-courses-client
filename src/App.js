
import "./App.css";
import {  RouterProvider } from "react-router-dom";

import { router } from "./Route/Route";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
