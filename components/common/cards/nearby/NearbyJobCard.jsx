import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { checkImageURL } from "../../../../utils";
import styles from "./nearbyjobcard.style";
import { SIZES } from "../../../../constants";

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity
      style={{
        // justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        flexDirection: "row",
        padding: 16,
        borderRadius: 12,
        backgroundColor: "#FFF",
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
        marginBottom:5
      }}
      onPress={handleNavigate}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(job.employer_logo)
              ? job.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={{ flex: 1, marginHorizontal: 12,  }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
          }}
          numberOfLines={1}
        >
          {job.job_title}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "gray",
            marginTop: 3,
            textTransform: "capitalize",
          }}
        >
          {job.job_employment_type}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
