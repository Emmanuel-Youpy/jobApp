import React, { useState } from "react";
import { FlatList } from "react-native";
import { View, Text, TextInput, Touchable, TouchableOpacity, Image } from "react-native";
import { icons, SIZES } from "../../../constants";
import { useNavigation } from '@react-navigation/native';
import styles from "./welcome.style";

const jobTypes=["Full-Time", "Part-time", "Contractor"]

const Welcome = () => {
  const navigation = useNavigation();
  const [activeJobType, setActiveJobType] = useState('Full-time')
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Welcome</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} value="" onChange={()=>{}} placeholder="Search Jobs"/>
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
          <Image source={icons.search} resizeMode="contain" style={styles.searchBtnImage}/>
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList data={jobTypes} renderItem={({item})=>(
          <TouchableOpacity style={styles.tab(activeJobType, item)} onPress={()=>{
            navigation.navigate('Search', {item})
          }}>
            
            <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item}
        contentContainerStyle={{columnGap: SIZES.small}}
        horizontal/>

      </View>
    </View>
  );
};

export default Welcome;
