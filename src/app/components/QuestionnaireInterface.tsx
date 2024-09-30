"use client";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const questions: string[] = [
  "I often feel overwhelmed by work-related stress.",
  "I find it easy to collaborate with my colleagues.",
  "I am confident in my ability to solve complex problems.",
  "I feel my work is meaningful and contributes to the company's goals.",
  "I often take initiative in team projects.",
];

type Answer = 1 | 2 | 3 | 4 | 5 | null;

const QuestionnaireInterface: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<Answer[]>(
    Array(questions.length).fill(null)
  );
  const router = useRouter()
  const serachParams = useSearchParams()  
const userType = serachParams.get('userType')

useEffect(()=>{if(typeof window!=='undefined'){
  const userToken = sessionStorage.getItem("token")
  const couponCode = sessionStorage.getItem("couponCode")
  if (!userToken && !couponCode) {
    router.push(`login?userType=${userType}`)
  }

}},[])

  const handleAnswer = (value: Answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="bg-gray-50 flex-grow flex justify-center items-center">
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
            <div className="mb-6">
              <div className="h-2 bg-[#FFD1D1] rounded-full">
                <div
                  className="h-2 bg-[#EE1C25] rounded-full transition-all duration-300 ease-in-out"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Question {currentQuestion + 1} of {questions.length}
              </p>
            </div>

            <h2 className="text-xl font-semibold mb-4">
              {questions[currentQuestion]}
            </h2>

            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  className={`w-full text-left p-3 rounded-lg transition-colors duration-200 ${
                    answers[currentQuestion] === value
                      ? "bg-[#EE1C25] text-white"
                      : "bg-[#FFE5E5] text-gray-800 hover:bg-[#FFB8B8]"
                  }`}
                  onClick={() => handleAnswer(value as Answer)}
                >
                  {value === 1 && "Strongly Disagree"}
                  {value === 2 && "Disagree"}
                  {value === 3 && "Neutral"}
                  {value === 4 && "Agree"}
                  {value === 5 && "Strongly Agree"}
                </button>
              ))}
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={prevQuestion}
                disabled={currentQuestion === 0}
                className={`flex items-center px-4 py-2 rounded-full ${
                  currentQuestion === 0
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-[#EE1C25] text-white hover:bg-[#FF4D4D]"
                }`}
              >
                <ChevronLeft className="mr-2" size={20} />
                Previous
              </button>
              {currentQuestion < questions.length - 1 ? (
                <button
                  onClick={nextQuestion}
                  disabled={answers[currentQuestion] === null}
                  className={`flex items-center px-4 py-2 rounded-full ${
                    answers[currentQuestion] === null
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-[#EE1C25] text-white hover:bg-[#FF4D4D]"
                  }`}
                >
                  Next
                  <ChevronRight className="ml-2" size={20} />
                </button>
              ) : (
                <button
                  onClick={() =>
                    console.log("Questionnaire completed:", answers)
                  }
                  disabled={answers[currentQuestion] === null}
                  className={`flex items-center px-4 py-2 rounded-full ${
                    answers[currentQuestion] === null
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-green-500 text-white hover:bg-green-600"
                  }`}
                >
                  Submit
                  <Check className="ml-2" size={20} />
                </button>
              )}
            </div>
          </div>
        </main>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default QuestionnaireInterface;
