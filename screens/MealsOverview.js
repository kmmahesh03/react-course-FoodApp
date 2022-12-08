import {MEALS,CATEGORIES} from '../data/dummy-data';
import{useContext, useEffect, useLayoutEffect} from 'react';
import MealsList from '../component/MealsList/MealsList';
import IconButton from '../component/iconButton';
import { useDispatch, useSelector } from 'react-redux';
//import { FavoritesContext } from '../store/context/favorites-context';
import {addFavorite,removeFavorite} from '../store/redux/favorites';
import CategoryGridTile from '../component/CategoryGridTile';


export function MealsOverview({route,navigation})
{
  //const favoriteCatCtx=useContext(FavoritesContext);
  const favouriteCatIds=useSelector((state)=>state.favotiteCategories.count);
  //console.log(favouriteCatIds);
  const dispatch=useDispatch();
  const catId=route.params.categoryId;
  //console.log(catId);
  function check()
  {
    if(favouriteCatIds.find(o => o.id === catId))
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  
  
  const catIsFavourite=(check());
  //console.log(catIsFavourite);
  //console.log(Object.values(favouriteCatIds));
  const favtitle=CATEGORIES.find((category)=>catId===category.id).title;
  //console.log(favtitle);
  const displayedMeals=MEALS.filter((mealItem)=>{
    return mealItem.categoryIds.indexOf(catId)>=0;
  });
  //console.log(displayedMeals);

  function changeFavoriteCatStatusHandler()
    {
       if(catIsFavourite)
       {
        //favoriteCatCtx.removeFavorite(catId);
        dispatch(removeFavorite({id:catId,counts:displayedMeals.length,title:favtitle}));
        //dispatch(countCat({id:catId,counts:displayedMeals.length}));
       }
       else{
          //favoriteCatCtx.addFavorite(catId)
          dispatch(addFavorite({id:catId,counts:displayedMeals.length,title:favtitle}));
          //dispatch(countCat({id:catId,counts:displayedMeals.length,title:favtitle}));
       }
    }
    useLayoutEffect(()=>{
        navigation.setOptions({
          headerRight:()=>
          {
              return <IconButton 
              icon={catIsFavourite ? 'star' : 'star-outline'} 
              color="white"  
              onPress={changeFavoriteCatStatusHandler}/>
          }
        });
   },[navigation,changeFavoriteCatStatusHandler]);

  useLayoutEffect(()=>{
    const categoryTitle=CATEGORIES.find((category)=>catId===category.id).title;
    navigation.setOptions({
      title:categoryTitle,
    });
  },[catId,navigation]
  );

  return <MealsList items={displayedMeals}/>;
    
}

export default MealsOverview;


