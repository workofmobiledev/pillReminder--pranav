
import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import SvgUri from "react-native-svg-uri";
import { connect } from "react-redux";
import styles from "./PrescriptionStyle";
import calander from "../../../assets/icons/calander.svg";
import image from "../../../assets/icons/image.svg";
import Card from "../../Components/Card/Card";
import back from "../../../assets/icons/backarrow.svg";
import { launchImageLibrary } from 'react-native-image-picker';
import { addPrescription } from "../../store/Action/prescriptoinActions";
import moment from 'moment';
import { standardGapMedium } from "../../common/style/Standard";

class PrescriptionScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickerVisible: true,
      date: new Date(),
      description: ""
    };
  }

  componentDidMount() {
    const { navigation } = this.props
    navigation.setOptions({
      title: 'Add Prescription',
      headerLeft: () => <TouchableOpacity  style={{margin: standardGapMedium}} onPress={() => navigation.goBack()}><SvgUri source={back} /></TouchableOpacity>
    })
  }

  onChangeText(text) {
    this.setState({
      ...this.state,
      description: text
    })
  }

  onChange(event, date) {
    this.setState({
      ...this.state,
      // pickerVisible: false,
      date: date
    })
  }

  onImageUpload() {
    const options = {
      title: 'Select Prescription',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        this.setState({
          ...this.state,
          image: response,
        });
      }
    });
  }

  onsubmit() {
    this.props.addNew({
      date: this.state.date,
      image: this.state.image,
      description: this.state.description
    })
    this.props.navigation.navigate('DOCTORS')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <View style={styles.formContainer}>
            <Text style={styles.title}>Date *</Text>
            <TouchableOpacity onPress={() => this.setState({ ...this.state, pickerVisible: true })} style={styles.datePicker}>
              <Text style={styles.date}>{moment(new Date()).format('DD MMM YYYY')}</Text>
              <SvgUri source={calander} />
            </TouchableOpacity>
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.title}>Description</Text>
            <TextInput
              style={styles.inputField}
              onChangeText={text => this.onChangeText(text)}
              value={this.state.description}
              placeholder="Enter Description"
            />
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.title}>Add Prescription</Text>
            <TouchableOpacity style={styles.uploadButton} onPress={() => this.onImageUpload()}>
              <Card radius={10}>
                <View style={styles.button}>
                  <SvgUri source={image} />
                </View>
              </Card>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={() => this.onsubmit()} style={styles.submitButton}>
          <Text style={styles.submitButtonLabel}>SAVE</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    precriptions: state
  }
}

const mapDispatchToProps = (dispatch /*, ownProps*/) => {
  return {
    addNew: (data) => dispatch(addPrescription(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrescriptionScreen);