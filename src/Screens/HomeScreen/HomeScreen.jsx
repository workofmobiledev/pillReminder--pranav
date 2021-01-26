
import React, { Component } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import styles from "./HomeStyle";

class HomeScreen extends Component {

  render(){
    return (
      <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('DOCTORS')}>
          <Text>Clik here to go Tab View</Text>
          </TouchableOpacity>
      </View>
    );
  }
};

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    doc: state
  }
}

export default connect(mapStateToProps)(HomeScreen);