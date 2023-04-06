import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { COLORS, SIZES } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard"
import styles from "./nearbyjobs.style";
import useFetch from  '../../../hook/useFetch'
import { useNavigation } from '@react-navigation/native';



const Nearbyjobs = () => {
  // useEffect(() => { }, [Nearbyjobs])
  
  const navigation = useNavigation();

  const {isLoading, error, data} = useFetch('search', {
    query:'React developer', num_pages:1,
  })
  // console.log(data)
  return (
  
    <View style={styles.container}>
            <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        )
        //  : error ? (
        //   <Text>Something went wrong</Text>
        // ) 
        : (
         data?.map((job) =>(
          <NearbyJobCard job={job} key={`nearby-job-${job?.job_id}`} handleNavigate={()=>{
            navigation.navigate('JobDetails', {itemId:job?.job_id})
          }} />
          
         ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
