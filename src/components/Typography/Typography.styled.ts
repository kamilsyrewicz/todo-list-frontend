import styled from 'styled-components';

export interface BaseFontProps {
  size: number;
  lineHeight: number;
  type: 'bold' | 'regular' | 'medium';
  textAlign?: any;
  testID?: string;
  underLine?: boolean;
  color?: string;
  children?: string;
}

export const BaseFont = styled.div<BaseFontProps>`
  color: ${(props) => props.color || props.theme.text.primary.default};
  text-decoration-line: ${(props) => (props.underLine ? 'underline' : 'none')};
  text-align: ${(props) => props.textAlign || 'auto'};
  font-size: ${(props) => props.size}px;
  line-height: ${(props) => props.size * props.lineHeight}px;
  text-align: ${(props) => props.textAlign || 'auto'}
  font-family: ${(props) => {
    if (props.type === 'bold') {
      return 'SuisseIntl-SemiBold';
    }
    if (props.type === 'medium') {
      return 'SuisseIntl-Medium';
    }
    return 'SuisseIntl-Regular';
  }};
`;
