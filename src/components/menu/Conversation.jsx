import _ from "lodash";
import { Box, Typography, styled, Divider } from "@mui/material";

const Component = styled(Box)`
display: flex; 
cursor: pointer;
margin: 6px 0;
`;

const Image = styled("img")({
  height: 50,
  width: 50,
  borderRadius: "50%",
  margin: "0 16px",
});

const StyledDivider = styled(Divider)`
background-color: #e9edef;
opacity: 0.6;
height: 2px;
`;

const Conversation = ({ user }) => {

  return (
    <Box>
      <Component>
        <Box>
          <Image src={user.picture} alt="dp" />
        </Box>
        <Box>
          <Typography>{_.startCase(user.name)}</Typography>
        </Box>
      </Component>
      <StyledDivider />
    </Box>
  );
};

export default Conversation;
