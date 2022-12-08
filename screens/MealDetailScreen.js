import {Text,View,Image,StyleSheet,ScrollView, Button} from 'react-native';
import {useContext, useLayoutEffect} from 'react';
import List from '../component/MealDetail/List';
import Subtitle from '../component/MealDetail/Subtitle';
import MealDetails from '../component/MealDetails';
import {MEALS} from '../data/dummy-data';
import IconButton from '../component/iconButton';
import { FavoritesContext } from '../store/context/favorites-context';
import { useDispatch, useSelector } from 'react-redux';
import {addFavorite1,removeFavorite1} from '../store/redux/favoritesMeal';

function MealDetailScreen({route,navigation})
{
    //const favoriteMealsCtx= useContext(FavoritesContext);
    const favoriteMealIds=useSelector((state)=>state.favoriteMeals.ids);
    const dispatch=useDispatch();
    const mealId=route.params.mealId;

    const selectedMeal=MEALS.find((meal)=>meal.id===mealId);

    const mealIsFavorite=favoriteMealIds.includes(mealId);

    function changeFavoriteStatusHandler()
    {
        if(mealIsFavorite)
        {
            //favoriteMealsCtx.removeFavorite(mealId);
            dispatch(removeFavorite1({id:mealId}));
        }
        else
        {
           // favoriteMealsCtx.addFavorite(mealId);
           dispatch(addFavorite1({id:mealId}));
           
        }
    }

   useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=>
            {
                return <IconButton 
                icon={mealIsFavorite ? 'star' : 'star-outline'} 
                color="white"  
                onPress={changeFavoriteStatusHandler}/>
            }
        });
   },[navigation,changeFavoriteStatusHandler]);

    return(
        <ScrollView style={styles.rootContainer}>
        <View>
        <Image style={styles.image} source={{uri:selectedMeal.imageUrl}}/>
        <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
            duration={selectedMeal.duration} 
            complexity={selectedMeal.complexity} 
            affordability={selectedMeal.affordability}
            textStyle={styles.detailText}
            />
            <View style={styles.listOuter}>
            <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List data={selectedMeal.ingredients}/>
            <Subtitle>Steps</Subtitle>
           <List data={selectedMeal.steps}/>
            </View>
            </View>
        </View>
        </ScrollView>
    );
}

export default MealDetailScreen;

const styles=StyleSheet.create({
    rootContainer:
    {
        marginBottom:24,
    },
    image:
    {
        width:'100%',
        height:300,
    },
    title:
    {
        fontWeight:'bold',
        fontSize:24,
        margin:8,
        textAlign:'center',
        color:'white',
    },
    detailText:
    {
        color:'white',
    },

    listContainer:
    {
        width:'80%',
    },
    listOuter:
    {
       alignItems:'center',
    }


})