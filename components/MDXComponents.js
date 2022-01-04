import CustomImage from '@io/components/CustomImage'
import CustomLink from '@io/components/CustomLink'
import { ListGroup, ListItems, ListItem } from '@io/components/List'
import NowPlaying from '@io/components/NowPlaying'
import Timeline from '@io/components/Timeline'
import ImageWithTheme from '@io/components/ImageWithTheme'

const MDXComponents = {
  a: CustomLink,
  Image: CustomImage,
  ImageWithTheme,
  ListGroup,
  ListItems,
  ListItem,
  NowPlaying,
  Timeline,
}

export default MDXComponents
