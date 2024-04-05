import React from 'react';
import { Box, styled } from '@mui/material';

const Wrapper = styled(Box)`
height: calc(100vh - 155px);
overflow-y: scroll;
background-image: url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png');
background-size: 50%;
`;


const Messages = () => {

    return (
        <Wrapper>
        </Wrapper>
    );
};

export default Messages;