type FlexContentProps = {
  info: {
    heading: string;
    title: string;
    text: string;
    url: string;
    img: string;
  };
  isReverse?: boolean;
};

const FlexContent: React.FC<FlexContentProps> = ({ info, isReverse }) => {
  const { heading, title, text, url, img } = info;
  return (
    <div
      className={`flex items-center justify-between lg:flex-col lg:justify-center nike-container ${
        isReverse ? 'flex-row-reverse' : 'flex-row'
      }`}
    >
      <div className='max-w-lg lg:max-w-none w-full lg:text-center grid items-center lg:justify-items-center'>
        <h2 className='text-4xl sm:text-3xl font-bold text-gradient'>{heading}</h2>
        <h2 className='text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-slate-900 filter drop-shadow-lg'>
          {title}
        </h2>
        <p className='xl:text-sm my-4 text-slate-900'>{text}</p>
        <a href={url} className='flex items-center' target='_blank' role='button'>
          <button className=' button-theme bg-slate-900 shadow-slate-900 text-slate-100 py-1.5'>
            Explore More
          </button>
        </a>
      </div>
      <div className='flex items-center justify-center max-w-xl relative lg:max-w-none w-full'>
        <img
          src={img}
          alt={title}
          className={`w-auto object-contain transitions-theme ${
            isReverse
              ? 'h-60 lg:h-56 md:h-52 sm:h-44 xsm:h-36 rotate-6 hover:-rotate-12'
              : 'h-72 lg:h-64 md:h-60 sm:h-48 xsm:h-40 rotate-[19deg] hover:rotate-12'
          }`}
        />
      </div>
    </div>
  );
};

export default FlexContent;
