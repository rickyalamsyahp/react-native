import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GlobeTest} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 3000);
  }, [navigation]);
  return (
    <View style={styles.page}>
      <GlobeTest style={{width: 100, height: 80}} />
      <Text style={styles.title}>Menu Makanan</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {fontSize: 20, fontWeight: '600', marginTop: 20},
});
