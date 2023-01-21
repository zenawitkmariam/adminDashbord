import React from 'react'
import { Avatar } from '@mui/material'

type propTypes={
  avatar:string
}
function TargetIcon(props:propTypes) {
  return (
    <div className=''>
      {props.avatar && <Avatar alt="U" className='' src={props.avatar} sx={{height:35,width:35 , object:'cover'}} /> }
    </div>
  )
}

export default TargetIcon
