import Conversation from "./Conversation";
import { useState, useEffect, useContext } from "react";
import { getUsers } from "../../service/api";
import { AccountContext } from "../../context/AccountProvider";
import { Box, styled } from "@mui/material";

const Component = styled(Box)`
height: 81vh;
overflow: overlay;
`

const Conversations = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      let response = await getUsers();

      setUsers(response);
      console.log(users);
    };

    fetchUsers();
  }, []);

  const { account } = useContext(AccountContext);

  return (
    <Component>
      {users?.map((user) => (
        user.sub !== account.sub && <Conversation user={user} />
      ))}
    </Component>
  );
};

export default Conversations;
