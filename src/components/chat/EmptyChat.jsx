
import { Box, Typography, styled } from "@mui/material";
import ChatImg from "../../assets/images/chatting.jpg"

const ImgContainer = styled(Box)`
height: 50%;
display: flex;
justify-content: center;
margin-top : 100px;
`
const Img = styled('img')({
    borderRadius: '50%'
})

const TextWrap = styled(Box)`
margin: 50px;
text-align: center;
color: #6b7b8e;
`

const HeadText = styled(Typography)`
 font-size: 32px;
 font-weight: 600;
`

const EmptyChat = () => {



    return (
        <>
            <ImgContainer>
                <Img src={ChatImg} alt="chatting-img" />
            </ImgContainer>
            <TextWrap>
                <HeadText>Chat Hub</HeadText>
                <Typography>Now send and receive messages just by your email account.</Typography>
            </TextWrap>
        </>
    )
}

export default EmptyChat;