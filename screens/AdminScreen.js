import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
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
  const { importData, exportData, resetData } = props;

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={importData}>
        <Text style={[styles.button, styles.buttonGreen]}>Import data</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={exportData}>
        <Text style={[styles.button, styles.buttonBlue]}>Export data</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={resetData}>
        <Text style={[styles.button, styles.buttonRed]}>Reset data</Text>
      </TouchableHighlight>
    </View>
  );
};

Admin.navigationOptions = {
  title: 'Admin'
};

Admin.propTypes = {
  importData: PropTypes.func.isRequired,
  exportData: PropTypes.func.isRequired,
  resetData: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(null, mapDispatchToProps)(Admin);
