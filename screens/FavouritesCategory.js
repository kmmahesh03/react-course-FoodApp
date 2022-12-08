import { useContext } from 'react';
import {Text,View,StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';
import CategoryList from '../component/CategoryList/CategoryList';
import { CATEGORIES } from '../data/dummy-data';
import { MEALS } from '../data/dummy-data';
//import { FavoritesContext } from '../store/context/favorites-context';

function FavoritesCategory()
{   
    //const favoriteCatCtx=useContext(FavoritesContext);
    const favoriteCategoryIds=useSelector((state)=>state.favotiteCategories.count);
    console.log(favoriteCategoryIds);
    // const countsCa=useSelector(state=>state.favotiteCategories.count);
    // console.log(countsCa);
    function favs()
    {
        let favsca=[];
        for(let i=0;i<favoriteCategoryIds.length;i++)
        {
           for(j=0;j<CATEGORIES.length;j++)
           {
            if(favoriteCategoryIds[i].id===CATEGORIES[j].id)
            {
               favsca.push(CATEGORIES[j]);
            }
           }
        }
        return favsca;
    }
    //const favoriteCategory=CATEGORIES.filter(category=>favoriteCategoryIds.includes(category.id)); 
    const favoriteCategory=favs();
    console.log(favoriteCategory);
    // for(let i=0;i<favoriteCategoryIds.length;i++){
    //const  displayedMeals=MEALS.filter((mealItem)=>{
    //         return mealItem.categoryIds.indexOf(favoriteCategoryIds[i])>=0;
    //        });
    //       //console.log(displayedMeals.length);
    // }

    if(favoriteCategory.length===0)
    {
        return <View style={styles.rootContainer}>
            <Text style={styles.text}>You have no favourite categories yet.</Text>
        </View>
    }
    
    return <CategoryList items={favoriteCategory} data={favoriteCategoryIds}/>
    
    }
   

export default FavoritesCategory;

const styles=StyleSheet.create({

    rootContainer :
    {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:
    {
        fontSize:18,
        fontWeight:'bold',
        color:'white',

    },

});
