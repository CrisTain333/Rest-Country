import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Item = ({flgImage,name,capital,population,region,} ) => {
  return (
    <>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="145"
          image={flgImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Capital : {capital}
          </Typography> <br />
          <Typography variant="body2" color="text.secondary">
          Population :  <strong>  {population}  </strong>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Region : {region}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </>
  )
}

export default Item