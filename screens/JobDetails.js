import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import useFetch from "../hook/useFetch";
import { COLORS, SIZES } from "../constants";
import Company from "../components/jobdetails/company/Company";
import Tabs from "../components/jobdetails/tabs/Tabs";
import Specifics from "../components/jobdetails/specifics/Specifics";
import About from "../components/jobdetails/about/About";
import Footer from "../components/jobdetails/footer/Footer";


const tabs = ["About", "Qualifications", "Responsibilities"]

const JobDetails = ({ route, navigation }) => {
  const { itemId } = route.params;
  const { data, error, isLoading, refetch } = useFetch("job-details", {
    job_id: itemId,
  });

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {};
  const [activeTab, setActiveTab] = useState(tabs[0])

  const displayTabContent =()=>{
    switch(activeTab){
      case "Qualifications":
        return <Specifics title="Qualifications" points={data[0].job_highlights?.Qualifications ?? ['N/A']}/>
        break;
        case "About" :
          return <About info={data[0].job_description ?? "No data provided"}/>
          case "Responsibilities":
            return <Specifics title="Responsibilities" points={data[0].job_highlights?.Responsibilities ?? ['N/A']}/>
            default:
              break;
    }
  }

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : data.length === 0 ? (
          <Text>No data</Text>
        ) : (
          <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
            <Company
              companyLogo={data[0].employer_logo}
              jobTitle={data[0].job_title}
              companyName={data[0].employer_name}
              location={data[0].job_country}
            />


            <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab}/>
            {displayTabContent()}
          </View>
        )}
      </ScrollView>
      <Footer url={data[0]?.job_google_link ?? "https://google.com"}/>
    </>
  );
};

export default JobDetails;
