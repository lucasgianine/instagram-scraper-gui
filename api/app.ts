import express from 'express'
import { getLatestPost, getThreeLatestPosts } from './index'

const app = express()
const port = 3000

app.get('/latest-post/:username', async (req, res) => {
  const { username } = req.query.params

  const latestPost = await getLatestPost(username as string)

  res.json(latestPost)
})

app.get('/three-latest-posts/:username', async (req, res) => {
  const { username } = req.query.params

  const threeLatestPosts = await getThreeLatestPosts(username as string)

  res.json(threeLatestPosts)
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
