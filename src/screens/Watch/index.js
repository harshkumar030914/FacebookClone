import React, { useState, useCallback } from "react";
import { FlatList, SafeAreaView, View, Text } from "react-native";
import { Videos } from "../../Common/constant";
import { myStyles } from "../../Common/styles";
import Menu from "../../components/Menu";
import Post from "../Home/components/Post";
const Watch = () => {
    const [focused, setfocused] = useState(1)
    const _onViewableItemsChanged = useCallback(({ viewableItems, changed }) => {
        setfocused(changed[0].index)
    }, []);
    const _viewabilityConfig = {
        itemVisiblePercentThreshold: 50
    }
    const RenderItem = ({ item, index }) => {
        return (
            <>
                <Post video={item.url}
                    paused={focused == item.id ? false : true}
                />
            </>
        )
    }
    return (
        <>
            <SafeAreaView style={myStyles.background}>
                <View>
                    <Menu watch={true} />
                </View>
                <View style={[myStyles.margin_10, myStyles.mv_10]}>
                    <Text style={myStyles.txt_h1}>{'Watch'}</Text>
                </View>

                <FlatList
                    data={Videos}
                    onViewableItemsChanged={_onViewableItemsChanged}
                    viewabilityConfig={_viewabilityConfig}
                    renderItem={RenderItem}
                />


            </SafeAreaView>
        </>
    )
}
export default Watch;