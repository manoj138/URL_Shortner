import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastProvider } from "./components/common/Toast";
import DefaultRoutes from "./routes/DefaultRoutes";


function App() {
  return (
    <BrowserRouter>
      <DefaultRoutes />
    </BrowserRouter>
  );
}

export default App;
