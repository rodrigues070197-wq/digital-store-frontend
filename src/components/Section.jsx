import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Section = ({ title, titleAlign = 'left', link, children }) => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-24 py-8">
      <div className={`flex items-center mb-5 ${titleAlign === 'center' ? 'justify-center' : 'justify-between'}`}>
        <h2 className="text-dark-gray-2 text-2xl font-bold">
          {title}
        </h2>

        {link && titleAlign !== 'center' && (
          <Link 
            to={link.href} 
            className="text-primary text-base font-medium flex items-center gap-2 hover:underline"
          >
            {link.text}
            <ArrowRight size={18} />
          </Link>
        )}
      </div>

      <div>
        {children}
      </div>
    </section>
  );
};

export default Section;