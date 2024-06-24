import FeedWrapper from '@/components/shared/feed-wrapper'
import StickyWrapper from '@/components/shared/sticky-wrapper'
import React from 'react'
import Header from './header'
import UserProgress from '@/components/shared/user-progress'

const LearnPage = () => {
    return (
        <div className='flex flex-row-reverse gap-[48px] px-6 '>
            <StickyWrapper>
                <UserProgress
                    activeCourse={{ title: "Spanish", imageSrc: "/es.svg" }}
                    hearts={5}
                    points={100}
                    hasActiveSubscription={false}
                />
            </StickyWrapper>
            <FeedWrapper>
                <Header title="Spanish" />
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