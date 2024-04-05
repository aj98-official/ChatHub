import React from 'react';
import { Box, styled, InputBase } from '@mui/material';
import { Send, AttachFile, EmojiEmotionsOutlined, KeyboardVoice } from '@mui/icons-material';

const StyledEmojiEmotionsOutlined = styled(EmojiEmotionsOutlined)`
color: #919191;
cursor: pointer;
margin-right: 10px;
`;

const StyledAttachFile = styled(AttachFile)`
color: #919191;
cursor: pointer;
margin-right: 10px;
`;
const StyledInputBase = styled(InputBase)`
margin-left: 10px;
background-color: #fff;
padding: 10px;
border-radius: 20px;
width: 85%;
height: 40px;
&::placeholder {
    color: #919191;
}
`;


const StyledSend = styled(Send)`
color: #919191;
cursor: pointer;
margin-left: 10px;
`;

const StyledKeyboardVoice = styled(KeyboardVoice)`
color: #919191;
cursor: pointer;`;

const Wrapper = styled(Box)`
display: flex;
background-color: #ededed;
padding: 10px;
align-items: center;
`

const Footer = () => {


    return (
        <Wrapper>
            <StyledEmojiEmotionsOutlined />
            <StyledAttachFile />
            <StyledInputBase placeholder='Type your message' endAdornment={<StyledKeyboardVoice />} />
            <StyledSend />
        </Wrapper>
    );
};

export default Footer;
