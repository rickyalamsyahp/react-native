import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {BBK, GlobeTest, background, Logo} from '../../assets';
import {Button, Gap} from '../../components';

const GetStarted = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      await fetch(`http://18.221.132.15:7000/foods`, {
        method: 'GET',
      })
        .then(response => response.json())
        .then(responseJson => {
          //  console.log(responseJson['image']);
          setData(responseJson);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return loading ? (
    <Text>Loading</Text>
  ) : (
    <ScrollView>
      <View style={styles.container}>
        {data.map(d => {
          return (
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Detail', {
                    name: d.name,
                    image: d.image,
                    desc: d.desc,
                  });
                  console.log(d.name);
                }}>
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri: `${d.image}`,
                  }}
                />
                <Text style={styles.text}>{d.name}</Text>
              </TouchableOpacity>
            </View>
          );
          // <Text>{d.name}</Text>
        })}
        {/* 
      <GlobeTest /> */}
      </View>
    </ScrollView>
  );
};

export default GetStarted;

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
