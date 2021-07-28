import regexifyString from 'regexify-string'

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

const TransWithLinks = ({ i18nText }) => {
  const links = [
    (<WMLink key="0" />),
    (<GLBLink key="1" />),
  ]

  return regexifyString({
    pattern: /(<wm \/>|<glb \/>)/g,
    decorator: (_, index) => links[index],
    input: i18nText,
  })
}

export default TransWithLinks