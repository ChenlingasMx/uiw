import styled, { css } from 'styled-components';
import { ThemeVariantValueOptions } from '@uiw/utils';
import { RowProps } from 'src/Row';

// @justifyContentProps: flex-start flex-end center space-between space-around space-evenly;

interface RowStyleWrapProps extends ThemeVariantValueOptions, Pick<RowProps, 'align' | 'justify'> {}

const alignType = { top: 'flex-start', middle: 'center', bottom: 'flex-end', baseline: 'baseline' };

const RowStyleWrap = styled.div<RowStyleWrapProps>`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;

  ${(props) =>
    props.align &&
    css`
      align-items: ${alignType[props.align]};
    `}

  ${(props) =>
    props.justify &&
    css`
      justify-content: ${props.justify};
    `}
`;
RowStyleWrap.defaultProps = {
  defaultTheme: {},
};

export default RowStyleWrap;
