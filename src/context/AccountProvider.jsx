import { createContext, useState } from "react";


export const AccountContext = createContext(null);


const AccountProvider = ({ children }) => {

    const [account, setAccount] = useState();
    const [currentPerson, setCurrentPerson] = useState({});

    return (
        <AccountContext.Provider value={{ account, setAccount, currentPerson, setCurrentPerson }} > {children} </AccountContext.Provider>
    )
}

export default AccountProvider;