import React, { useCallback, useMemo } from "react";
import { Dimensions, FlatList, SafeAreaView, View } from "react-native";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Connection from "./components/Connection";
import SearchBar from "./components/SearchBar";
import Story from "./components/Story";
import { Posts, story } from "../../Common/constant";
import Colors from "../../Common/Colors";
import Post from "./components/Post";
import { myStyles } from "../../Common/styles";
import { heightPixel } from "../../config/Normalize";
import { useSelector } from "react-redux";
import { FlashList } from "@shopify/flash-list";
import { useNavigation } from "@react-navigation/native";
const post_height = Dimensions.get("window").height;
const Home = () => {
  const navigation = useNavigation();
  const STORY_HEIGHT = heightPixel(140);
  const getStoryLayout = useCallback((data, index) => ({
    length: STORY_HEIGHT,
    offset: STORY_HEIGHT * index,
    index,
  }));
  const Render_Story_List = React.memo(({ item }) => {
    const memoizedItem = useMemo(
      () => <Render_Story item={item.item} />,
      [item]
    );
    return memoizedItem;
  });
  const RenderItem = React.memo(({ item }) => {
    const memoizedItem = useMemo(() => <Post_Item item={item.item} />, [item]);
    return memoizedItem;
  });
  const keyExtractor = useCallback((_, index) => {
    return `post-${index}`;
  }, []);
  const POST_HEIGHT = post_height / 1.7;
  const getPOSTLayout = useCallback((data, index) => ({
    length: POST_HEIGHT,
    offset: POST_HEIGHT * index,
    index,
  }));

  const Render_Story = ({ item }) => {
    return (
      <>
        <Story user_name={item.user} uri={item.img} />
      </>
    );
  };

  const Post_Item = ({ item }) => {
    return (
      <>
        <Post post_pic={item.post} />
      </>
    );
  };
  const ListHeaderComponent = () => {
    return (
      <>
        <View>
          <SearchBar
            onPress={() => {
              navigation.navigate("UploadPostScreen");
            }}
          />
          <Connection />
        </View>
        <View style={{ flexDirection: "row" }}>
          <FlatList
            data={story}
            renderItem={(item, _) => <Render_Story_List item={item} />}
            keyExtractor={keyExtractor}
            horizontal
            showsHorizontalScrollIndicator={false}
            getItemLayout={getStoryLayout}
          />
        </View>
      </>
    );
  };

  return (
    <>
      <SafeAreaView
        style={[myStyles.coulmn, { backgroundColor: Colors.background }]}
      >
        <View>
          <Header />
          <Menu home={true} />
        </View>
        <FlashList
          ListHeaderComponent={ListHeaderComponent}
          data={Posts}
          renderItem={(item, _) => <RenderItem item={item} />}
          keyExtractor={keyExtractor}
          vertical
          getItemLayout={getPOSTLayout}
          showsVerticalScrollIndicator={false}
          maxToRenderPerBatch={5}
          initialNumToRender={4}
          estimatedItemSize={Dimensions.get("window").height / 1.7}
        />
      </SafeAreaView>
    </>
  );
};
export default Home;
