import { OK, INTERNAL_SERVER_ERROR, UNAUTHORIZED } from 'http-status'
import prisma from '@io/lib/prisma'

import { validateToken } from '@io/lib/authToken'

export default async function handler(req, res) {
  const validToken = await validateToken(req.headers.authorization)

  if (!validToken) {
    return res.status(UNAUTHORIZED).json({
      auth: false,
    })
  }

  try {
    const totalViews = await prisma.articleViews.aggregate({
      _sum: {
        count: true,
      }
    })

    return res.status(OK).json({
      total: totalViews._sum.count.toString(),
    })
  } catch (e) {
    return res.status(INTERNAL_SERVER_ERROR).json({
      message: e.message,
    })
  }
}
