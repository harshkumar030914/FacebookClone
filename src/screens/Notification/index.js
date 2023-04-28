import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { myStyles } from "../../Common/styles";
import CustomPart from "../../components/CustomPart";
import Menu from "../../components/Menu";
import NotificationBox from "./components/NotificationBox";
const Notification = () => {
    return (
        <>
            <SafeAreaView style={myStyles.background}>
                <View>
                    <Menu notification={true} />
                </View>
                <View>
                    <CustomPart
                        text={'Notifications'}
                    />
                </View>
                <ScrollView>
                    <NotificationBox />
                    <NotificationBox />
                    <NotificationBox />
                    <NotificationBox />
                    <NotificationBox />
                    <NotificationBox />
                    <NotificationBox />
                    <NotificationBox />
                    <NotificationBox />
                    <NotificationBox />
                    <NotificationBox />
                </ScrollView>
            </SafeAreaView>
        </>
    )
}
export default Notification;