import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Card from "../Card/Card";
import styles from "./prescriptionFlatListStyle";
import cam from '../../../assets/icons/camera.svg';
import calander from '../../../assets/icons/calander.svg';
import SvgUri from "react-native-svg-uri";
import moment from "moment";

const PrescriptionFlatList = (props) => {

    const addNew = () => {
        props.navigation.push('Prescription')
    }

    const Item = ({ id, image, date, description }) => (
        <View style={styles.item}>
            <Card radius={10}>
                <View style={styles.itemcontainer}>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: image}} style={styles.imageContainer} />
                    </View>
                    <View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <SvgUri source={calander} />
                            <Text style={styles.dateLabel}>{moment(date).format('DD MMM YYYY')}</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={styles.drLabel}>{description}</Text>
                        </View>
                    </View>
                </View>
            </Card>
            
        </View>
    );

    const renderItem = ({ item }) => {
        return(
        <Item id={item.id} image={item.image.uri} date={item.date} description={item.description} rating={item.rating} count={item.count} />
    )};
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatlist}
                // ItemSeparatorComponent={() => <View style={styles.separator} />}
                data={props.data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
            />
            <TouchableOpacity style={styles.floating} onPress={addNew}>
                <SvgUri source={cam} />
            </TouchableOpacity>
        </View>
    );
};

export default PrescriptionFlatList;