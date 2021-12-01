import Image from 'next/image'
import NotationHighlight from '@io/components/NotationHighlight'
import CustomLink from '@io/components/CustomLink'
import { ListGroup, ListItems, ListItem } from '@io/components/List'
import Timeline from '@io/components/Timeline'
import LastTalk from '@io/components/LastTalk'
import AllTalks from '@io/components/AllTalks'

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
