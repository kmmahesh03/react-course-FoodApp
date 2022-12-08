import { FlatList } from 'react-native';
import CategoryGridTile from '../component/CategoryGridTile';
import{CATEGORIES} from '../data/dummy-data';
import { MEALS } from '../data/dummy-data';


function CategoriesScreen({navigation})
{
    
    function renderCategoryItem(itemData)
{
    function onPressHandler()
    {
        navigation.navigate('MealsOverview',{
            categoryId:itemData.item.id,
            
        });
    }

    
   return (<CategoryGridTile 
        title={itemData.item.title} 
        color={itemData.item.color} 
        onPress={onPressHandler}
        //navigation={navigation}
        
        />);
       
} 

    return (<FlatList 
        data={CATEGORIES} 
        keyExtractor={(item)=>item.id} 
        renderItem={renderCategoryItem.bind()}
        numColumns={2}/>
    );
}

export default CategoriesScreen;