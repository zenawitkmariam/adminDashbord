import React from 'react'
import { Avatar, Card,  } from '@mui/material'
import CardHeader from '@mui/material/CardHeader';


type propTypes ={
   title:string,
   data:string,
   image:string,
   color:string,
   Icon:any
}
function Summary(props:propTypes) { 
  return (
        <Card sx={{ maxWidth: 345 , minWidth:230, paddingRight:1 }} variant="outlined"> 
            <CardHeader sx={{ font:'bold', fontSize:'small' }}
              title={props.title}
              subheader={props.data}
              action={
                   <Avatar alt="U" className='' src={props.image} sx={{height:35,width:35,color:props.color, marginTop:2, }} /> 
              }
            />
        </Card>  
  )
}

export default Summary
