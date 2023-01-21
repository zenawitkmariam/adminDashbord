import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import { PostData } from './FakeData';

export const postSlice = createSlice({
  name: 'posts',
  initialState:{ value: PostData },
  
  reducers: {
    searchPost:(state, action: PayloadAction<string>) => {
      state.value = PostData;
      state.value = action.payload !== '' ? 
                    (  state.value.filter((post) => 
                    post.videotitle.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase()) ||
                    post.username.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase()) )
                    ) : PostData 
    },
    updatePost: (state,action) => {
        state.value.map((post) => {
          if(post.id === action.payload.id){
            post.videotitle = action.payload.videotitle;
            post.subject = action.payload.subject;
            post.category = action.payload.category;
            post.primer = action.payload.primer;
            post.newhushtag = action.payload.newhushtag;
            post.hushtag = action.payload.hushtag;
            post.level1 = action.payload.level1;
            post.level2 = action.payload.level2;
            post.level3 = action.payload.level3;
            post.level4 = action.payload.level4;
            post.level5 = action.payload.level5;
            post.level6 = action.payload.level6;
          }
        })
    },
    deletePost: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter((post)=> post.id!==action.payload);
    },

  },
 });

export const { updatePost, deletePost, searchPost } = postSlice.actions;

export const selectUser = (state:any) => state.posts.value;

export default postSlice.reducer;
