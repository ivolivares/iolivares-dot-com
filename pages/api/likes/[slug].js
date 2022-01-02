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
    const slug = req.query.slug.toString()

    if (req.method === 'POST') {
      const newOrUpdatedViews = await prisma.articleLikes.upsert({
        where: {
          slug,
        },
        create: {
          slug,
        },
        update: {
          count: {
            increment: 1,
          },
        },
      })

      return res.status(OK).json({
        total: newOrUpdatedViews.count.toString(),
      })
    }

    if (req.method === 'GET') {
      const views = await prisma.articleLikes.findUnique({
        where: {
          slug,
        }
      })

      return res.status(OK).json({
        total: views.count.toString(),
      })
    }
  } catch (e) {
    return res.status(INTERNAL_SERVER_ERROR).json({
      message: e.message,
    })
  }
}
