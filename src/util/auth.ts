import React, { useContext } from 'react';
import * as Realm from "realm-web";
import { app, getUser } from "../util/mongodb";

export const AuthContext = React.createContext({ user: null});

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

export async function signup(fields) {
    await app.emailPasswordAuth.registerUser(fields.email, fields.password);
}

export async function logout() {
    try {
        await getUser().logOut();
    } catch(err) {
        console.log(err);
    }
};