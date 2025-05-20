import React from 'react';
import { ClipboardList, Target, TrendingUp, Award } from 'lucide-react';

const timelineSteps = [
  {
    id: 1,
    icon: <ClipboardList className="h-10 w-10 text-white" />,
    title: "Create Personal Revisions",
    description: "Import your study material or use our extensive library to create personalized revision plans tailored to your needs.",
    color: "bg-purple-600",
    highlight: "Get Started in 2 Minutes!"
  },
  {
    id: 2,
    icon: <Target className="h-10 w-10 text-white" />,
    title: "Practice Fast & Efficiently",
    description: "Access thousands of practice questions, mock tests, and flashcards designed to strengthen your knowledge.",
    color: "bg-blue-500",
    highlight: "5,000+ Questions Available"
  },
  {
    id: 3,
    icon: <TrendingUp className="h-10 w-10 text-white" />,
    title: "Track Your Progress",
    description: "Advanced analytics identify your weak areas and automatically adjust your study plan to improve performance.",
    color: "bg-orange-500",
    highlight: "Real-time Performance Insights"
  },
  {
    id: 4,
    icon: <Award className="h-10 w-10 text-white" />,
    title: "Achieve Your Target Score",
    description: "Students using our app for 8 weeks report an average score improvement of 22% on their exams.",
    color: "bg-green-500",
    highlight: "22% Average Score Improvement"
  }
];

const FeatureTimeline: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50" id="features">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h6 className="text-blue-600 font-semibold uppercase tracking-wider mb-3">Your Success Journey</h6>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Path to <span className="text-blue-600">Exam Success</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our proven four-step methodology guides you from uncertainty to confidence, with personalized support at every stage.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline connector */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform md:translate-x-[-0.5px] hidden md:block"></div>
          
          {timelineSteps.map((step, index) => (
            <div key={step.id} className="relative mb-12 md:mb-24 last:mb-0">
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot and number */}
                <div className="absolute left-4 md:left-1/2 top-8 transform md:translate-x-[-50%] z-10 hidden md:block">
                  <div className={`flex items-center justify-center h-12 w-12 rounded-full ${step.color} shadow-lg`}>
                    <span className="text-white font-bold">{step.id}</span>
                  </div>
                </div>
                
                {/* Mobile timeline dot */}
                <div className="flex md:hidden mb-4">
                  <div className={`flex items-center justify-center h-12 w-12 rounded-full ${step.color} shadow-lg mr-4`}>
                    <span className="text-white font-bold">{step.id}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 my-auto">{step.title}</h3>
                </div>
                
                {/* Content container */}
                <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                    <div className="hidden md:block">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    
                    <div className="bg-gray-50 rounded-lg p-3 flex items-center">
                      <div className={`rounded-full p-2 mr-3 ${step.color}`}>
                        {step.icon}
                      </div>
                      <span className="font-medium text-gray-800">{step.highlight}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureTimeline;