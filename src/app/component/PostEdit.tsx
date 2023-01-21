import { Avatar } from '@mui/material'
import React, {useRef,useState} from 'react'
import userl from '../../images/userl.png';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PostElement from './PostElement';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import {useLocation } from 'react-router-dom'
import Moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, updatePost } from './PostSlice';
import { useNavigate } from 'react-router-dom'
import ReactPlayer from 'react-player';

function PostEdit() {

    const location = useLocation();
    const post = location.state ?  location.state.post:null;
    const [videotitle,setVideo] = useState(post ?  post.videotitle:'');
    const [subject,setSubject] = useState(post ?  post.subject:'');
    const [category,setCategory] = useState(post ?  post.category:'');
    const [primer,setPrimer] = useState(post ?  post.primer:'');
    const [hushtag,setHushtag] = useState(post ?  post.hushtag:'');
    const [newhushtag,setNewhushtag] = useState(post ?  post.newhushtag:'');
    const [level1,setLevel1] = useState(post ?  post.level1:'');
    const [level2,setLevel2] = useState(post ?  post.level2:'');
    const [level3,setLevel3] = useState(post ?  post.level3:'');
    const [level4,setLevel4] = useState(post ?  post.level4:'');
    const [level5,setLevel5] = useState(post ?  post.level5:'');
    const [level6,setLevel6] = useState(post ?  post.level6:'');
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const videoTitleRef = useRef<HTMLInputElement>(null);
    const subjectRef = useRef<HTMLInputElement>(null);
    const categoryRef = useRef<HTMLInputElement>(null);
    const primerRef = useRef<HTMLInputElement>(null);
    const hushtagRef = useRef<HTMLInputElement>(null);
    const newhushtagRef = useRef<HTMLInputElement>(null);
    const level1Ref = useRef<HTMLInputElement>(null);
    const level2Ref = useRef<HTMLInputElement>(null);
    const level3Ref = useRef<HTMLInputElement>(null);
    const level4Ref = useRef<HTMLInputElement>(null);
    const level5Ref = useRef<HTMLInputElement>(null);
    const level6Ref = useRef<HTMLInputElement>(null);
  

    const modifyPost=(e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        let postVal={
            id:post.id, 
            videotitle:videoTitleRef.current?.value,
            subject:subjectRef.current?.value, 
            category:categoryRef.current?.value,
            primer:primerRef.current?.value,
            hushtag:hushtagRef.current?.value,
            newhushtag:newhushtagRef.current?.value,
            level1:level1Ref.current?.value,
            level2:level2Ref.current?.value, 
            level3:level3Ref.current?.value,
            level4:level4Ref.current?.value,
            level5:level5Ref.current?.value,
            level6:level6Ref.current?.value,
            post:post
        }
        dispatch(updatePost(postVal)
     );
     navToDashbord();

    }
    const cancelEdit=(e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        navToDashbord();
    }
    const deleteVideo=()=>{
       dispatch(deletePost(post.id));
       navToDashbord();
    }
    const navToDashbord = ( ) =>{
        navigate("/dashbord",{ state: { deletedId: post.id } });
    }
    


  return (
    <div className='flex flex-col p-6 w-full '>
      <h1 className='font-bold text-sm'>Video Edit</h1>
      <div className='md:flex mt-3   '>
         <div className='bg-white justify-evenly p-5 md:w-[30%] sm:w-[70%]'>
            <div className='flex items-center'>
                <Avatar src={userl} />
                <div className='flex-col ml-5 '>
                      <h3 className='text-lg font-medium'> {post.username}</h3>
                      <h6 className='text-sm'> @{post.username}</h6>
                </div>
            </div>
            <div className='lg:flex justify-between items-center '>
                <PostElement title={Moment(post.updateddate).format(' MMM D yyyy')} Icon={CalendarMonthIcon} color='#4287f5' />
                <PostElement title={Moment(post.updateddate).format(' hh:mma ')} Icon={AccessTimeIcon} color='#4287f5' />
            </div>
            <div className=''>
              <ReactPlayer url={post.thumbnail} controls 
                                width={`md:w-200`} height='380px' /> 
            </div>
            <div className='md:flex justify-between items-center'>
                <PostElement title={post.like} Icon={FavoriteBorderIcon} color='#4287f5' />
                <PostElement title={post.comment} Icon={CommentIcon} color='#4287f5' />
                <PostElement title={post.view} Icon={PlayCircleIcon} color='#4287f5' />
            </div>
            <div className=''>
              <Button variant="outlined" onClick={deleteVideo} fullWidth >Delete</Button>
            </div>

         </div>
         <div className='bg-white md:w-[60%] lg:w-[70%] xl:w-[70%] sm:w-[70%] 
                sm:mt-5 md:mt-0  md:ml-5  '>
             <form className='' > 
                <div className=' lg:flex px-5 justify-evenly sm:py-3 '>
                   <div className='flex flex-col justify-center lg:mr-5 sm:pt-3 '>
                        <label className=' font-semibold text-md '>Video Title </label>
                        <input placeholder='title' type='text'
                         ref={videoTitleRef} value={videotitle} onChange={()=>{setVideo(videoTitleRef.current?.value)}}
                        className='rounded col-span-3 px-2 outline border-none outline-gray-400 outline-1 mt-2   '/>
                    </div>
                   <div className='flex flex-col justify-center lg:ml-5 sm:pt-3 '>
                        <label className=' font-semibold text-md '>Subject </label>
                        <input placeholder='subject' type='text'
                         ref={subjectRef} value={subject} onChange={()=>{setSubject(subjectRef.current?.value)}}
                        className='rounded col-span-3 px-2 outline border-none outline-gray-400 outline-1 mt-2   '/>
                    </div>
                </div>
                <div className=' lg:flex px-5  mt-5 justify-evenly  '>
                   <div className='flex flex-col justify-center lg:mr-5'>
                        <label className='  font-semibold text-md '>Category </label>
                        <input placeholder='category' type='text' 
                         ref={categoryRef} value={category} onChange={()=>{setCategory(categoryRef.current?.value)}}
                        className='rounded col-span-3 px-2 outline border-none outline-gray-400 outline-1  mt-2  '/>
                    </div>
                   <div className='flex flex-col justify-center lg:ml-5'>
                        <label className='  font-semibold text-md '>Primers </label>
                        <input placeholder='primers' type='text' 
                         ref={primerRef} value={primer} onChange={()=>{setPrimer(primerRef.current?.value)}}
                        className='rounded col-span-3 px-2 outline border-none outline-gray-400 outline-1  mt-2  '/>
                    </div>
                </div>
                <div className=' lg:flex px-5  mt-5 justify-evenly '>
                   <div className='flex flex-col justify-center lg:mr-5'>
                        <label className=' font-semibold text-md '>Add hushtag  </label>
                        <input placeholder='new hushtag' type='text' 
                         ref={newhushtagRef} value={newhushtag} onChange={()=>{setNewhushtag(newhushtagRef.current?.value)}}
                        className='rounded col-span-3 px-2 outline border-none outline-gray-400 outline-1  mt-2 '/>
                    </div>
                   <div className='flex flex-col justify-center lg:ml-5'>
                        <label className=' font-semibold text-md '>Current hushtag  </label>
                        <input placeholder='hushtag' type='text' 
                         ref={hushtagRef} value={hushtag} onChange={()=>{setHushtag(hushtagRef.current?.value)}}
                        className='rounded col-span-3 px-2 outline border-none outline-gray-400 outline-1  mt-2 '/>
                    </div>
                </div>
                <div className=' flex px-5 py-5 lg:justify-evenly' >
                   <h1 className='text-lg font-bold'>Levels </h1>
                </div>
                <div className=' lg:flex  px-5  justify-evenly  '>
                   <div className='flex flex-col justify-center lg:mr-5 '>
                        <label className=' font-semibold  text-md '>Level 1 </label>
                        <input placeholder='level 1' type='text' 
                         ref={level1Ref} value={level1} onChange={()=>{setLevel1(level1Ref.current?.value)}}
                         className='rounded col-span-3 px-2 outline border-none outline-gray-400 outline-1  mt-2   '/>
                    </div>
                   <div className='flex flex-col justify-center lg:ml-5'>
                        <label className=' font-semibold  text-md '>Level 2 </label>
                        <input placeholder='level 2' type='text' 
                         ref={level2Ref} value={level2} onChange={()=>{setLevel2(level2Ref.current?.value)}}
                         className='rounded col-span-3 px-2 outline border-none outline-gray-400 outline-1  mt-2   '/>
                    </div>
                </div>
                <div className=' lg:flex  px-5  mt-5  justify-evenly  '>
                   <div className='flex flex-col justify-center lg:mr-5 '>
                        <label className=' font-semibold  text-md '>Level 3 </label>
                        <input placeholder='level 3' type='text' 
                         ref={level3Ref} value={level3} onChange={()=>{setLevel3(level3Ref.current?.value)}}
                          className='rounded col-span-3 px-2 outline border-none outline-gray-400  outline-1  mt-2  '/>
                    </div>
                   <div className='flex flex-col justify-center  lg:ml-5  '>
                        <label className=' font-semibold text-md '>Level 4 </label>
                        <input placeholder='level 4' type='text' 
                         ref={level4Ref} value={level4} onChange={()=>{setLevel4(level4Ref.current?.value)}}
                          className='rounded col-span-3 px-2 outline border-none outline-gray-400 outline-1  mt-2  '/>
                    </div>
                </div>
                <div className=' lg:flex px-5  mt-5 justify-evenly '>
                   <div className='flex flex-col justify-center lg:mr-5 '>
                        <label className=' font-semibold text-md '>Level 5  </label>
                        <input placeholder='level 5' type='text' 
                         ref={level5Ref} value={level5} onChange={()=>{setLevel5(level5Ref.current?.value)}}
                         className='rounded col-span-3 px-2 outline border-none outline-gray-400 outline-1  mt-2 '/>
                    </div>
                   <div className='flex flex-col justify-center lg:ml-5 '>
                        <label className=' font-semibold text-md '>Level 6  </label>
                        <input placeholder='level 6' type='text' 
                         ref={level6Ref} value={level6} onChange={()=>{setLevel6(level6Ref.current?.value)}}
                         className='rounded col-span-3 px-2 outline border-none outline-gray-400 outline-1  mt-2 '/>
                    </div>
                </div>
                <div className=' md:flex  px-5 sm:pb-2 mt-5 justify-center mb-3 '>
                    <Button variant="outlined"  
                        style={{maxWidth: '200px', marginRight:10, marginTop:5 }} fullWidth onClick={cancelEdit} >Cancel</Button>
                    <Button variant="contained"  
                        style={{maxWidth: '200px', marginTop:5}} fullWidth onClick={modifyPost}>Save</Button>
                </div>
            </form>
         </div>
      </div>
    </div>
  )
}

export default PostEdit
