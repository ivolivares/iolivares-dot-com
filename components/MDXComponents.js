import Image from 'next/image'
import AllTalks from '@io/components/AllTalks'
import CustomLink from '@io/components/CustomLink'
import LastTalk from '@io/components/LastTalk'
import { ListGroup, ListItems, ListItem } from '@io/components/List'
import NowPlaying from '@io/components/NowPlaying'
import Timeline from '@io/components/Timeline'

const MDXComponents = {
  a: CustomLink,
  Image,
  AllTalks,
  LastTalk,
  ListGroup,
  ListItems,
  ListItem,
  NowPlaying,
  Timeline,
}

export default MDXComponents
