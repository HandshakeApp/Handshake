import { ObjectId } from "mongodb";
import { getDb, getUser } from "../util/mongodb";

export const getBetById = async (id) => {
    const user = getUser();
    try{
        const bet = await getDb(user).collection("Bets").find({
            _id: ObjectId(id)
        });
        return bet;
    } catch(err) {
        console.log(err);
    }
} 

export const getBets = async () => {
    const user = getUser();
    try{
        const bets = await getDb(user).collection("Bets").find({
            proposer: user.id
        });
        return bets;
    } catch(err) {
        console.log(err);
    }
}