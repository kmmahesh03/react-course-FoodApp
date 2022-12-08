import {configureStore} from '@reduxjs/toolkit';
import favoritesReducer from './favorites';
import favoritesReducer1 from './favoritesMeal';
export const store=configureStore({
    reducer:
    {
        favotiteCategories:favoritesReducer,
        favoriteMeals:favoritesReducer1,
    }
});