import React, { useEffect } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { myStyles } from "../../Common/styles";
import ActiveBar from "./component/ActiveBar";
import Header from "./component/Header";
import SearchBar from "./component/Searchbar";
import { Friend_request_list } from "../../Common/constant";
import Chatbox from "./component/Chatbox";
const Chat = () => {
    const Render_Item = ({ item }) => {
        return (
            <>
                <ActiveBar name={item.name} image={item.image} />
            </>
        )
    }
    const Chat_Item = ({ item }) => {
        return (
            <>
                <Chatbox image={item.image} name={item.name} />
            </>
        )
    }
    return (
        <>
            <SafeAreaView style={myStyles.background}>
                <View>
                    <Header />
                    <SearchBar />
                </View>
                <View>
                    <View style={myStyles.row2}>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            data={Friend_request_list}
                            renderItem={Render_Item}
                        />
                    </View>
                </View>
                <FlatList
                    data={Friend_request_list}
                    renderItem={Chat_Item}
                />
            </SafeAreaView>
        </>
    )
}
export default Chat;
