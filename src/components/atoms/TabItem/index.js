import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  ViewList,
  ViewListActive,
  ScannerActive,
  Scanner,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'ScanMasuk') {
      return active ? <ScannerActive /> : <Scanner />;
    }
    if (title === 'ScanKeluar') {
      return active ? <ScannerActive /> : <Scanner />;
    }
    if (title === 'Reguler') {
      return active ? <ViewListActive /> : <ViewList />;
    }
    if (title === 'Sertifikasi') {
      return active ? <ViewListActive /> : <ViewList />;
    }
    if (title === 'Barang') {
      return active ? <ViewListActive /> : <ViewList />;
    }
    return <ViewList />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  text: active => ({
    fontSize: active ? 12 : 10,
    color: active ? colors.text.menuActive : colors.text.menuInactive,
    fontFamily: fonts.primary[600],
    marginTop: 6,
  }),
});
