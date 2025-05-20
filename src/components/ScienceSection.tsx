import React from 'react';
import { Brain, Repeat, Zap, Trophy } from 'lucide-react';

const sciencePoints = [
  {
    id: 1,
    icon: <Brain className="h-12 w-12 text-purple-500" />,
    title: "Visual Engagement",
    description: "Our app uses vibrant visuals and interactive elements that stimulate your brain, making it easier to recall information during exams.",
    color: "bg-purple-100"
  },
  {
    id: 2,
    icon: <Repeat className="h-12 w-12 text-blue-500" />,
    title: "Spaced Repetition",
    description: "We use proven spaced repetition algorithms to schedule your revision at optimal intervals, maximizing retention and minimizing forgetting.",
    color: "bg-blue-100"
  },
  {
    id: 3,
    icon: <Zap className="h-12 w-12 text-orange-500" />,
    title: "Habit Formation",
    description: "Our streak system and daily goals help you build consistent study habits, the #1 predictor of exam success according to research.",
    color: "bg-orange-100"
  },
  {
    id: 4,
    icon: <Trophy className="h-12 w-12 text-green-500" />,
    title: "Competitive Mindset",
    description: "Friendly leaderboards and achievement badges tap into your innate competitive drive, making studying feel more like a game than a chore.",
    color: "bg-green-100"
  }
];

const ScienceSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="science">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h6 className="text-orange-500 font-semibold uppercase tracking-wider mb-3">Evidence-Based Approach</h6>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Science Behind <span className="text-orange-500">Your Prep</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our methodology is grounded in cognitive psychology and learning science research to optimize how your brain processes and retains information.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sciencePoints.map((point) => (
            <div 
              key={point.id}
              className="rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl"
            >
              <div className={`flex flex-col md:flex-row h-full`}>
                <div className={`${point.color} p-6 flex items-center justify-center md:w-1/3`}>
                  <div className="rounded-full bg-white p-4 shadow-md">
                    {point.icon}
                  </div>
                </div>
                
                <div className="p-6 md:w-2/3">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
                  <p className="text-gray-600">{point.description}</p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 font-medium">
                        {point.id === 1 && "Visual learners retain information 42% better"}
                        {point.id === 2 && "Increases retention by up to 80%"}
                        {point.id === 3 && "Students with daily habits are 3x more likely to succeed"}
                        {point.id === 4 && "Increases motivation by 47% in studies"}
                      </span>
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

export default ScienceSection;