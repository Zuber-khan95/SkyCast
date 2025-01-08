import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import "./infoBox.css"

export default function InfoBox({Info}) {
  let COLD_URL="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  let HOT_URL="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D";

  return (
 <div className="infoBox">
 
<div className="card-container">
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
    <CardMedia
        sx={{ height: 140 }}
        image={Info.Longitude&&Info.Longitude>75?COLD_URL:HOT_URL}
        title="green iguana"
      />
      <br/>
          <Typography gutterBottom variant="h5" component="div">
    {Info.City} &nbsp;
    {Info.Longitude&&Info.Longitude>75?<AcUnitOutlinedIcon />:<WbSunnyOutlinedIcon/>}
    </Typography>
        <Typography variant="bod y2" sx={{ color: 'text.secondary' }} component="span">
          <p>  Longitude:{Info.Longitude}&deg;</p>
          <p>Latitude:{Info.latitude}&deg;</p>
         
          <p>State:{Info.State}</p>
         <p> Country:{Info.Country}</p>
     
        </Typography>
     
      </CardContent>
    
    </Card>
    </div>
    </div>
  );
}
