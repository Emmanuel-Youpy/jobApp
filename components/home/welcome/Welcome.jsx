import React, { useState } from "react";
import { FlatList } from "react-native";
import { View, Text, TextInput, Touchable, TouchableOpacity, Image } from "react-native";
import { icons } from "../../../constants";

import styles from "./welcome.style";

const jobTypes=["Full-Time", "Part-time", "Contractor"]

const Welcome = () => {
  const [activeJobType, setActiveJobType] = useState('Full-time')
  return (
    <View style={{padding:10}}>
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
          <TouchableOpacity style={styles.tab(activeJobType, item)}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}/>

      </View>
    </View>
  );
};

export default Welcome;
