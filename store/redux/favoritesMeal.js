import { createSlice } from '@reduxjs/toolkit';


const favourtiesSlice1=createSlice({
    name :'favorites1',
    initialState :{
        ids:[],
    },
    reducers:
    {
        addFavorite1:(state,action)=>
        {
            state.ids.push(action.payload.id);
        },

        removeFavorite1:(state,action)=>
        {
            state.ids.splice(state.ids.indexOf(action.payload.id),1);
        },
        
    }
});




export const addFavorite1=favourtiesSlice1.actions.addFavorite1;
export const removeFavorite1=favourtiesSlice1.actions.removeFavorite1;

export default favourtiesSlice1.reducer;
