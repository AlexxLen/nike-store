const Footer = ({ info }) => {
  const { titles, links } = info;
  return (
    <footer className='bg-theme py-6'>
      <div className='nike-container text-slate-200 text-center'>
        <div className='grid items-start grid-cols-3 max-w-2xl m-auto md:max-w-none md:gap-5'>
          {titles.map((item, i) => (
            <div key={i} className='grid items-center'>
              <h3 className='text-lg lg:text-base md:text-sm uppercase font-semibold'>
                {item.title}
              </h3>
            </div>
          ))}
          {links.map((listLinks, i) => (
            <ul key={i} className='grid text-center gap-1 text-sm sm:text-xs'>
              {listLinks.map((item, i) => (
                <li key={i}>
                  <a href='#'>{item.link}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className='mt-6'>
          <p className='text-sm md:text-xs'>
            &copy; 2023 <span className='font-bold'>AlexxLen</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
