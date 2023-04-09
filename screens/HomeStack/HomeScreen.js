import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Button } from "react-native";
import Welcome from "../../components/home/welcome/Welcome";
import Popularjobs from "../../components/home/popular/Popularjobs";
import Nearbyjobs from "../../components/home/nearby/Nearbyjobs";
import { COLORS } from "../../constants";
import { ActivityIndicator } from "react-native";

const HomeScreen = ({ navigation }) => {
  const [isReady, setIsReady] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ padding: 10 }}>
        <Welcome
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleClick={() => {
            if (searchTerm) {
              navigation.navigate("Search", {searchTerm});
            }
          }}
        />
        <Popularjobs />
        {isReady ? <Nearbyjobs /> : <Text>...</Text>}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
