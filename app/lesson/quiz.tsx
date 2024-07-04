'use client'

import { challengeOptions, challenges } from "@/db/schema";
import Header from "./header";
import { useState } from "react";

type Props = {
    initialLessonId: number;
    initialLessonChallenges: (typeof challenges.$inferSelect & {
        completed: boolean;
        challengeOptions: typeof challengeOptions.$inferSelect[];
    })[];
    initialHearts: number;
    initialPercentage: number;
    userSubscription: any;    //TODO subscription db type
};

const Quiz = ({ initialLessonId, initialHearts, initialPercentage, userSubscription }: Props) => {
    const [hearts, setHearts] = useState(50 || initialHearts);
    const [percentage, setPercentage] = useState(63 || initialPercentage);

    return (
        <Header
            hearts={hearts}
            percentage={percentage}
            hasActiveSubscription={false}
        />
    )
}

export default Quiz