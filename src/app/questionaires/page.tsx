import React, { Suspense } from "react";
import QuestionnaireInterface from "../components/QuestionnaireInterface";

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <QuestionnaireInterface />
  </Suspense>
  );
};

export default page;
