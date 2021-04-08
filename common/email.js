export const email = '\u006d\u006f\u0063\u002e\u0073\u0065\u0072\u0061\u0076\u0069\u006c\u006f\u0069\u0040\u0069\u0068'

export const [domain, name] = email.split('@')

export const sendEmail = (e) => {
  e.preventDefault()
  const link = e.currentTarget
  const name = link.getAttribute('data-name').split('').reverse().join('')
  const domain = link.getAttribute('data-domain').split('').reverse().join('')
  window.location.href = `mailto:${name}@${domain}?subject=Contact from the web: iolivares.com`
}

