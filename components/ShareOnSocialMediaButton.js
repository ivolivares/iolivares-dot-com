
import Image from 'next/image'

export default function ShareOnSocialMediaButton({
  name, link, title, summary, source, buttonTitle, buttonLabel, size,
}) {
  const buildLink = {
    facebook: ({url}) => (
      `http://facebook.com/sharer/sharer.php?u=` + encodeURIComponent(url)
    ),
    twitter: ({url}) => (
      `https://twitter.com/intent/tweet?url=` + encodeURIComponent(url)
    ),
    linkedin: ({url, title, summary, source}) => (
      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(summary)}&source=${encodeURIComponent(source)}`
    ),
  }

  const handleShare = (event) => {
    event.preventDefault()
    const shareURL = event.currentTarget.getAttribute('data-href')

    if (shareURL) {
      return window.open(
        shareURL,
        '',
        'left=0,top=0,width=650,height=620,personalbar=0,toolbar=0,scrollbars=0,resizable=0',
      )
    }
  }


  return (<button
    data-href={buildLink[name]({url: link, title, summary, source})}
    onClick={handleShare}
    title={buttonTitle}
    aria-label={buttonLabel}
  >
    <Image
      src={`/static/images/icons/${name}.png`}
      alt={name}
      width={size}
      height={size}
      className="grayscale hover:grayscale-0 dark:filter dark:brightness-0 dark:invert dark:hover:opacity-80"
    />
  </button>)
}