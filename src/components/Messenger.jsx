import {AppBar, Toolbar, styled, Box} from '@mui/material';
import LoginDialog from './LoginDialogue';


const Messenger = () => {
    
    const Header = styled(AppBar)`
        background-color : #00A884;
        height : 220px;
    `

    const Wrap = styled(Box)`
      height: 100vh;
      background-color : #111B21
    `

    return(
        <Wrap>
            <Header>
                <Toolbar>

                </Toolbar>
            </Header>

            <LoginDialog />
        </Wrap>
    )
}

export default Messenger;