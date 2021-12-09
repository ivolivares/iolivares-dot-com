// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { withSentry } from "@sentry/nextjs"

const Hello = (_req, res) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}

export default withSentry(Hello)
