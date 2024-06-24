'use client'

import { Button } from '../ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
    label: string;
    href: string;
    iconSrc: string;
}

const SidebarItem = ({ label, href, iconSrc }: Props) => {
    const pathname = usePathname();
    const active = href === pathname;

    return (
        <Button
            variant={`${active ? 'sidebarOutline' : 'sidebar'}`}
            className='justify-start h-[52px]'
            asChild
        >
            <Link href={href}>
                <Image
                    src={iconSrc}
                    alt={label}
                    className='mr-5'
                    width={32}
                    height={32}
                />
                {label}
            </Link>
        </Button>
    )
}

export default SidebarItem