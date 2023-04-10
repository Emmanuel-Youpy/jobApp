import {  ActivityIndicator, FlatList, Image, TouchableOpacity, View , Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {ScreenHeaderBtn} from '../../components/common/header/ScreenHeaderBtn'
import { icons, SIZES } from '../../constants'
import styles from '../../styles/search'
// import styles from '../../components/common/'

const Search = ({route}) => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchLoader, setSearchLoader] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [page, setPage] = useState(1);


  const handleSearch = async () => {
    setSearchLoader(true);
    setSearchResult([])

    try {
        const options = {
            method: "GET",
            url: `https://jsearch.p.rapidapi.com/search`,
            headers: {
                "X-RapidAPI-Key": '2de72cce39msh10c7568b3a36e1cp146e21jsne8f02b9ddd74',
                "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
            },
            params: {
                query: params.id,
                page: page.toString(),
            },
        };

        const response = await axios.request(options);
        setSearchResult(response.data.data);
    } catch (error) {
        setSearchError(error);
        console.log(error);
    } finally {
        setSearchLoader(false);
    }
};

const handlePagination = (direction) => {
  if (direction === 'left' && page > 1) {
      setPage(page - 1)
      handleSearch()
  } else if (direction === 'right') {
      setPage(page + 1)
      handleSearch()
  }
}

useEffect(() => {
  handleSearch()
}, [])

const { searchTerm } = route.params;


  return (
    <View>
      <FlatList
        data={searchResult}
        renderItem={({ item }) => (
            <NearbyJobCard
                job={item}
                handleNavigate={() => 
                navigation.navigate("JobDetails", {searchTerm:item.job_id})}
            />
        )}
        keyExtractor={(item) => item.job_id}
        contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
        ListHeaderComponent={()=>(
          <>
          <View style={styles.container}>
              <Text style={styles.searchTitle}>{searchTerm}</Text>
              <Text style={styles.noOfSearchedJobs}>Job Opportunities</Text>
          </View>
          <View style={styles.footerContainer}>
              {searchLoader ? (
                  <ActivityIndicator size='large' color={COLORS.primary} />
              ) : searchError && (
                  <Text>Search data not available</Text>
              )}
          </View>
      </>
        )}
        ListFooterComponent={() => (
          <View style={styles.footerContainer}>
              <TouchableOpacity
                  style={styles.paginationButton}
                  onPress={() => handlePagination('left')}
              >
                  <Image
                      source={icons.chevronLeft}
                      style={styles.paginationImage}
                      resizeMode="contain"
                  />
              </TouchableOpacity>
              <View style={styles.paginationTextBox}>
                  <Text style={styles.paginationText}>{page}</Text>
              </View>
              <TouchableOpacity
                  style={styles.paginationButton}
                  onPress={() => handlePagination('right')}
              >
                  <Image
                      source={icons.chevronRight}
                      style={styles.paginationImage}
                      resizeMode="contain"
                  />
              </TouchableOpacity>
          </View>
      )}


      
      />
    </View>
  )
}

export default Search