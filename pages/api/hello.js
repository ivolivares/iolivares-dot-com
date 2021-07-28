// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const Hello = (_req, res) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}

export default Hello
