import { Pressable, View,Text,StyleSheet, Platform} from "react-native";
//import {useNavigation} from '@react-navigation/native';


function CategoryGridTile({title,color,onPress,sizecat})
{
   //const navigation=useNavigation();
    return(<View style={styles.gridItem}>
        <Pressable android_ripple={{color:'#ccc'}} 
        style={({pressed})=>
        [styles.button,pressed?styles.buttonPressed:null]}
        onPress={onPress} >
            <View style={[styles.innerContainer,{backgroundColor:color}]}> 
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.title}>
                    {sizecat}
                </Text>
            </View>
        </Pressable>
    </View>);
}

export default CategoryGridTile;
const styles=StyleSheet.create({
    gridItem:
    {
        flex:1,
        margin:16,
        height:150,
        borderRadius:8,
        elevation:4,
        overflow: Platform.OS==='android' ? 'hidden' : 'visible',
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowRadius:8,
        shadowOpacity:0.25,
    },
    button:
    {
        flex:1,
    },
    buttonPressed:
    {
        opacity:0.5,
    },
    innerContainer:
    {
        flex:1,
        padding:16,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
    },

    title:
    {
        fontSize:18,
        fontWeight:'bold',
    }

});