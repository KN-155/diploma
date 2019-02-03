import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const LogoTitle = styled(Link)`
    font-size: 2.1rem;
    color: #fff;
    margin: 0 20px;
`;

const Logo = () => (
    <LogoTitle to="/">Logo</LogoTitle>
);

export default Logo;