import client from 'instatouch'

export async function getLatestPost(username: string) {
  try {
    const request = await client.user(username)

    return request.collector[0]
  } catch (error) {
    console.log('erro: ', error)
  }
}

export async function getThreeLatestPosts(username: string) {
  try {
    const request = await client.user(username)

    const posts = [request.collector[1], request.collector[2], request.collector[3]]

    return posts
  } catch (error) {
    console.log('erro: ', error)
  }
}

export default getLatestPost
