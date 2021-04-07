import { getDb } from "../util/mongodb";

export const getBets = async (user) => {
    try{
        const bets = await getDb(user).collection("Bets").find({
            proposer: user.id
        });
        return bets;
    } catch(err) {
        console.log(err);
    }
}