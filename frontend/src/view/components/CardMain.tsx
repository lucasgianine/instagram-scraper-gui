import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { CardActionArea } from '@mui/material'
import CommentsIcon from '@mui/icons-material/ChatBubbleOutline'
import LikesIcon from '@mui/icons-material/ThumbUpOffAlt'

type CardMainProps = {
  username: string
  avatar: string
  image: string
  description: string
  post: string
  likes: number
  comments: number
}

function CardMain(props: CardMainProps) {
  const { username, avatar, image, description, likes, comments } = props

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar>
            <img src={avatar} />
          </Avatar>
        }
        title={`@${username}`}
      />
      <CardActionArea>
        <CardMedia
          component='img'
          height='200px'
          image={image}
          alt={'Instagram Post of ' + username}
        />
        <CardContent>
          <Typography variant='body2' color='text.secondary'>{description}</Typography>

          <Divider sx={{ paddingTop: '10px' }} />

          <Typography sx={{ display: 'flex', paddingTop: '10px', gap: '10px', justifyContent: 'center' }} variant='body2'>
            <LikesIcon sx={{ fontSize: '20px' }} /> {likes}
            <CommentsIcon sx={{ fontSize: '20px' }} /> {comments}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardMain
