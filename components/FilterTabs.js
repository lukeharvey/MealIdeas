import React from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  StyleSheet
} from 'react-native';

import TabButton from '../components/TabButton';

const styles = StyleSheet.create({
  tabs: {
    marginHorizontal: 12,
    marginVertical: 8,
    flexGrow: 0
  }
});

const Tabs = (props) => {
  const { filter, setFilter } = props;

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.tabs}
    >
      <TabButton filter={filter} setFilter={setFilter} text="All" />
      <TabButton filter={filter} setFilter={setFilter} text="Vegetarian" />
      <TabButton filter={filter} setFilter={setFilter} text="Meat" />
      <TabButton filter={filter} setFilter={setFilter} text="Brunch" />
      <TabButton filter={filter} setFilter={setFilter} text="Lunch" />
      <TabButton filter={filter} setFilter={setFilter} text="Dinner" />
    </ScrollView>
  );
};

Tabs.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func.isRequired
};

Tabs.defaultProps = {
  filter: ''
};

export default Tabs;
