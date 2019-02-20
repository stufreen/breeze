import React from 'react';
import PropTypes from 'prop-types';
import { Box, ScrollBox, Script, StyledTextInput } from './design-system';
import BackButton from './BackButton';
import { searchLocation } from '../services/geocode';

class LocationSearchPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      resultList: [],
    };
  }

  handleTyping = (newText) => {
    this.setState({
      input: newText,
    });
  }

  search = () => {
    const { input } = this.state;
    searchLocation(input)
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
          <Box pt={5} px={4} width="100%">
            <Script header fontSize={3} textAlign="center" mb={4}>Search Location</Script>
            <StyledTextInput
              bg="primaryTransparent"
              color="accent"
              header
              p={3}
              fontSize={2}
              editable
              clearTextOnFocus
              autoFocus
              autoCorrect={false}
              selectionColor="rgba(255, 255, 255, 0.8)"
              onChangeText={this.handleTyping}
              value={input}
              onBlur={this.search}
            />
            <Box my={4}>
              {resultList.map(place => <Script key={place.place_id}>{place.display_name}</Script>) }
            </Box>
          </Box>
        </ScrollBox>
        <Box position="absolute" mt={5} ml={3}>
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
};

export default LocationSearchPanel;
