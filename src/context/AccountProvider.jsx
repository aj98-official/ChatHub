import { createContext, useState } from "react";


export const AccountContext = createContext(null);


const AccountProvider = ({ children }) => {

    const [account, setAccount] = useState();
    const [currentChat, setCurrentChat] = useState({});

    return (
        <AccountContext.Provider value={{ account, setAccount, currentChat, setCurrentChat }} > {children} </AccountContext.Provider>
    )
}

export default AccountProvider;