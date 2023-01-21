import React , {useState , useRef , useMemo } from 'react'
import Summary from './Summary';

import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { SummaryCards } from './FakeData';
import TablePagination from '@mui/material/TablePagination';
import  ModeEditIcon  from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deletePost, searchPost } from './PostSlice';
import  Moment  from 'moment';
import './table.css'
import ReactPlayer from 'react-player';
import { NumericFormat } from 'react-number-format';
import { keyboardKey } from '@testing-library/user-event';
import { RootState } from '../store';
import { postType }  from './FakeData';



function Dashbord() {
  
  const postList = useSelector((state:RootState) => state.posts?.value );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchText = useState('');
  const searchTextRef = useRef<any>(null);

  const editPost = ( post:postType ) =>{
    navigate(`/postEdit/${post.id}`,{ state: { post: post } });
  }
  const removePost=(id:number)=>{
    dispatch(deletePost(id));
  };
  const searchPostData=(searchText:string)=>{
    dispatch(searchPost(searchTextRef.current?.value));
  }
  const onEnter = (event:keyboardKey, searchText:string) => {
    if (event.key === 'Enter' || event.key === 'Backspace') {
        dispatch(searchPost(searchText));
    }
  };
  
  const cols = [
     'Thumbnail', 'Video Title',  'User Name', 'Upload Date','Views' ,'Comments', 'Likes','Edit','Delete'
  ];

  return (
    <div className='p-6 pl-10 mr-5  '>
            <div className=' flex flex-col '>
                <h1 className='mb-3'> Dashboard </h1>
                <div id='slider' className=' grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  '>
                    { SummaryCards.map((sc) => (
                        <Summary key={sc.id} title={sc.title} data={sc.data} Icon={sc.icon} image={sc.image} color={sc.color} />
                    ))}
                </div>
          </div>
            <div className=' flex flex-col py-10 sm:max-w-screen-sm
            md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg'>
                <h1> Videos </h1>
                <div className='  bg-white 
                    grid grid-cols-1  ' >

                  <div className='flex m-3 ml-5 border border-gray-100 rounded sm:w-[85%] md:w-[60%] lg:w-[40%] w-[100%]
                              justify-start items-center bg-gray-50 '>
                      <input placeholder='Search videos via hushtags' type='text' 
                         className='flex items-center justify-center pl-4 rounded-sm w-full h-10
                         bg-gray-50 outline-none px-2 mr-2' ref={searchTextRef}
                          // value={searchText}
                         onKeyDown={(e)=>onEnter(e,searchTextRef.current?.value)} 
                        onChange={()=>searchPostData(searchTextRef.current?.value)}
                         /> 
                      <SearchIcon className='rounded-tr-md pt-1 mr-2 ' style={{color:'gray'}} />
                  </div>
                  <div className='flex mb-2 mx-2 border-b border-gray-200 justify-start items-center  '>
                   </div>
                  <div className='m-5 '>
                    <TableContainer sx={{minWidth:245 }} component={Paper}>
                      <Table sx={{ }}  aria-label="a dense table">
                        <TableHead >
                          <TableRow sx={{font:'bold',fontSize:30}}>
                            {cols.map((col) => (
                              <TableCell key={col}  ><div className='font-bold'>{col}</div></TableCell>
                            ))}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {postList.map((post:any) => (
                            <TableRow key={post.id}>
                              <TableCell ><ReactPlayer url={post.thumbnail} controls 
                               width='200px' height='120px' /> </TableCell>
                              <TableCell  >{post.videotitle}</TableCell>
                              <TableCell  >{post.username}</TableCell>
                              <TableCell  >{Moment(post.updateddate).format(' DD-MM-yyyy')}</TableCell>
                              <TableCell  >
                                    <NumericFormat displayType="text" value={post.view}  thousandSeparator="," /></TableCell>
                              <TableCell  >
                                    <NumericFormat displayType="text" value={post.comment} allowLeadingZeros thousandSeparator="," /></TableCell>
                              <TableCell  >
                                    <NumericFormat displayType="text" value={post.like} allowLeadingZeros thousandSeparator="," /></TableCell>
                              <TableCell  onClick={()=>{editPost(post)}} ><ModeEditIcon style={{color:'#42a4f5'}}  /></TableCell>
                              <TableCell onClick={()=>removePost(post.id)} ><DeleteIcon  style={{color:'#f25c73'}}  /></TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                </div>
        </div>
    </div>
  )
}

export default Dashbord
