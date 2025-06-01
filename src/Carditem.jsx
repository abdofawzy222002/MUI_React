import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';

export default function Carditem() {
  return (
    <Card sx={{ maxWidth: 345 ,textAlign:'center',margin:'0 auto'}}>
      <CardMedia
        sx={{ height: 140 }}
        image="../new.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Wireless Headphones
        </Typography>
      </CardContent>
      <Rating name="half-rating" defaultValue={2.5} precision={1} />
      <Button variant="contained" color='success' sx={{marginBottom:'10px', width:300 , borderRadius :'20px'}} >in stock</Button>
      <Typography sx={{margin:'5px'}}>$99.99</Typography>
      <Button sx={{marginBottom:'10px', width:300}}  variant="contained">Add To Cart</Button>
    </Card>
  );
}
