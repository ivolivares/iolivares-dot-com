import { RoughNotation } from 'react-rough-notation'

const NotationHighlight = ({ children }) => {
  // Change the animation duration depending on length of text (speed = distance / time)
  const animationDuration = Math.floor(30 * children.length)

  return (
    <RoughNotation
      type="highlight"
      multiline={true}
      padding={[0, 2]}
      iterations={1}
      animationDuration={animationDuration}
      // TODO: Use tailwindcss colors
      color="#5cb0c1"
      show={true}
    >
      {children}
    </RoughNotation>
  )
}

export default NotationHighlight