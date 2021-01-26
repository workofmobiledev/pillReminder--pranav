import React, { Component } from "react";
import { View, Text } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import SvgUri from "react-native-svg-uri";
import { connect } from "react-redux";
import color from "../../common/style/color";
import {  standardGapMedium } from "../../common/style/Standard";
import DoctorsFlatList from "../../Components/doctorsFlatList/doctorsFlatList";
import PrescriptionFlatList from "../../Components/prescriptionFlatlist/prescriptionFlatList";
import styles from "./DoctorsStyle";
import back from '../../../assets/icons/backarrow.svg'

class TabViewScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  componentDidMount() {
    const { navigation } = this.props
    navigation.setOptions({
      headerLeft: () => <TouchableOpacity  style={{margin: standardGapMedium}} onPress={() => navigation.goBack()}><SvgUri source={back} /></TouchableOpacity>
    })
  }

  changeTabs(tabIndex) {
    this.setState({
      activeTab: tabIndex
    });
  }

  render() {

    const DATA = [
      {
        id: '0',
        name: 'Jonathan L. Glashow, MD',
        degree: "MBBS",
        department: "General Doctor",
        rating: 5.0,
        count: 45
      },
      {
        id: '1',
        name: 'Dr. Richard W. Westreich',
        degree: "MBBS",
        department: "General Doctor",
        rating: 5.0,
        count: 50
      },
      {
        id: '2',
        name: 'Dr. Lisa Hye In Nam',
        degree: "MBBS",
        department: "General Doctor",
        rating: 5.0,
        count: 65
      },
      {
        id: '3',
        name: 'Dr. Ken Moadel ',
        degree: "MBBS",
        department: "General Doctor",
        rating: 5.0,
        count: 30
      },
      {
        id: '4',
        name: 'Dr. Paul M. Brisson',
        degree: "MBBS",
        department: "General Doctor",
        rating: 5.0,
        count: 15
      },
      {
        id: '5',
        name: 'Dr. Paul M. Brisson',
        degree: "MBBS",
        department: "General Doctor",
        rating: 5.0,
        count: 15
      },
    ];

    return (
      <View style={styles.container}>
        <View style={styles.tabsContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} alwaysBounceVertical={false}>
            <TouchableOpacity onPress={() => this.changeTabs(0)} activeOpacity={0.7}
              style={[styles.tabs, { backgroundColor: this.state.activeTab === 0 ? color.primaryColor : color.secondaryColor }]}>
              <Text
                style={{
                  color: this.state.activeTab === 0 ? color.white : color.fontColor,
                  fontWeight: this.state.activeTab === 0 ? "bold" : "normal"
                }}>Explore</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.changeTabs(1)} activeOpacity={0.7}
              style={[styles.tabs, { backgroundColor: this.state.activeTab === 1 ? color.primaryColor : color.secondaryColor }]}>
              <Text
                style={{
                  color: this.state.activeTab === 1 ? color.white : color.fontColor,
                  fontWeight: this.state.activeTab === 1 ? "bold" : "normal"
                }}>Prescription</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.changeTabs(2)} activeOpacity={0.7}
              style={[styles.tabs, { backgroundColor: this.state.activeTab === 2 ? color.primaryColor : color.secondaryColor }]}>
              <Text
                style={{
                  color: this.state.activeTab === 2 ? color.white : color.fontColor,
                  fontWeight: this.state.activeTab === 2 ? "bold" : "normal"
                }}>Appointments</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={styles.contentContainer}>
          {this.state.activeTab === 0
            ? <DoctorsFlatList data={DATA} />
            : this.state.activeTab === 1
              ? <PrescriptionFlatList data={this.props.precriptions} {...this.props}/>
              : <Text>2</Text>}
        </View>
      </View>
    );
  }
};

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    precriptions: state.DoctorReducer.precriptions
  }
}

export default connect(mapStateToProps)(TabViewScreen);