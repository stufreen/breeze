import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import { withTheme } from 'styled-components/native';
import {
  Box,
  ScrollBox,
  LScript,
  StyledTextInput,
} from './design-system';
import BackButton from './BackButton';
import LocationResultList from './LocationResultList';
import { addLocationAndLookup } from '../common/locations/locations.thunks';
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
    const {
      onPressBack,
      addLocationAndLookup,
    } = this.props;
    const { sessionID } = this.state;
    onPressBack();
    addLocationAndLookup(place.place_id, sessionID);
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
    const { onPressBack, theme } = this.props;
    const { input, resultList } = this.state;
    return (
      <Box flex={1}>
        <StatusBar barStyle={theme.statusBarSettings} />
        <ScrollBox bg="settingsBackground" flex={1} contentContainerStyle={{ alignItems: 'center' }}>
          <Box pt={5} px={3} width="100%" maxWidth={480}>
            <LScript
              header
              fontSize={3}
              textAlign="center"
              mb={4}
              textKey="locationSearch:add"
              color="accent"
            />
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
        <Box position="absolute" mt={4} ml={3} pt={2}>
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
  addLocationAndLookup: PropTypes.func.isRequired,
  theme: PropTypes.shape({
    statusBarMain: PropTypes.string,
    statusBarSettings: PropTypes.string,
  }).isRequired,
};

const mapDispatchToProps = {
  addLocationAndLookup,
};

const ConnectedLocationSearchPanel = connect(null, mapDispatchToProps)(LocationSearchPanel);

export default withTheme(ConnectedLocationSearchPanel);
