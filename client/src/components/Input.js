import React from 'react';
import styled from 'styled-components';

import {
    lightGray,
    gray,
    lighBlue
} from '../resources/colors';

export const StyledInput = styled.input`
    border: 1px solid ${lightGray};
    border-radius: 5px;
    color: ${gray};
    font-size: 1.2rem;
    padding: .5rem 1rem;
    width: 100%;
    &:focus {
        border-color: ${lighBlue};
        box-shadow: 0 0 7px ${lighBlue};
        outline: none;
    }
`;

const Input = ({ placeholder, value, onChange }) => {

    return(
        <StyledInput 
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;
