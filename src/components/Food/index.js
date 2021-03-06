import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { green } from '@mui/material/colors'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export default function Food() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://img-global.cpcdn.com/recipes/d1848c61417e18b6/1200x630cq70/photo.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ textAlign: 'center' }}
                >
                  Burger
                </Typography>
                <Typography
                  variant="body2"
                  color="green"
                  sx={{ textAlign: 'center' }}
                >
                  Rp. 15.000
                </Typography>
              </CardContent>
              <CardActions>
                {/* <Button size="small">Share</Button>
                <Button size="small">Learn More</Button> */}
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://img-global.cpcdn.com/recipes/d1848c61417e18b6/1200x630cq70/photo.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ textAlign: 'center' }}
                >
                  Burger
                </Typography>
                <Typography
                  variant="body2"
                  color="green"
                  sx={{ textAlign: 'center' }}
                >
                  Rp. 15.000
                </Typography>
              </CardContent>
              <CardActions>
                {/* <Button size="small">Share</Button>
                <Button size="small">Learn More</Button> */}
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://img-global.cpcdn.com/recipes/d1848c61417e18b6/1200x630cq70/photo.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ textAlign: 'center' }}
                >
                  Burger
                </Typography>
                <Typography
                  variant="body2"
                  color="green"
                  sx={{ textAlign: 'center' }}
                >
                  Rp. 15.000
                </Typography>
              </CardContent>
              <CardActions>
                {/* <Button size="small">Share</Button>
                <Button size="small">Learn More</Button> */}
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}
