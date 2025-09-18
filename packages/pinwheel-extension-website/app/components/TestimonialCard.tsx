import React from 'react';
import Image from 'next/image';

interface TestimonialCardProps {
  testimonial: {
    name: string;
    role: string;
    avatar: string;
    content: string;
    rating: number;
  };
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  // Generate star rating
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <span key={index} className={`text-lg ${index < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}>
          ★
        </span>
      ));
  };

  return (
    <div className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <div className="mr-4">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <h4 className="font-bold text-lg text-slate-800 dark:text-white">{testimonial.name}</h4>
          <p className="text-slate-500 dark:text-slate-300 text-sm">{testimonial.role}</p>
        </div>
      </div>
      <div className="mb-3">{renderStars(testimonial.rating)}</div>
      <p className="text-slate-600 dark:text-slate-300 italic">{'"'}{testimonial.content}{'"'}</p>
    </div>
  );
};

export default TestimonialCard;