import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';

export default function App() {
  return (

    <SafeAreaView>
<View style={styles.container25}>

<View style={styles.container22}>
      <Text style={styles.text2}>sSecond Section</Text>
    </View>

    <ScrollView>

    <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>


{/* <View horizontal style={styles.container1}>
 <Text style={styles.text1}>navbar</Text>
 <Text></Text>
</View> */}



<View style={styles.container6}>
 <Text style={styles.text6}>Thirds</Text>
</View>









</ScrollView>


    <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>

   
<View style={styles.container4}>

<ScrollView horizontal={false} 
nestedScrollEnabled= {true}>

<Text style={styles.text4}>Fourth SectionYour App should have the following: 

All sections (except for the two with Scrollviews inside of them) )should contain text centered in the way that it is in the video. 
A Navbar with 10 links on it which overflow beyond the right border of the screen but is (horizontally) scrollable. This section should not scroll Vertically (include links as texts on the navbar --- section 1 - section 10)
The next 5 rows of sections should scroll together vertically... Each of these sections should have a height that is about the height of the phone.
Sections ("halfs", "thirds", "fourths", "fifths"), should all scroll with the Jumbotron.
Footer section should be fixed and should not scroll vertically or horizontally.
Once you have the sections working in this way - fit into  (pick 2 of 3 Jumbotron, and Halfs Sections)  sections "Text" that overflows and requires ScrollView and in the other some images that overflow and require ScrollView. You can use Lorem Ipsum to get the Text.</Text>
</ScrollView>

</View>


<View style={styles.container1}>
  <Text style={styles.text1}>Halfs</Text>
  <Text></Text>
</View>

</ScrollView>


    <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>


     {/* <View horizontal style={styles.container1}>
      <Text style={styles.text1}>navbar</Text>
      <Text></Text>
    </View> */}
   
    

    <View style={styles.container2}>
      <Text style={styles.text2}>Thirds</Text>
    </View>

    <View style={styles.container3}>
    <Text style={styles.text3}>Thirds</Text>
    </View>
   
    <View style={styles.container5}>
      <Text style={styles.text2}>Thirds</Text>
    </View>


 
    



    </ScrollView>

   
   
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>


     {/* <View horizontal style={styles.container1}>
      <Text style={styles.text1}>navbar</Text>
      <Text></Text>
    </View> */}
   
    

    <View style={styles.container9}>
      <Text style={styles.text2}>Fourths</Text>
    </View>

    <View style={styles.container8}>
    <Text style={styles.text3}>Fourths</Text>
    </View>
   
    <View style={styles.container7}>
      <Text style={styles.text2}>Fourths</Text>
    </View>
    <View style={styles.container10}>
    <Text style={styles.text3}>Fourths</Text>
    </View>


 
    



    </ScrollView>

    
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>


     {/* <View horizontal style={styles.container1}>
      <Text style={styles.text1}>navbar</Text>
      <Text></Text>
    </View> */}
   
    

    <View style={styles.container13}>
      <Text style={styles.text2}>Fifths</Text>
    </View>

    <View style={styles.container11}>
    <Text style={styles.text3}>Fifths</Text>
    </View>
   
    <View style={styles.container12}>
      <Text style={styles.text2}>Fifths</Text>
    </View>
    <View style={styles.container14}>
    <Text style={styles.text3}>Fifths</Text>
    </View>
    <View style={styles.container15}>
    <Text style={styles.text3}>Fifths</Text>
    </View>


 
    



    </ScrollView>
 

    </ScrollView>
    <View style={styles.container22}>
      <Text style={styles.text2}>Second Section</Text>
    </View>
</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  
  },
  container1: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    width: 206,
    height: 335,
  },
  text1: {
    fontSize: 30,
    color:"white"
  },
  
  container2: {
    height: 250,
    backgroundColor: '#f55607',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    width: 137.333333333
  },
  container22: {
    height: 60,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    width: 412
  },
  container25: {
    height: "100%",

  },


  container15: {
    height: "100%",
    width: 300,
    justifyContent: "center"
   
  },
  text2: {
    fontSize: 10,
    color:"red"
  },
  container3: {
  
    backgroundColor: '#90f091',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    width: 137.333333333,
    height: 250,
  
  },
  container5: {
  
    backgroundColor: '#7a3b5f',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    width: 137.333333333,
    height: 250,
  
  },
  text3: {
    fontSize: 10,
    color:"white"
  },
  container4: {

    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    width: 206,
    height: 335,
  },
  container6: {

    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    width: 412,
    height:565,
  },

  text6: {
    fontSize: 70,
    color:"white"
  },
  text4: {
    fontSize: 30,
    color:"red"
  },
  container7: {
  
    backgroundColor: 'silver',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    width: 103,
    height: 250,
  
  },
  container8: {
  
    backgroundColor: '#6fe8ca',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    width: 103,
    height: 250,
  
  },
  container9: {
  
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    width: 103,
    height: 250,
  
  },
  container10: {
  
    backgroundColor: '#0018a1',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    width: 103,
    height: 250,
  
  },
  container11: {
  
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    width: 82.4,
    height: 250,
  
  
  },container12: {
  
    backgroundColor: 'brown',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    width: 82.4,
    height: 250,
  
  },container13: {
  
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    width: 82.4,
    height: 250,
  
  },container14: {
  
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    width: 82.4,
    height: 250,
  
  },container15: {
  
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    width: 82.4,
    height: 250,
  
  },
});