import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard"
import styles from "./popularjobs.style";
import useFetch from  '../../../hook/useFetch'
import { useNavigation } from '@react-navigation/native';






const Popularjobs = () => {
  const navigation = useNavigation();

  useEffect(() => { Popularjobs}, [])
  
  const {isLoading, error, data} = useFetch('search', {
    query:'React developer', num_pages:1,
  })
  console.log(data)

  const [selectedJob, setSelectedJob] = useState()

  const handleCardPress=(item)=>{
    
      navigation.navigate('JobDetails', {itemId:item?.job_id})
    
  }
  return (
  
    <View style={styles.container}>
            <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) 
        : error ? (
          <Text>Something went wrong oo</Text>
        )
         : (
          <FlatList
            data={data}
            renderItem={({ item }) => <PopularJobCard item={item} handleCardPress={handleCardPress}/>}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
