/**
 * Talks Schema:
 * @typedef Object title // Object with title in langs
 * @typedef String where
 * @typedef Date date
 * @typedef URL link
 * @typedef URL image
 * @typedef URL presentation
 * @typedef Boolean new
 * @typedef Boolean active
 */

const Talks = [
  {
    title: {
      es: 'Construyendo la próxima generación de sitios web de aerolíneas',
      en: 'Building the Next Generation of Airlines Websites',
    },
    where: 'NextJS Conf 2020',
    date: new Date(2020, 10, 7), // Remember: Month is 0-indexed, so: 10 is November,
    duration: '25:18',
    badge: {
      es: 'Transformación Digital',
      en: 'Digital Transformation',
    },
    link: 'https://youtu.be/JhokA9fWVo0',
    image: 'https://res.cloudinary.com/iolivares-photos/image/upload/c_fill,w_800,g_face/v1638394849/io-dot-com/conferences/nextjsconf2020_thumb_hgcztp.jpg',
    presentation: '',
    new: false,
    active: true,
  },
  {
    title: {
      es: 'Web Performance 101 en el 2021',
      en: 'Web Performance 101 in 2021',
    },
    where: 'Globant Tech Talk',
    date: new Date(2021, 1, 9),
    duration: '01:04:12',
    badge: {
      es: 'Web Vitals',
      en: 'Web Vitals',
    },
    link: 'https://youtu.be/VMUMJadTauc',
    image: 'https://res.cloudinary.com/iolivares-photos/image/upload/c_fill,w_800,g_face/v1638394849/io-dot-com/conferences/webperf101_thumb_a4ltwt.jpg',
    presentation: '',
    new: false,
    active: true,
  },
  {
    title: {
      es: 'Observability 101: Monitorear tu app no es solo cosa de devops',
      en: 'Observability 101: Monitoring your app is not about devops',
    },
    where: 'WebConf LATAM 2021',
    date: new Date(2021, 7, 23),
    duration: '18:32',
    badge: {
      es: 'Observabilidad',
      en: 'Observability',
    },
    link: 'https://youtu.be/cKZcAnA35To',
    image: 'https://res.cloudinary.com/iolivares-photos/image/upload/c_fill,w_800,g_face/v1638394849/io-dot-com/conferences/webconf2021_thumb_xmc5nj.jpg',
    presentation: '',
    new: false,
    active: true,
  },
  {
    title: {
      es: 'Observability 101: Monitorear tu app no es solo cosa de devops',
      en: 'Observability 101: Monitoring your app is not about devops',
    },
    where: 'Reliable Web Summit 2021',
    date: new Date(2021, 7, 26),
    duration: '00:00',
    badge: {
      es: 'Observabilidad',
      en: 'Observability',
    },
    link: 'https://reliablewebsummit.com',
    image: 'https://res.cloudinary.com/iolivares-photos/image/upload/c_fill,w_800,g_face/v1629530560/io-dot-com/conferences/reliablesummit2021.jpg',
    presentation: '',
    new: false,
    active: false,
  },
]

export default Talks