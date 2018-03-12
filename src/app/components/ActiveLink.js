import { withRouter } from 'next/router'

const ActiveLink = ({ children, router, href }) => {
  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  const handMouseEnter = (e) => {
    router.prefetch(href)
  }

  return (
    <a href={href} onMouseEnter={handMouseEnter} onClick={handleClick} className={router.pathname === href ? 'active' : null}>
      {children}
    </a>
  )
}

export default withRouter(ActiveLink)