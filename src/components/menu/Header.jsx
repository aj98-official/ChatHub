
import { Box, styled } from "@mui/material";
import { useContext, useState } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { Chat } from '@mui/icons-material';
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../drawer/InfoDrawer";

const Component = styled(Box)`
        height: 44px;
        background-color: #ededed;
        padding: 8px 16px;
        display: flex;
        align-items: center;
    `
const Wrapper = styled(Box)`
        margin-left: auto;
        padding-top: 10px;
        display: flex;
        align-items: center;
    `
const ChatIcon = styled(Chat)`
        font-size: 22px;
        color : #40514e;
        margin-right: 20px;
    `


const Image = styled('img')({
    height: 40,
    width: 40,
    borderRadius: 50
})

const Header = () => {

    const { account } = useContext(AccountContext);
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <>
            <Component>
                <Image src={account.picture} alt="profile-pic" onClick={() => setOpenDrawer(true)} />
                <Wrapper>
                    <ChatIcon />
                    <HeaderMenu setOpenDrawer={setOpenDrawer} />
                </Wrapper>
            </Component>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
        </>
    )
}

export default Header;