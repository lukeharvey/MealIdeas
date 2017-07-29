import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
  tab: {
    backgroundColor: 'whitesmoke',
    borderRadius: 40,
    marginHorizontal: 4,
    paddingHorizontal: 16,
    paddingVertical: 12,
    overflow: 'hidden'
  },
  tabSelected: {
    backgroundColor: 'lightblue',
    borderRadius: 40,
    marginHorizontal: 4,
    paddingHorizontal: 16,
    paddingVertical: 12,
    overflow: 'hidden'
  },
  tabText: {
    fontWeight: '600',
    textAlign: 'center'
  }
});

const TabButton = (props) => {
  const { filter, setFilter, text } = props;
  const filterText = text === 'All' ? '' : text;

  return (
    <TouchableHighlight
      style={filter === text ? styles.tabSelected : styles.tab}
      onPress={() => setFilter(filterText)}
    >
      <Text style={styles.tabText}>{text}</Text>
    </TouchableHighlight>
  );
};

TabButton.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func.isRequired,
  text: PropTypes.string
};

TabButton.defaultProps = {
  filter: '',
  text: ''
};

export default TabButton;
