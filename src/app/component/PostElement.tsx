import React from 'react'

type propTypes={
  color:string,
  Icon:any,
  title:string
}
function PostElement(props:propTypes) {
  return (
    <div className=' flex items-center  rounded-sm my-5
         hover:grray-100 hover:cursor-pointer' >
        <props.Icon style={{color:props.color}} />
        <p>{props.title}</p>
    </div>
  )
}

export default PostElement
