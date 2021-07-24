import { useEffect } from 'react'
import { annotate, annotationGroup } from 'rough-notation'

const getAnnotate = (options) => {
  if (options.elementId === undefined) {
    console.log('[Notations Wrapper] You need the element ID to be annotated.')
    return null
  }

  if (options.type === undefined) {
    console.log('[Notations Wrapper] You need to set at least a type of annotate.')
    return null
  }

  const elementIdentifier = options.elementId
  delete options.elementId

  annotate(document.querySelector(elementIdentifier), { ...options })

  return <></>
}

const Notations = ({ isGroup = false, annotatesOptions }) => {
  
  useEffect(() => {
    if (isGroup && !annotatesOptions.isArray()) {
      console.log('[Notations Wrapper] In groups, the options should be an array.')
    }

    if (!isGroup) {
      const annotateGenerated = getAnnotate(annotatesOptions)
      annotateGenerated.show()
    } else {
      let annotateGroup = []

      annotatesOptions.forEach((annotateElement) => {
        annotateGroup.push(getAnnotate(annotateElement))
      })

      const groupGenerated = annotationGroup(annotateGroup)
      groupGenerated.show()
    }
  }, [annotatesOptions, isGroup])

  return <></>
}

export default Notations