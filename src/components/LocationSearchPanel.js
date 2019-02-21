import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import {
  Box,
  ScrollBox,
  Script,
  StyledTextInput,
} from './design-system';
import BackButton from './BackButton';
import LocationResultList from './LocationResultList';
import { lookupLocationAndFetchWeather } from '../common/location/location.actions';
import { autoComplete } from '../services/geocode';

class LocationSearchPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      resultList: [],
      sessionID: uuid(),
    };
  }

  handleTyping = (newText) => {
    this.setState({
      input: newText,
    });
    if (newText.length > 2) {
      this.search();
    } else {
      this.setState({
        resultList: [],
      });
    }
  }

  handlePlaceSelect = (place) => {
    const { onPressBack, lookupLocationAndFetchWeather } = this.props;
    const { sessionID } = this.state;
    onPressBack();
    lookupLocationAndFetchWeather(place.place_id, sessionID);
  }

  search = () => {
    const { input, sessionID } = this.state;
    autoComplete(input, sessionID)
      .then((results) => {
        this.setState({
          resultList: results,
        });
      });
  }

  render() {
    const { onPressBack } = this.props;
    const { input, resultList } = this.state;
    return (
      <Box flex={1}>
        <ScrollBox bg="secondary" flex={1}>
          <Box pt={5} px={3} width="100%">
            <Script header fontSize={3} textAlign="center" mb={4}>Search Location</Script>
            <StyledTextInput
              bg="tertiary"
              color="accent"
              p={3}
              fontSize={2}
              editable
              clearTextOnFocus
              autoFocus
              autoCorrect={false}
              selectionColor="rgba(255, 255, 255, 0.8)"
              onChangeText={this.handleTyping}
              value={input}
            />
            {resultList && (
              <LocationResultList
                places={resultList}
                onSelectPlace={this.handlePlaceSelect}
              />
            )}
          </Box>
        </ScrollBox>
        <Box position="absolute" mt={4} ml={3}>
          <BackButton
            onPress={onPressBack}
          />
        </Box>
      </Box>
    );
  }
}

LocationSearchPanel.propTypes = {
  onPressBack: PropTypes.func.isRequired,
  lookupLocationAndFetchWeather: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  lookupLocationAndFetchWeather,
};

const ConnectedLocationSearchPanel = connect(null, mapDispatchToProps)(LocationSearchPanel);

export default ConnectedLocationSearchPanel;
