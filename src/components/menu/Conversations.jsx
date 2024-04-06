import Conversation from "./Conversation";
import { useState, useEffect, useContext } from "react";
import { getUsers } from "../../service/api";
import { AccountContext } from "../../context/AccountProvider";
import { Box, styled } from "@mui/material";

const Component = styled(Box)`
  height: 81vh;
  overflow: overlay;
`;

const Conversations = ({ text }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      let response = await getUsers();
      response = response.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );
      setUsers(response);
    };

    fetchUsers();
  }, [text]);

  const { account } = useContext(AccountContext);

  return (
    <Component>
      {users?.map(
        (user) => user.sub !== account.sub && <Conversation user={user} />
      )}
    </Component>
  );
};

export default Conversations;
