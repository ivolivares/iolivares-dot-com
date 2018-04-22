import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'next/router'

const ActiveLink = ({ children, router, href, activeClass, target = '_self', className }) => {
  const handleClick = (e) => {
    if (!target) {
      e.preventDefault()
      router.push(href)
    }
  }

  const handMouseEnter = () => router.prefetch(href)

  return (
    <a
      className={ router.pathname === href ? `${className} ${activeClass}` : className }
      href={ href }
      onClick={ handleClick }
      onMouseEnter={ handMouseEnter }
      target={ target }
    >
      { children }
    </a>
  )
}

ActiveLink.propTypes = {
  activeClass: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  className: PropTypes.className.isRequired,
  href: PropTypes.string.isRequired,
  router: PropTypes.func.isRequired,
  target: PropTypes.string.isRequired
}

export default withRouter(ActiveLink)