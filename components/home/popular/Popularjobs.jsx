import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { COLORS, SIZES } from "../../../constants";
// import PopularJobCard from "./PopularJobCard";
import PopularJobCard from "../../common/cards/popular/PopularJobCard"
import styles from "./popularjobs.style";
import useFetch from  '../../../hook/useFetch'





const Popularjobs = () => {
  
  const {isLoading, error, data} = useFetch('search', {
    query:'React developer', num_pages:1,
  })
  console.log(data)

  const [selectedJob, setSelectedJob] = useState()

  const handleCardPress=(item)=>{

  }
  return (
  
    <View style={styles.container}>
            <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) 
        // : error ? (
        //   <Text>Something went wrong oo</Text>
        // )
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
