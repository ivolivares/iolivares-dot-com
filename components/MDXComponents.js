import Image from 'next/image'
import NotationHighlight from '@io/components/NotationHighlight'
import CustomLink from '@io/components/CustomLink'
import { ListGroup, ListItems, ListItem } from '@io/components/List'

const MDXComponents = {
  Image,
  NotationHighlight,
  a: CustomLink,
  ListGroup,
  ListItems,
  ListItem,
}

export default MDXComponents
