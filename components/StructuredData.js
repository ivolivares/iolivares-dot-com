/**
 * JSON Linking Data
 * @see https://json-ld.org
 * 
 * Structured Data for SEO
 * @see https://developers.google.com/search/docs/advanced/structured-data
 */
import jsonLD from '@io/data/structuredData'

export default function StructuredData() {
  return (
    <script dangerouslySetInnerHTML={{ __html: jsonLD }} type="application/ld+json" />
  )
}