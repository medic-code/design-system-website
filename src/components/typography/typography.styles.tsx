import styled from 'styled-components';
import { fontSizes,gray,fontWeights, letterSpacing, lineHeight} from '../../lib';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { IProps } from './Typography.types'

const TEXT_MODIFIERS = {
    heading: () => `
        font-weight: ${fontWeights['bold']}
        letter-spacing: 0px;
        line-height: 1.6818;
        margin-bottom: 1.45rem;
    `
}

const StyledText = styled.p<IProps>`
    margin: 0;
    padding: 0;
    letter-spacing: ${lineHeight};
    line-height: ${letterSpacing};
    font-size: ${props => (props.size) ? props.size : fontSizes['paragraph']};
    font-family: inherit;
    font-weight: ${props => (props.fontWeight) ? props.fontWeight : fontWeights['normal']};
    color: ${props => (props.color) ? props.color : gray[800]};
    ${applyStyleModifiers(TEXT_MODIFIERS)}
`

export default StyledText;