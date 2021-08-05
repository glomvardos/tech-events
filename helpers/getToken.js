import cookie from 'cookie'

export function getToken(req) {
  const { token: jwt } = cookie.parse(req.headers.cookie || '')
  return jwt
}
