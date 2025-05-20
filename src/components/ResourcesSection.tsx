import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const resources = [
  {
    id: 1,
    title: "Master JEE Chemistry in 60 Days",
    excerpt: "Our step-by-step guide to mastering all key chemistry concepts for your JEE preparation.",
    category: "JEE Prep",
    color: "bg-purple-600",
    textColor: "text-purple-600",
    backgroundColor: "bg-purple-50",
    link: "https://youtu.be/z_0nWP0ZKs0?si=3a3g515YjxZlxCTY"
  },
  {
    id: 2,
    title: "10 NEET Biology Shortcuts You Need to Know",
    excerpt: "Memorization techniques and shortcuts to help you tackle the vast NEET biology syllabus efficiently.",
    category: "NEET Prep",
    color: "bg-blue-600",
    textColor: "text-blue-600",
    backgroundColor: "bg-blue-50",
    link: "https://youtube.com/shorts/5_m-nPnzV54?si=-am9GZ3SsLe8wY5g"
  },
  {
    id: 3,
    title: "Overcoming Test Anxiety: A Student's Guide",
    excerpt: "Practical strategies to manage exam stress and perform at your best when it matters most.",
    category: "Mental Health",
    color: "bg-green-600",
    textColor: "text-green-600",
    backgroundColor: "bg-green-50",
    link: "https://youtu.be/4PgEIlewf7Y?si=mF3wzzUZpI4Zv7Om"
  },
  {
    id: 4,
    title: "Physics Problem-Solving Techniques",
    excerpt: "Learn systematic approaches to solve even the most challenging physics problems on your exam.",
    category: "Study Tips",
    color: "bg-orange-600",
    textColor: "text-orange-600",
    backgroundColor: "bg-orange-50",
    link: "https://youtu.be/nkDoniAs27I?si=2u8J6OD88DwRfGiO"
  },
  {
    id: 5,
    title: "Creating the Perfect Study Schedule",
    excerpt: "The science of creating a balanced study plan that maximizes retention and prevents burnout.",
    category: "Productivity",
    color: "bg-red-600",
    textColor: "text-red-600",
    backgroundColor: "bg-red-50",
    link: "https://youtu.be/hA30lS3zzbk?si=id4UXNXKf5FukW6t"
  },
  {
    id: 6,
    title: "Last 30 Days: Your JEE/NEET Final Sprint Plan",
    excerpt: "The ultimate checklist and strategy for the critical last month before your examination.",
    category: "Exam Strategy",
    color: "bg-indigo-600",
    textColor: "text-indigo-600",
    backgroundColor: "bg-indigo-50",
    link: "https://youtu.be/V2YDd13YqKA?si=ZPpcuad9RTrRSViG"
  }
];

const ResourcesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50" id="resources">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h6 className="text-green-600 font-semibold uppercase tracking-wider mb-3">Free Resources</h6>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Student Resources <span className="text-green-600">& Guides</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of free study materials, tips, and strategies to enhance your exam preparation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <div 
              key={resource.id}
              className={`${resource.backgroundColor} rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100`}
            >
              <div className="p-6">
                <div className={`${resource.color} text-white text-xs font-semibold uppercase tracking-wider rounded-full px-3 py-1 inline-block mb-4`}>
                  {resource.category}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                
                <p className="text-gray-700 mb-6">{resource.excerpt}</p>
                
                <a 
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center ${resource.textColor} font-medium hover:underline`}
                >
                  <span>Watch video</span>
                  <ArrowUpRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-block bg-white text-gray-900 font-medium px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200"
          >
            View All Resources
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;