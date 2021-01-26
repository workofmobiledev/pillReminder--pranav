import React from "react";
import { View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Card from "../Card/Card";
import styles from "./doctorsFlatListStyle";
import doc from '../../../assets/icons/doctor.svg';
import stars from '../../../assets/icons/stars.svg';
import direction from '../../../assets/icons/direction.svg';
import call from '../../../assets/icons/call.svg';
import SvgUri from "react-native-svg-uri";
import { standardGapSmall } from "../../common/style/Standard";

const DoctorsFlatList = (props) => {

    const Item = ({ id, title, degree, department, rating, count }) => (
        <View style={{ paddingHorizontal: standardGapSmall + 2 }}>
            <Card radius={10}>
                <View style={styles.itemcontainer}>
                    <View style={styles.avatarContainer}>
                        <View style={styles.iconContainer}>
                            <SvgUri source={doc} />
                        </View>
                    </View>
                    <View style={styles.contentContainer}>
                        <Text style={styles.nameLabel}>{title}</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={styles.infoLabel}>{`${degree} | ${department}`}</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={styles.ratingLabel}>{rating.toFixed(1)}</Text>
                            <SvgUri source={stars} />
                            <Text style={styles.ratingLabel}>{` (${count})`}</Text>
                        </View>
                    </View>
                    <View style={styles.actionContainer}>
                        <View style={styles.actionButton}>
                            <SvgUri source={call} />
                        </View>
                        <View style={styles.actionButton}>
                            <SvgUri source={direction} />
                        </View>
                    </View>
                </View>
            </Card>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item id={item.id} title={item.name} degree={item.degree} department={item.department} rating={item.rating} count={item.count} />
    );
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatlist}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                data={props.data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default DoctorsFlatList;