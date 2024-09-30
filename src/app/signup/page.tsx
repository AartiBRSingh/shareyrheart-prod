import React, { Suspense } from "react";
import SignupPage from "../components/Signup";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignupPage />
    </Suspense>
  );
};

export default App;
