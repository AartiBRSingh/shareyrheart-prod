import React, { Suspense } from "react";
import Login from "../components/Login";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Login />
    </Suspense>
  );
};

export default App;
