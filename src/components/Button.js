import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Button =styled(Link)`
    border-radius: 10px;
    background: ${({primary}) => (primary ? '#010606' :'#ff6961')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#ff6961' : '#ff6')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#ff6' : '#000')};
        color: ${({dark}) => (dark ? '#010606' : '#ff6961')};
        border: 3px solid white;
    }
`