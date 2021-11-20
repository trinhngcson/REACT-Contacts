import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import ContactListItem from '../../components/ContactListItem';
import {fetchContacts} from '../../utils/api'

const keyExtractor = ({ phone }) => phone;
const Contacts =() =>{
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect( () => {
        fetchContacts()
        .then(
            contacts => {
                setContacts(contacts);
                setLoading(false);
                setError(false);
            }
        )
        .catch(
            e => {
                console.log(e);
                setLoading(false);
                setError(true);
            }
        )
    })
    const contactsSorted = contacts.sort((a, b)=>a.name.localeCompare(b.name));

    const renderContact = ({item}) => {
        const {name,avatar, phone} = item;
        return <ContactListItem
                    name={name}
                    avatar={avatar}
                    phone={phone}
        />
    };
    return (
        <View style = {styles.container}>
            {loading && <ActivityIndicator color="blue" size = "large"/>}
            {error && <Text>Error...</Text>}
            {!loading && !error && (
                <FlatList
                    data = {contacts}
                    keyExtractor = {keyExtractor}
                    renderItem = {renderContact} 
                />
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'White',
        justifyContent: 'center',
        flex: 1,
    },
});
export default Contacts;