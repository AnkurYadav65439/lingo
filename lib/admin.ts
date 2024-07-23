import { auth } from "@clerk/nextjs/server"

const adminIds = [
    "user_2iGl6uco9yD8Vfm1pO2oqI7gcpB"
];

export const isAdmin = ()=> {
    const { userId } = auth();

    if (!userId) {
        return false;
    }

    return adminIds.indexOf(userId) != -1;

}