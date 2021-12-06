import ExternalLink from "@io/components/ExternalLink"

const ListItem = ({ href, text, description}) => {
  return (
    <li className="list-item block">
      <ExternalLink
        href={href}
        classNames="inline-block font-bold tracking-widest focus:ring-2 ring-offset-current ring-offset-2 text-primary-400 hover:text-primary-600 dark:hover:text-primary-300"
      >
        {text}
      </ExternalLink>
      <span className="block mb-4">{description}</span>
    </li>
  )
}

export default ListItem