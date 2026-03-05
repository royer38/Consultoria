import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const ScrollToHash = () => {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""))

      if (element) {
        const headerOffset = 120 // altura de tu header
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }
  }, [hash])

  return null
}

export default ScrollToHash;