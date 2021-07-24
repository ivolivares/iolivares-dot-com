/**
 * A custom hook to detect when custom fonts have finished loading
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/fonts
 * 
 * Originally inspired by Delba Oliveira hook
 * @see https://github.com/delbaoliveira/website/blob/main/lib/useIsFontReady.ts
 */

import { useEffect, useState } from "react"

export function useIsFontReady() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    document.fonts.ready.then(() => {
      setIsReady(true)
    })
  }, [])

  return isReady
}