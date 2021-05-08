import * as Realm from "realm-web";

export const app: Realm.App = new Realm.App({ 
    id: "handshake-likba" 
});

export const getUser = () => {
    return app.currentUser;
};

export const getDb = (user) => {
    return user.mongoClient("mongodb-atlas").db("Handshake");
};