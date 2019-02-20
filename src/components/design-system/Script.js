import styled from 'styled-components/native';
import * as ss from 'styled-system';

export const Script = styled.Text`
  color: ${props => props.theme.colors.primary};
  font-family: ${props => (props.header ? 'Montserrat' : 'Lato')};
  ${ss.color}
  ${ss.space}
  ${ss.fontSize}
  ${ss.lineHeight}
  ${ss.opacity}
  ${ss.textAlign}
`;
