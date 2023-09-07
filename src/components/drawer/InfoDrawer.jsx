import { useContext } from "react"
import { AccountContext } from "../../context/AccountProvider"
import _ from "lodash";
import { Drawer, Box, styled, Typography } from "@mui/material"
import { ArrowBack } from "@mui/icons-material";

const InfoDrawer = ({ open, setOpen }) => {

    const { account } = useContext(AccountContext);

    //styles
    const drawerStyle = {
        left: 30,
        top: 18,
        height: '95%',
        width: '29%',
        backgroundColor: '#ededed',
        minWidth: 350
    }

    const ImageContainer = styled(Box)`
       display: flex;
       justify-content: center;
    `
    const Image = styled('img')({
        height: 200,
        width: 200,
        padding: 50,
        borderRadius: '50%'
    })

    const NameWrap = styled(Box)`
       background-color: #ffffff;
       padding: 20px 25px;
       box-shadow: 0px 2px 4px rgb(0, 0, 0, 0.1);
       & :first-child{
          color: #009688;
       }
    `

    const Text = styled(Typography)`
       font-size: 14px;
       color: #6b7b8e;
       padding: 10px 25px;
    `

    const Header = styled(Box)`
        height: 120px;
        background-color: #008069;
        color: #fff;
        display: flex;

        & :first-child{
            margin-top: auto;
            padding: 20px;
            font-weight: 600;
        }
        & :last-child{
            margin-top: auto;
            padding-bottom: 17px;
            font-size: 18px;
            font-weight: 600;
        }        
    `
    return (
        <>
            <Drawer
                open={open}
                onClose={() => setOpen(false)}
                PaperProps={{ sx: drawerStyle }}
                style={{ zIndex: 1500 }}
            >
                <Header>
                    <ArrowBack onClick={() => setOpen(false)} />
                    <Typography>Profile</Typography>
                </Header>
                <ImageContainer>
                    <Image src={account.picture} alt="profile-pic" />
                </ImageContainer>
                <NameWrap>
                    <Typography>Name</Typography>
                    <Typography>{_.startCase(account.name)}</Typography>
                </NameWrap>
                <Box>
                    <Text>
                        This is not your username or pin. This will be visible to other contacts.
                    </Text>
                </Box>
            </Drawer>
        </>
    )
}

export default InfoDrawer;