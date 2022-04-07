import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  GetStarted,
  Splash,
  Detail
} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';
// import TableBarang from '../pages/TableBarang';
import {getData} from '../utils';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// const MainApp = () => {
//   const [profile, setProfile] = useState({
//     namaUser: '',
//     jabatan: '',
//   });

//   useEffect(() => {
//     getUserData();
//   }, []);

//   const getUserData = () => {
//     getData('dataUser').then(res => {
//       setProfile(res);
//       console.log(res);
//     });
//   };

//   return (
//     <>
//     <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
//       <Tab.Screen name="Barang" component={TableBarang} />
//       {profile.namaRole === 'Layanan' ? (
//         <Tab.Screen name="Reguler" component={TablePengajuanReguler} />
//       ) : null}
//       <Tab.Screen name="Sertifikasi" component={Table}/>
//       <Tab.Screen name="ScanMasuk" component={ScanMasuk} />
//       <Tab.Screen name="ScanKeluar" component={ScanKeluar} />
//     </Tab.Navigator>
//     </>
//   );
// };

const Router = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </>
  );
};

export default Router;
