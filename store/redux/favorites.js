import { createSlice } from '@reduxjs/toolkit';

const favourtiesSlice=createSlice({
    name :'favorites',
    initialState :{
        count:[],
    },
    reducers:
    {
        addFavorite:(state,action)=>
        {
            state.count.push({counts:action.payload.counts,id:action.payload.id,title:action.payload.title});
        },

        removeFavorite:(state,action)=>
        {
            var rem=({counts:action.payload.counts,id:action.payload.id,title:action.payload.title});
            for (var i =0; i < state.count.length; i++)
            if (state.count[i].id === rem.id) {
            state.count.splice(i,1);
            break;
            }
        },
        
    }
    
});

export const addFavorite=favourtiesSlice.actions.addFavorite;
export const removeFavorite=favourtiesSlice.actions.removeFavorite;
export const countCat=favourtiesSlice.actions.countCat;

export default favourtiesSlice.reducer;
