import * as Realm from "realm-web";

export const app: Realm.App = new Realm.App({ 
    id: "handshake-likba" 
});

export const getDb = (user: any) => {
    return user.mongoClient("mongodb-atlas").db("Handshake");
};