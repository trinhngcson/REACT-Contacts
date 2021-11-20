import React,{useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import {fetchContacts} from '../../utils/api';
import ContactThumbnail from '../../components/ContactThumbnail';
import Contacts from '../../2/screens/Contacts';
const ketExtractor = ({phone}) => phone;
const Favorites = ({navigator}) => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(()=>{
        fetchContacts()
        .then(
            contacts => {
                setContacts(contacts);
                setLoading(false);
                setError(false);
            }
        )
        .catch(
            e =>{
                setLoading(false);
                setError(true);
            }
        )
    })
    const renderFavoriteThumbnail = ({item}) => {
        const {avatar} = item;
        return (
            <ContactThumbnail>
                avatar = {avatar}
                onPress = {() => navigation.navigate('Profile', {contact:item})}
            </ContactThumbnail>
        );
    };

    const favorites = contacts.filter(contact => contact.favorite);

    return (
        <View style = {styles.container}>
            {loading && <ActivityIndicator size ="large"></ActivityIndicator>}
            {error && <Text>Error...</Text>}
            {!loading && !error && (
                <FlatList>
                    data = {favorites}
                    keyExtractor = {ketExtractor}
                    numColumns ={3}
                    contentContainerStyle = {styles.list}
                    renderItem={renderFavoriteThumbnail}
                </FlatList>
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        flex: 1,
    },
    list: {
        alignContent: 'center',
    },
});

export default Favorites;
