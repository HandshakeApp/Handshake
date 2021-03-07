import * as Realm from "realm-web";

export const login = async (email: string, password: string) => {
    const app: Realm.App = new Realm.App({ id: "60264c71a2da11cc83820b11" });
    const credentials = Realm.Credentials.emailPassword(email, password);

    try {
        const user: Realm.User = await app.logIn(credentials);
        

        return user;
    } catch (err) {
        console.error("Failed to log in", err);
    }
}