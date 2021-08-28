import confTypes from '@io/lib/confTypes'
import { daysTo } from '@io/lib/dates'

const setConfType = (conf) => {
  const { YOUTUBE, UPCOMING, ENDED, TODAY } = confTypes
  const remainingDays = daysTo(conf.date)

  let type = YOUTUBE
  
  if (remainingDays === 0 || remainingDays === -1) {
    type = TODAY
  }

  if (remainingDays > 0) {
    type = UPCOMING
  }

  if (remainingDays < -1 && conf.link.indexOf('youtu.be') === -1) {
    type = ENDED
  }

  return {
    type,
    remainingDays,
    ...conf
  }
}

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
    slug: 'nextjsconf-building-the-next-generation-of-airlines-websites',
    active: true,
    date: new Date('2020-10-27'),
    title: {
      es: 'NextJS Conf 2020: "Construyendo la próxima generación de sitios web de aerolíneas"',
      en: 'NextJS Conf 2020: "Building the Next Generation of Airlines Websites"',
    },
    description: {
      es: 'Esta charla es sobre la experiencia de un grupo de mercenarios en Globant creando una aerolínea 100% digital con Next.JS',
      en: 'This talk is about the experience of a group of mercenaries at Globant creating a 100% digital airline with Next.JS',
    },
    link: 'https://youtu.be/JhokA9fWVo0',
    image: 'https://res.cloudinary.com/iolivares-photos/image/upload/c_fill,w_800,g_face/v1629530560/io-dot-com/conferences/nextjsconf2020.jpg',
    new: false,
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
    new: false,
  },
  {
    slug: 'webconftech-observability-101-2021',
    active: true,
    date: new Date('2021-08-23'),
    title: {
      es: 'WebConf LATAM 2021: "Observability 101: Monitorear tu app no es solo cosa de devops"',
      en: 'WebConf LATAM 2021: "Observability 101: Monitoring your app is not about devops"',
    },
    description: {
      es: 'En esta charla buscaré explicar el concepto de Observabilidad y la importancia de monitorear en equipo nuestra app. Charla en español, a diferencia de la Reliable Web Summit donde el mismo contenido estará en inglés.',
      en: 'In this talk I will try to explain the concept of Observability and the importance of monitoring our app as a team. Talk in Spanish, opposed to Reliable Web Summit conference which is the same content but in English.',
    },
    link: 'https://webconf.tech',
    image: 'https://res.cloudinary.com/iolivares-photos/image/upload/c_fill,w_800,g_face/v1629530560/io-dot-com/conferences/webconf2021.jpg',
    new: false,
  },
  {
    slug: 'reliablesummit-observability-101-2021',
    active: true,
    date: new Date('2021-08-26'),
    title: {
      es: 'Reliable Web Summit 2021: "Observability 101: Monitorear tu app no es solo cosa de devops"',
      en: 'Reliable Web Summit 2021: "Observability 101: Monitoring your app is not about devops"',
    },
    description: {
      es: 'En esta charla buscaré explicar el concepto de Observabilidad y la importancia de monitorear en equipo nuestra app.',
      en: 'In this talk I will try to explain the concept of Observability and the importance of monitoring our app as a team.',
    },
    link: 'https://reliablewebsummit.com',
    image: 'https://res.cloudinary.com/iolivares-photos/image/upload/c_fill,w_800,g_face/v1629530560/io-dot-com/conferences/reliablesummit2021.jpg',
    new: false,
  },
].sort((a, b) => b.date - a.date) // Sort confs by date
  .filter((c) => c.active) // Filter just active confs
  .map((c) => setConfType(c)) // Set conference type based on dates

export default Conferences