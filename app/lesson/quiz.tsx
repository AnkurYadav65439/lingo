'use client'

import { challengeOptions, challenges } from "@/db/schema";
import Header from "./header";
import { useState } from "react";
import QuestionBubble from "./question-bubble";
import Challenge from "./challenge";

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

const Quiz = ({ initialLessonId, initialLessonChallenges, initialHearts, initialPercentage, userSubscription }: Props) => {
    const [hearts, setHearts] = useState(50 || initialHearts);
    const [percentage, setPercentage] = useState(63 || initialPercentage);
    const [challenges] = useState(initialLessonChallenges);
    const [activeIndex, setActiveIndex] = useState(() => {
        const uncompletedChallenge = challenges.findIndex((challenge) => !challenge.completed);
        return uncompletedChallenge === -1 ? 0 : uncompletedChallenge;
    });

    const challenge = challenges[activeIndex];
    const options = challenge.challengeOptions || [];
    const title = challenge.type === "ASSIST"
        ? "Select the correct meaning"
        : challenge.question

    return (
        <>
            <Header
                hearts={hearts}
                percentage={percentage}
                hasActiveSubscription={false}
            />
            <div className="flex-1">
                <div className="h-full flex items-center justify-center">
                    <div className="lg:min-h-[350px] lg:w-[600px] w-full px-6 lg:px-0 flex flex-col gap-y-12">
                        <h1 className="text-lg lg:text-3xl text-center lg:text-start font-bold text-neutral-700">
                            {title}
                        </h1>
                        <div>
                            {challenge.type === "ASSIST" && (
                                <QuestionBubble question={challenge.question} />
                            )}
                            <Challenge
                                options={options}
                                onSelect={() => {}}
                                status="none"
                                selectedOption={undefined}
                                disabled={false}
                                type={challenge.type}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Quiz