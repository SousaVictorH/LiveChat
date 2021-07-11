import styled from 'styled-components';

import {
    darkBlue,
    lightGreen,
    green,
    weightBlue,
    blue,
    transparent
} from '../../resources/colors';

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    font-family: Arial, sans-serif;
    height: 100vh;
    width: 100vw;
    justify-content: space-between;
`;

export const Form = styled.form`
    background: ${darkBlue};
    padding: 1rem;
`;

export const List = styled.ul`
    margin: 0;
    padding: 1rem;
`;

export const ListItem = styled.li`
    list-style: none;

    &.mine {
        text-align: right;
    }
`;

export const Message = styled.span`
    border: 1px solid ${transparent};
    border-radius: 5px;
    display: inline-block;
    list-style: none;
    margin-bottom: 1rem;
    padding: .5rem 1rem;

    &.mine {
        background: ${lightGreen};
        border-color: ${green};
        text-align: right;
    }

    &.other {
        background: ${weightBlue};
        border-color: ${blue};
    }
`;
