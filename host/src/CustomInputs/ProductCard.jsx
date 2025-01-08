import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, cart } from '../reduxstore/ShoppingCartReducer';

export default function ProductCard({data,hideAddToCart}) {
  const dispatch= useDispatch();
  const items= useSelector(cart)


  const addItemToCart=()=>{
    
dispatch(addToCart(data))
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={data.thumbnail}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }} className='card-description'>
          {data.description}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} className='card-description'>
          ${data.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions >
       {hideAddToCart==false && <Button size="small" color="primary" className='right' onClick={addItemToCart} >
          Add To Card
        </Button>}
      </CardActions>
    </Card>
  );
}