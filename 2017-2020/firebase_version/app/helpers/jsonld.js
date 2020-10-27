export default () =>
  <script dangerouslySetInnerHTML={{
    __html: `{
        "@context": "http://schema.org",
        "@type": "Person",
        "name": "Iván Olivares Rojas",
        "url": "https://www.iolivares.com",
        "email": "mailto:hi@iolivares.com",
        "gender": "male",
        "birthDate": "1991-01-14",
        "image": "https://iolivares.com/static/images/me.jpg",
        "jobTitle": "Technical Leader and Software Architect",
        "sameAs": [
          "https://twitter.com/ivolivares/",
          "https://github.com/ivolivares/",
          "https://linkedin.com/in/ivolivares",
          "https://instagram.com/iolivares.photos/",
          "https://www.facebook.com/iolivares.cl",
          "https://plus.google.com/+IvánOlivaresR",
          "https://soundcloud.com/djmaxis"
        ]
      }`
  }} type="application/ld+json" />