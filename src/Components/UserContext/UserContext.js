import React, { createContext, useState } from 'react';

export const AuthContext = createContext()
const UserContext = ({children}) => {
    const [catid, setCatid] = useState("a")



    const authcontext = {catid,setCatid}
    return (
        <AuthContext.Provider value={authcontext}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;