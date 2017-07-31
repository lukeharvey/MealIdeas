import React from 'react';
import PropTypes from 'prop-types';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/actionCreators';

const styles = StyleSheet.create({
  button: {
    color: 'white',
    fontSize: 16,
    height: 50,
    lineHeight: 50,
    marginBottom: 12,
    marginHorizontal: 16,
    textAlign: 'center'
  },
  buttonGreen: {
    backgroundColor: 'mediumseagreen'
  },
  buttonBlue: {
    backgroundColor: 'dodgerblue'
  },
  buttonRed: {
    backgroundColor: 'red'
  },
  container: {
    backgroundColor: 'white',
    flex: 1
  }
});

const Admin = (props) => {
  const { importData, resetData } = props;

  function handleImport() {
    Alert.alert(
      'Are you sure?',
      'Your current data will be overwritten',
      [
        { text: 'OK', onPress: () => importData(), style: 'destructive' },
        { text: 'Cancel', style: 'cancel' }
      ]
    );
  }

  function handleReset() {
    Alert.alert(
      'Are you sure?',
      'Your data will be permanently deleted',
      [
        { text: 'OK', onPress: () => resetData(), style: 'destructive' },
        { text: 'Cancel', style: 'cancel' }
      ]
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleImport()}>
        <Text style={[styles.button, styles.buttonGreen]}>Import data</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleReset()}>
        <Text style={[styles.button, styles.buttonRed]}>Reset data</Text>
      </TouchableOpacity>
    </View>
  );
};

Admin.navigationOptions = {
  title: 'Admin'
};

Admin.propTypes = {
  importData: PropTypes.func.isRequired,
  // exportData: PropTypes.func.isRequired,
  resetData: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(null, mapDispatchToProps)(Admin);
