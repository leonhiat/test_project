import React from 'react';

import styled from "styled-components";

const SignIn: React.FC = () => {
    return (
        <div className='signIn'>
            <SignInBox>
                Hello!
            </SignInBox>
        </div>
    );
}

export default SignIn;

const SignInBox = styled.div`
    background-image: url('/assets/img/landing.png');
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`