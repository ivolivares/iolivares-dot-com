/**
 * Conferences Schema:
 * @typedef String slug
 * @typedef Boolean active
 * @typedef Date date
 * @typedef Object title // Object with title in langs
 * @typedef Object description // Object with description in langs
 * @typedef URL link
 * @typedef URL image
 * @typedef Array type ['youtube', 'upcoming', 'ended']
 * @typedef Date upcomingDate (optional)
 * @typedef Boolean new
 * @typedef Boolean playable
 */

const Conferences = [
  {
    slug: 'school-talk-not',
    active: false,
    date: new Date('2014-02-09'),
    title: {
      es: 'Este es un ejemplo de un evento que ya pasó pero no tengo el video',
      en: 'This is just a title placeholder for a video, talk or conference',
    },
    description: {
      es: 'lipsum lorem demo placeholder thumbnail dor sit amet conference talk video description long for having text here',
      en: 'lipsum lorem demo placeholder thumbnail dor sit amet conference talk video description long for having text here',
    },
    link: 'https://google.cl',
    image: 'https://res.cloudinary.com/iolivares-photos/image/upload/c_fill,w_800,g_face/v1629530560/io-dot-com/conferences/webperf101.jpg',
    type: 'ended',
    new: false,
    playable: false,
  },
  {
    slug: 'nextjsconf-building-the-next-generation-of-airlines-websites',
    active: true,
    date: new Date('2020-10-27'),
    title: {
      es: 'Construyendo la próxima generación de sitios web de aerolíneas',
      en: 'Building the Next Generation of Airlines Websites',
    },
    description: {
      es: 'Esta charla es sobre la experiencia de un grupo de mercenarios en Globant creando una aerolínea 100% digital con Next.JS',
      en: 'This talk is about the experience of a group of mercenaries at Globant creating a 100% digital airline with Next.JS',
    },
    link: 'https://youtu.be/JhokA9fWVo0',
    image: 'https://res.cloudinary.com/iolivares-photos/image/upload/c_fill,w_800,g_face/v1629530560/io-dot-com/conferences/nextjsconf2020.jpg',
    type: 'youtube',
    new: false,
    playable: true,
  },
  {
    slug: 'globant-techtalk-web-perf-101-2021',
    active: true,
    date: new Date('2021-02-09'),
    title: {
      es: 'Globant Tech Talk: Web Performance 101 en el 2021',
      en: 'Globant Tech Talk: Web Performance 101 in 2021',
    },
    description: {
      es: 'Una charla que explica el estado actual del web performance y busca plantear una propuesta de donde concentrarnos para empezar en web performance.',
      en: 'This talk explains the current state of web performance and seeks to raise a proposal of where to focus to start in web performance.',
    },
    link: 'https://youtu.be/VMUMJadTauc',
    image: 'https://res.cloudinary.com/iolivares-photos/image/upload/c_fill,w_800,g_face/v1629530560/io-dot-com/conferences/webperf101.jpg',
    type: 'youtube',
    new: false,
    playable: true,
  },
  {
    slug: 'webconftech-observability-101-2021',
    active: true,
    date: new Date('2021-08-23'),
    title: {
      es: 'Observability 101: Monitorear tu app no es solo cosa de devops',
      en: 'Observability 101: Monitoring your app is not about devops',
    },
    description: {
      es: 'En esta charla buscaré explicar el concepto de Observabilidad y la importancia de monitorear en equipo nuestra app.',
      en: 'In this talk I will try to explain the concept of Observability and the importance of monitoring our app as a team.',
    },
    link: 'https://webconf.tech',
    image: 'https://res.cloudinary.com/iolivares-photos/image/upload/c_fill,w_800,g_face/v1629530560/io-dot-com/conferences/webconf2021.jpg',
    type: 'upcoming',
    upcomingDate: new Date('2021-08-23'),
    new: true,
    playable: false,
  },
  {
    slug: 'reliablesummit-observability-101-2021',
    active: true,
    date: new Date('2021-08-26'),
    title: {
      es: 'Observability 101: Monitorear tu app no es solo cosa de devops',
      en: 'Observability 101: Monitoring your app is not about devops',
    },
    description: {
      es: 'En esta charla buscaré explicar el concepto de Observabilidad y la importancia de monitorear en equipo nuestra app.',
      en: 'In this talk I will try to explain the concept of Observability and the importance of monitoring our app as a team.',
    },
    link: 'https://reliablewebsummit.com',
    image: 'https://res.cloudinary.com/iolivares-photos/image/upload/c_fill,w_800,g_face/v1629530560/io-dot-com/conferences/reliablesummit2021.jpg',
    type: 'upcoming',
    upcomingDate: new Date('2021-08-26'),
    new: true,
    playable: false,
  },
].sort((a, b) => b.date - a.date) // Sort confs by date
  .filter((c) => c.active) // Filter just active confs

export default Conferences