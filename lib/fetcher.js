/**
 * Request Token to fetch any endpoint resource.
 * Yes, this is not the best security but is a mini-layer to avoid open endpoints.
 * 
 * @param {String} endpoint Endpoint request
 * @returns Response JSON with auth_token
 */
async function getToken(endpoint) {
  const token_query = await fetch(`/api/token?for=${endpoint}`)
  return token_query.json()
}

export default async function fetcher(input, init) {
  const { auth_token } = await getToken(input)
  const res = await fetch(input, {
    ...init,
    headers: {
      Authorization: `Bearer ${auth_token}`,
    },
  })
  console.log(res)
  return res.json()
}
