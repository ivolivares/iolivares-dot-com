import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'next/router'

const ActiveLink = ({ children, router, href, activeClass, target, className }) => {
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
      rel="noopener"
      target={ target }
    >
      { children }
    </a>
  )
}

ActiveLink.defaultProps = {
  activeClass: '',
  className: '',
  target: '_self'
}

ActiveLink.propTypes = {
  activeClass: PropTypes.string,
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  router: PropTypes.object.isRequired,
  target: PropTypes.string
}

export default withRouter(ActiveLink)