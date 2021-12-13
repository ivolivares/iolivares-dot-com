import { OK } from 'http-status'
import { withSentry } from '@sentry/nextjs'
import { createToken } from '@io/lib/authToken'

export default withSentry(async function handler(req, res) {
  const auth_token = await createToken({
    endpoint: req.query?.for || 'none',
  })

  return res.status(OK).json({
    auth_token,
  })
})
