import FeedWrapper from '@/components/shared/feed-wrapper'
import StickyWrapper from '@/components/shared/sticky-wrapper'
import React from 'react'
import Header from './header'
import UserProgress from '@/components/shared/user-progress'
import { getUserProgress } from '@/db/queries'
import { redirect } from 'next/navigation'

const LearnPage = async () => {
    const userProgressData = getUserProgress();

    const [userProgress] = await Promise.all([userProgressData]);

    if (!userProgress || !userProgress.activeCourse) {
        redirect("/courses");
    }

    return (
        <div className='flex flex-row-reverse gap-[48px] px-6 '>
            <StickyWrapper>
                <UserProgress
                    activeCourse={userProgress.activeCourse}
                    hearts={userProgress.hearts}
                    points={userProgress.points}
                    hasActiveSubscription={false}
                />
            </StickyWrapper>
            <FeedWrapper>
                <Header title={userProgress.activeCourse.title} />
                <div className='space-y-4'>
                    <div className='h-[700px] bg-blue-500 w-full'></div>
                    <div className='h-[700px] bg-blue-500 w-full'></div>
                    <div className='h-[700px] bg-blue-500 w-full'></div>
                    <div className='h-[700px] bg-blue-500 w-full'></div>
                </div>
            </FeedWrapper>
        </div>
    )
}

export default LearnPage