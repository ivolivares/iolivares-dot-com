import jwt from 'jsonwebtoken'

const token_secret = process.env.API_JWT_TOKEN_SECRET

export const createToken = async (data) => {
  return await jwt.sign({
    data,
  },
  token_secret,
  {
    expiresIn: '1h',
  })
}

export const validateToken = async (authHeader) => {
  if (authHeader && authHeader.split(' ')[0] === 'Bearer') {
    const token = authHeader.split(' ')[1]
    return await jwt.verify(token, token_secret, (err, payload) => {
      if (err) {
        return false
      }

      return payload
    })
  } else {
    return false
  }
}