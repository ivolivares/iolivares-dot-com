import Image from 'next/image'
import NotationHighlight from 'components/NotationHighlight'
import CustomLink from 'components/CustomLink'
import { ListGroup, ListItems, ListItem } from 'components/List'
import Timeline from 'components/Timeline'
import LastTalk from 'components/LastTalk'
import AllTalks from 'components/AllTalks'

const MDXComponents = {
  Image,
  NotationHighlight,
  a: CustomLink,
  ListGroup,
  ListItems,
  ListItem,
  Timeline,
  LastTalk,
  AllTalks,
}

export default MDXComponents
