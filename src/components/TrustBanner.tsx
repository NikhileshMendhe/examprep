import React from 'react';
import { CheckCircle, Star, Users, BookOpen } from 'lucide-react';

const stats = [
  {
    id: 1,
    icon: <Users className="h-8 w-8 text-purple-500" />,
    value: "150,000+",
    label: "Active Students"
  },
  {
    id: 2,
    icon: <Star className="h-8 w-8 text-yellow-500" />,
    value: "4.8/5",
    label: "App Rating"
  },
  {
    id: 3,
    icon: <CheckCircle className="h-8 w-8 text-green-500" />,
    value: "92%",
    label: "Success Rate"
  },
  {
    id: 4,
    icon: <BookOpen className="h-8 w-8 text-blue-500" />,
    value: "10,000+",
    label: "Practice Questions"
  }
];

const TrustBanner: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-purple-600 to-blue-500">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Over 150,000+ Aspirants Trust Us
          </h2>
          <div className="w-16 h-1 bg-orange-400 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div 
              key={stat.id}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-opacity-20 transition-all"
            >
              <div className="mx-auto mb-3 inline-block">
                {stat.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-blue-100">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <div className="flex items-center bg-white bg-opacity-10 backdrop-blur-sm rounded-full py-2 px-4">
            <img 
              src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Student" 
              className="w-8 h-8 rounded-full object-cover border-2 border-white"
            />
            <span className="ml-2 text-white">
              "Improved my score by 28% in just 6 weeks!" - <span className="font-medium">Arjun K.</span>
            </span>
          </div>
          
          <div className="flex items-center bg-white bg-opacity-10 backdrop-blur-sm rounded-full py-2 px-4">
            <img 
              src="https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Student" 
              className="w-8 h-8 rounded-full object-cover border-2 border-white"
            />
            <span className="ml-2 text-white">
              "Finally cleared JEE on my first attempt!" - <span className="font-medium">Priya S.</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;