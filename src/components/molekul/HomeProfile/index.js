import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Char} from '../../../assets';
import {Gap} from '../../atoms';

const HomeProfile = ({profile}) => {
  return (
    <View style={styles.container}>
      <Image source={Char} style={styles.avatar} />
      <View style={{flexShrink: 1}}>
        <Text style={styles.name}>{profile.namaUser}</Text>
        <Text style={styles.profession}>{profile.namaRole}</Text>
      </View>
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  avatar: {width: 40, height: 40, borderRadius: 40 / 2, marginRight: 10},
  name: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  profession: {
    fontSize: 11,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
});
