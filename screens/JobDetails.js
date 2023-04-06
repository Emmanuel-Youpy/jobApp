import { View, Text, ScrollView, RefreshControl } from 'react-native'
import React, { useState } from 'react'
import useFetch from '../hook/useFetch';
const JobDetails = ({route, navigation}) => {
  const { itemId,  } = route.params;
  const {data, error, isLoading, refetch}= useFetch('job-details', {job_id: itemId})

  const [refreshing, setRefreshing] = useState(false)
  const onRefresh =()=>{}

  return (
    <>
    <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
    </ScrollView>
    </>
  )
}

export default JobDetails