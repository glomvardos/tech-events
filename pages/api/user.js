import cookie from 'cookie'

async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: `Method ${req.method} not allowed` })
    return
  }

  if (!req.headers.cookie) {
    res.status(403)
    return
  }

  const { token } = cookie.parse(req.headers.cookie)

  const response = await fetch(`${process.env.API_URL}/users/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const data = await response.json()

  if (response.ok) {
    res.status('200').json(data)
  }

  if (!response.ok) {
    res.status(`403`).json({ message: 'User forbidden' })
  }
}

export default handler
