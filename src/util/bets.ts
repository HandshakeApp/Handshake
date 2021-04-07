import { getDb, getUser } from "../util/mongodb";

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