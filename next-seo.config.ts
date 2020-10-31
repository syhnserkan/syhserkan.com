const title = 'Serkan Sayhan – Computer Engineer, developer and curious.';
const description = 'Front-end developer who love Javascript';

const SEO = {
  title,
  description,
  canonical: 'https://syhnserkan.com/',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://syhnserkan.com/',
    title,
    description,
    images: [
      {
        url: './static/favicons/favicon.ico',
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
};

export default SEO;
