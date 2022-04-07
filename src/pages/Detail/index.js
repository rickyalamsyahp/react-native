import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {BBK, GlobeTest, background, Logo} from '../../assets';
import {Button, Gap} from '../../components';

const Detail = ({route, navigation}) => {
    const {name, image, desc} = route.params;
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       await fetch(`http://18.221.132.15:7000/foods`, {
//         method: 'GET',
//       })
//         .then(response => response.json())
//         .then(responseJson => {
//           //  console.log(responseJson['image']);
//           setData(responseJson);
//           setLoading(false);
//         });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return 
//   loading ? (
//     <Text>Loading</Text>
//   ) : 
  return (
    <ScrollView>
      <View>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: `${image}`,
            }}
          />
          <Text style={{fontWeight: 'bold'}}>{name}</Text>
        </View>
        <View
          style={{
            padding: 10,
          }}>
          <Text style={{fontWeight: 'bold'}}>Bahan-Bahan:</Text>
          <Text>{desc}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  tinyLogo: {
    width: 200,
    height: 200,
    borderRadius:200
  },
  text: {
    position: 'absolute',
    right: 0,
    color: 'black',
    fontSize: 20,
    backgroundColor: 'grey',
    width: '100%',
    bottom: 2,
  },
});
