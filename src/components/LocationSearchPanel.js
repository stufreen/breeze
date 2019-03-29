import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import {
  Box,
  ScrollBox,
  LScript,
  StyledTextInput,
} from './design-system';
import BackButton from './BackButton';
import LocationResultList from './LocationResultList';
import {
  lookupLocationAndFetchWeather,
  fetchAndSetUserCoords,
} from '../common/locations/locations.thunks';
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

  handleCurrentSelect = () => {
    const { onPressBack, fetchAndSetUserCoords } = this.props;
    onPressBack();
    fetchAndSetUserCoords();
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
        <ScrollBox bg="secondary" flex={1} contentContainerStyle={{ alignItems: 'center' }}>
          <Box pt={5} px={3} width="100%" maxWidth={480}>
            <LScript header fontSize={3} textAlign="center" mb={4} textKey="locationSearch:header" />
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
                onSelectCurrent={this.handleCurrentSelect}
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
  fetchAndSetUserCoords: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  lookupLocationAndFetchWeather,
  fetchAndSetUserCoords,
};

const ConnectedLocationSearchPanel = connect(null, mapDispatchToProps)(LocationSearchPanel);

export default ConnectedLocationSearchPanel;
