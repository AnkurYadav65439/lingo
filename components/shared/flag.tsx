import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

type props = {
    image: string;
    language: string;
}

const Flag = ({ flag }: { flag: props }) => {
    return (
        <Button size="lg" variant="ghost" className='w-full'>
            <Image
                src={flag.image}
                alt={flag.language}
                height={32}
                width={40}
                className='mr-4 rounded-md'
            />
            {flag.language}
        </Button>
    )
}

export default Flag