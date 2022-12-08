import { FlatList } from 'react-native';
import CategoryGridTile from '../CategoryGridTile';
import { useNavigation } from '@react-navigation/native';
import MealsList from '../MealsList/MealsList';
import MealsOverview from '../../screens/MealsOverview';
import { MEALS } from '../../data/dummy-data';

function CategoryList({items,data})
{
    const navigation=useNavigation();
    function renderCategoryItem(itemData)
    {
    function onPressHandler()
    {
        navigation.navigate('MealsOverview',{
            categoryId:itemData.item.id,    
        });
    }
    //console.log(items.id);
     const catId=itemData.item.id;
     //console.log(catId);
     //console.log(items.id);
     //console.log(itemData);
    // console.log(sizeCat);
    // function oddpos(){
    //     for (i=0;i,sizeCat.length;i++)
    //     {
    //         if(i%2!=0)
    //         {
    //             //console.log(sizeCat[i]);
    //             if(sizeCat[i]===catId)
    //             return i;
    //         }
    //     }
    // }
    //console.log(data)
    function cnt()
    {
    for(i=0;i<data.length;i++)
    {
        if(catId===data[i].id)
        {
           return data[i].counts;
        }
    }
    }
    function tit()
    {
    for(i=0;i<data.length;i++)
    {
        if(catId===data[i].id)
        {
           return data[i].title;
        }
    }
    }
    //console.log(items);
    //  const displayedMeals=MEALS.filter((mealItem)=>{
    //      return mealItem.categoryIds.indexOf(data=>catId.includes(data.id))>=0;
    //    });
       //console.log(sizeCat[oddpos()]==catId);
      //console.log(displayedMeals.length);
    
 
   return (<CategoryGridTile 
        title={tit()} 
        color={itemData.item.color} 
        onPress={onPressHandler}
        navigation={navigation}
        sizecat={cnt()}
        />);
}
    return (<FlatList 
        data={items} 
        keyExtractor={(item)=>item.id} 
        renderItem={renderCategoryItem.bind()}/>
    );
}
export default CategoryList;