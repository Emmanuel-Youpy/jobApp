import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "./PopularJobCard";

import styles from "./popularjobs.style";

const Popularjobs = () => {
  const isLoading = false;
  const error = false;
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
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList data={[1,2,3,4]} 
          renderItem={({item})=>(
            <PopularJobCard item={item}/>
          )}
          keyExtractor={item => item?.job_id}
          contentContainerStyle={{columnGap:SIZES.medium}}
          horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
