import React, {useState, useEffect, cloneElement} from "react";
import { StyleSheet,View, Text } from "react-native";
import ContactThumbnail from '../../components/ContactThumbnail';
import DetailListItem from '../../components/DetailListItem';
import {fetchRandomContact} from '../../utils/api'
import colors from "../../utils/colors";

const Profile = () =>{
    const {contact} = route.params;
    const {avatar,name,email,phone,cell} = contact;
    return (
        <View style = {styles.container}>
            <View style = {styles.avatarSection}>
                <ContactThumbnail avatar={avatar} name = {name} phone={phone}></ContactThumbnail>
            </View>
            <View styles ={styles.detailsSection}>
                <DetailListItem icon = 'mail' title ="Email" subtitle ={email}></DetailListItem>
                <DetailListItem icon = 'phone' title ="Work" subtitle ={phone}></DetailListItem>
                <DetailListItem icon = 'smartphone' title ="Personal" subtitle ={cell}></DetailListItem>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    avatarSection: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.blue,
    },
    detailsSection: {
        flex:1,
        backgroundColor: 'white',
    },
});
export default Profile;