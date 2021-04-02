import React, { useContext } from 'react';
import { app } from "../util/mongodb";

export const AuthContext = React.createContext({ loggedIn: false});

export function useAuth() {
    return useContext(AuthContext);
};

export async function login(email: string, password: string) {
    const credentials = Realm.Credentials.emailPassword(email, password);

    try {
        const user: Realm.User = await app.logIn(credentials);
        return user;
    } catch(err) {
        console.log(err);
    }
};