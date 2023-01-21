import React , {useRef} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import TargetIcon from './TargetIcon';

import logo from '../../images/logo.png'
import user from '../../images/user.png'
import { keyboardKey } from '@testing-library/user-event';

type propTypes={
   searchHeader: (searchText: string  ) => void
}
function Header(props:propTypes) {

   const searchTextRef = useRef<any>(null);

   const onEnter = (event:keyboardKey,searchText:string) =>{
      if (event.key === 'Enter' || event.key === 'Backspace' ) {
          props.searchHeader(searchText);
      }
     }
  return (
    <div className='flex justify-between items-center bg-white border-b-2
     border-b-lightgray w-[100%] pt-1 px-10 '>
        <div className='flex items-center' >
           <img src={logo} alt='logo' style={{height:'30%',width:'30%'}} />
        </div>
        <div className='flex items-center justify-center'>
            <div className='flex bg-gray-100 justify-center items-center mr-5'>
               <input ref={searchTextRef} placeholder='Search' type='text' className='rounded bg-gray-100
                border-gray-400 h-10 outline-none w-full px-3 ' 
                  onChange={()=>props.searchHeader(searchTextRef.current?.value)} 
                  onKeyDown={(e)=>onEnter(e,searchTextRef.current?.value)} 
                   /> 
               <SearchIcon className='rounded-tr-md rounded-br-md bg-gray-100 mr-2' style={{color:'gray'}} />
            </div>
           <TargetIcon  avatar={user} />
        </div> 
    </div>
  )
}

export default Header
