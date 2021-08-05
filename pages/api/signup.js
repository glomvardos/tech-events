import cookie from 'cookie'

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: `Method ${req.method} not allowed` })
    return
  }

  const { username, email, password } = req.body

  const response = await fetch(`${process.env.API_URL}/auth/local/register`, {
    method: 'POST',
    body: JSON.stringify({
      username,
      email,
      password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await response.json()
  console.log(data)
  if (response.ok) {
    // Store jwt
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('token', data.jwt, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        sameSite: 'strict',
        path: '/',
      })
    )

    res.status('200').json(data.user)
  }

  if (!response.ok) {
    res.status(`${data.statusCode}`).json(data)
  }
}

export default handler
