/* eslint-disable react/display-name */
/**
 * @description This is a temporal help to translate with special links.
 * TODO: Change and improve to have the i18n texts always into locales.json files.
 */
import regexifyString from 'regexify-string'
import Link from 'next/link'

import ExternalLink from '@io/components/ExternalLink'

const WMLink = () => {
  return (
    <ExternalLink href="https://www.warnermedia.com" classNames="wm-link">
      WarnerMedia
    </ExternalLink>
  )
}

const GLBLink = () => {
  return (
    <ExternalLink href="https://www.globant.com" classNames="glb-link">
      Globant
    </ExternalLink>
  )
}

const LinkToTalks = ({ lang }) => {
  const text = {
    es: 'hablando en meetups y conferencias',
    en: 'speaking at meetups and conference events',
  }

  return (
    <span className="font-medium">
      <Link href="/talks">
        {text[lang]}
      </Link>
    </span>
  )
}

const TransWithLinks = ({ i18nText }) => {
  const links = {
    '<wm />': () => (<WMLink key="0" />),
    '<glb />': () => (<GLBLink key="1" />),
    '<link-talks-en />': () => (<LinkToTalks lang="en" key="2" />),
    '<link-talks-es />': () => (<LinkToTalks lang="es" key="3" />),
  }

  return regexifyString({
    pattern: /(<wm \/>|<glb \/>|<link-talks-(en|es) \/>)/g,
    decorator: (match, _) => links[match](),
    input: i18nText,
  })
}

export default TransWithLinks