import { Text, View, Image} from "react-native";
export default function Homescreen() {
    return (
        <View
        style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
<Text
       style={{
        fontSize: 25,
        textAlign: 'center',
        marginTop: 0,
        fontWeight: 'bold',
        color: 'red',
        backgroundColor:'black', 
        borderRadius:10, 
        width: 200,
        marginLeft: 0,
       
      }}>
        WELCOME TO Alfito sport

        </Text>
        <Image 
        source={{ uri :('https://cdn1.productnation.co/stg/sites/5/5d7f69a0f26ed.jpeg') }}
        style={{ width: 450, height: 300, borderRadius: 10 }}
        />
    
        
      </View>
    );
}


