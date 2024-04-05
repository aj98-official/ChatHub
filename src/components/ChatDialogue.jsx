import { Dialog, Box, styled } from "@mui/material";
import Menu from './menu/Menu';
import EmptyChat from "./chat/EmptyChat";
import Chat from "./chat/Chat";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";


const dialogStyle = {
    height: "95%",
    width: "95%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: 'hidden'
};

const Component = styled(Box)`
    display : flex;
    height: 100%
`
const LeftComponent = styled(Box)`
    min-width : 350px;
    width : 30%;
`
const RightComponent = styled(Box)`
    width : 70%;
    border-left: solid 2px rgba(0,0,0,0.1);
`

const ChatDialog = () => {
    const { currentChat } = useContext(AccountContext);
    return (
        <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
            <Component>
                <LeftComponent>
                    <Menu />
                </LeftComponent>
                <RightComponent>
                    {Object.keys(currentChat).length ? <Chat /> : <EmptyChat />}
                </RightComponent>
            </Component>
        </Dialog>
    );
};

export default ChatDialog;