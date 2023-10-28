import React from 'react';

type TitleProps = {
  value: string;
};

const Title: React.FC<TitleProps> = ({ value }) => {
  return (
    <div className='grid items-center'>
      <h2 className='text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter drop-shadow-lg'>
        {value}
      </h2>
    </div>
  );
};

export default Title;
