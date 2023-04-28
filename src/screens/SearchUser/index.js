import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  FlatList,
} from 'react-native';
import {myStyles} from '../../Common/styles';
import {ActivityIndicator} from 'react-native-paper';
import SearchBar from '../../components/SearchBar';
import UserBox from './component/UserBox';
import {debugLog} from '../../Common/common';
import {hitFindUserApi} from '../../config/api';
const SearchUser = () => {
  const [text, settext] = useState('');
  const [data, setdata] = useState([]);
  const [loader, setloader] = useState(true);
  const getItemLayout = (_, index) => ({
    length: 70,
    offset: 70 * index,
    index,
  });
  const _keyExtractor = (item, index) => index.toString();
  const CallSearchUser = e => {
    settext(e);
    const param = {
      query: e,
    };
    hitFindUserApi(param)
      .then(res => {
        if (res.status != 0) {
          setdata(res.results);
        }
      })
      .catch(err => {
        debugLog(err);
      });
  };
  const renderItem = useCallback(({item}) => {
    return (
      <>
        <UserBox />
      </>
    );
  }, []);
  return (
    <>
      <View style={myStyles.background}>
        <View>
          <SearchBar
            onChange={CallSearchUser}
            value={text}
            onClear={() => settext('')}
          />
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          getItemLayout={getItemLayout}
          keyExtractor={_keyExtractor}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  camera: {
    flex: 1,
  },
});

export default SearchUser;
