import clip from '../assets/clip.mp4';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import messenger from '../assets/messenger.svg';
import twitter from '../assets/twitter.svg';
import youtube from '../assets/youtube.svg';

const hero = {
  title: 'Play With Electric Nike',
  subtitle: 'Adapt 2.0 Sneakers',
  img: 'https://i.imgur.com/28mlP1y.png',
  btnText: 'Explore Product',
  videos: [
    { img: 'https://i.imgur.com/XdHvvm6.png', clip: clip },
    { img: 'https://i.imgur.com/Twh9bt5.png', clip: clip },
    { img: 'https://i.imgur.com/SiZw2Zk.png', clip: clip },
  ],
  socialLinks: [
    { icon: facebook },
    { icon: messenger },
    { icon: instagram },
    { icon: twitter },
    { icon: youtube },
  ],
};

const highlight = {
  heading: 'HIGHLIGHTS',
  title: 'NIKE AIR WITH LIMITLESS CHOICES',
  text: 'Our Purpose is to move the world forward. We take action by building community, protecting our planet and increasing access to sport.',
  url: 'https://www.nike.com/launch/t/nocta-hot-step-black-gold',
  img: 'https://i.imgur.com/Yl6UOiS.png',
};

const sneaker = {
  heading: 'FEATURED',
  title: 'NIKE SNEAKERS AIR LANCING SHOES',
  text: 'The radiance lives on Nike Sneakers Air Lancing Shoes, the basket ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.',
  url: 'https://sneakernews.com/2022/03/21/nike-lebron-2-retro-white-midnight-navy-varsity-crimson-dr0826-100/',
  img: 'https://i.imgur.com/UwfkrcZ.png',
};

const footer = {
  titles: ['About Nike', 'Get Help', 'Company'],
  links: [
    ['News', 'Careers', 'Investors', 'Prupose', 'Sustainability'],
    [
      'Order Status',
      'Shipping & Delivery',
      'Payment Options',
      'Gift Card Balance',
      'Contact Us',
      'FAQ',
      'Blog',
    ],
    ['Gift Cards', 'Promotions', 'Find A Store', 'Signup', 'Nike Jouneral', 'Send Us Feeback'],
  ],
};
export { footer, hero, highlight, sneaker };
