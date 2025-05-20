import React from 'react';
import { Brain, Bomb, Calendar, Target } from 'lucide-react';

const problems = [
  {
    id: 1,
    icon: <Brain className="h-8 w-8 text-purple-500" />,
    title: "Information Overload",
    description: "You're drowning in study material and don't know what to focus on first."
  },
  {
    id: 2,
    icon: <Bomb className="h-8 w-8 text-orange-500" />,
    title: "Exam Anxiety",
    description: "Fear of failure is overwhelming, making it difficult to concentrate."
  },
  {
    id: 3,
    icon: <Calendar className="h-8 w-8 text-blue-500" />,
    title: "Poor Time Management",
    description: "You struggle to create and stick to an effective study schedule."
  },
  {
    id: 4,
    icon: <Target className="h-8 w-8 text-red-500" />,
    title: "Lack of Practice",
    description: "Theory without application leads to confidence issues during exams."
  }
];

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="problems">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h6 className="text-purple-600 font-semibold uppercase tracking-wider mb-3">The Struggle Is Real</h6>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Do You Feel <span className="text-purple-600">Unprepared</span>?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Most students face these common challenges. Our app is specifically designed to address each one with targeted solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem) => (
            <div 
              key={problem.id}
              className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100"
            >
              <div className="bg-gray-50 p-3 rounded-lg inline-block mb-4">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
              
              <div className="mt-5 pt-5 border-t border-gray-100">
                <h4 className="text-lg font-medium text-purple-600 mb-2">Our Solution:</h4>
                <p className="text-gray-700">
                  {problem.id === 1 && "Personalized study plans that prioritize important topics based on your strengths and weaknesses."}
                  {problem.id === 2 && "Gamified practice tests that build confidence through incremental challenges."}
                  {problem.id === 3 && "Smart scheduling with reminders that optimize your study time based on your peak productivity hours."}
                  {problem.id === 4 && "Thousands of practice questions with detailed explanations and instant feedback."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;