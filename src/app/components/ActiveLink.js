import { withRouter } from 'next/router'

const ActiveLink = ({ children, router, href, activeClass, target, className }) => {
  const handleClick = (e) => {
    if (!target) {
      e.preventDefault()
      router.push(href)
    }
  }

  const handMouseEnter = (e) => {
    router.prefetch(href)
  }

  return (
    <a
      href={href}
      onMouseEnter={handMouseEnter}
      onClick={handleClick}
      target={target ? target : '_self'}
      className={router.pathname === href ? `${className} ${activeClass}` : className}
    >
      {children}
    </a>
  )
}

export default withRouter(ActiveLink)