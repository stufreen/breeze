import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Navigation } from 'react-native-navigation';
import LocationSearchPanel from '../components/LocationSearchPanel';

class LocationSearch extends Component {
  static options() {
    return {
      topBar: {
        visible: false,
        height: 0,
      },
      layout: {
        backgroundColor: 'rgb(0, 4, 43)',
      },
      statusBar: {
        style: 'light',
        backgroundColor: 'transparent',
        drawBehind: true,
      },
    };
  }

  onPressBack = () => {
    const { componentId } = this.props;
    Navigation.pop(componentId);
  }

  render() {
    return (
      <LocationSearchPanel
        onPressBack={this.onPressBack}
      />
    );
  }
}

LocationSearch.propTypes = {
  componentId: PropTypes.string.isRequired,
};

export default LocationSearch;
