/**
 * JSON Linking Data
 * @see https://json-ld.org/
 */
const JSONLD = () =>
  <script dangerouslySetInnerHTML={{
    __html: `{
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Iván Olivares Rojas",
        "url": "https://www.iolivares.com",
        "email": "mailto:hi@iolivares.com",
        "gender": "male",
        "birthDate": "1991-01-14",
        "image": "https://iolivares.com/images/me.jpg",
        "jobTitle": "Digital Operations Manager at WarnerMedia",
        "sameAs": [
          "https://twitter.com/ivolivares",
          "https://github.com/ivolivares",
          "https://linkedin.com/in/ivanolivaresrojas",
          "https://instagram.com/iolivares.photos/",
          "https://www.facebook.com/iolivares.blog",
          "https://soundcloud.com/djmaxis"
        ]
      }`
  }} type="application/ld+json" />

export default JSONLD