import { useContext } from 'react';

import { AppBar, Toolbar, styled, Box } from '@mui/material';

import LoginDialog from './LoginDialogue';
import ChatDialog from './ChatDialogue';
import { AccountContext } from '../context/AccountProvider';


const Header = styled(AppBar)`
background-color : #00A884;
height : 220px;
`

const Wrap = styled(Box)`
height: 100vh;
background-color : #111B21;
`


const Messenger = () => {

    const { account } = useContext(AccountContext)
    return (
        <Wrap>
            <Header>
                <Toolbar>

                </Toolbar>
            </Header>
            {
                account ? <ChatDialog /> : <LoginDialog />
            }
        </Wrap>
    )
}

export default Messenger;