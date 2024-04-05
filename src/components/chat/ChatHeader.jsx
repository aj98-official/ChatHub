import React, { useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider';
import { Box, Typography, styled } from '@mui/material';
import { MoreVert, SearchOutlined } from '@mui/icons-material';
import _ from 'lodash';


const Container = styled(Box)`
height: 44px;
background-color: #ededed;
padding: 8px 16px;
display: flex;
align-items: center;`;

const Image = styled('img')`
    height: 40px;
    width: 40px;
    border-radius: 50%;
`;

const Name = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
    margin-left: 10px;
`;

const Status = styled(Typography)`
    font-size: 14px;
    color: #6b7b8e;
    margin-left: 10px;
`;

const IconContainer = styled(Box)`
    margin-left: auto;
    padding: 10px;
`;


const ChatHeader = () => {
    const { account } = useContext(AccountContext);
    return (
        <Container>
            <Image src={account?.picture} alt='dp' />
            <Box>
                <Name>{_.startCase(account?.name)}</Name>
                <Status>online</Status>
            </Box>

            <IconContainer>
                <SearchOutlined />
                <MoreVert />
            </IconContainer>
        </Container>
    );
};

export default ChatHeader;