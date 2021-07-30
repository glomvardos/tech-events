export async function getEvents() {
  const api_url = process.env.API_URL
  const response = await fetch(`${api_url}/events`)
  const data = await response.json()

  return data
}
