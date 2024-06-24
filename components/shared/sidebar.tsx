import { cn } from '@/lib/utils'
import Logo from "@/components/shared/logo"
import Link from 'next/link'
import SidebarItem from './sidebar-item'
import { sidebarItems } from '@/constants'
import { ClerkLoaded, ClerkLoading, UserButton } from '@clerk/nextjs'
import { Loader } from 'lucide-react'

const sidebar = ({ className }: { className?: string }) => {
    return (
        <aside className={cn('flex flex-col h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2', className)}>
            <Link href="/learn">
                <Logo height={40} width={40} />
            </Link>
            <div className='flex flex-col gap-y-2 flex-1'>
                {sidebarItems.map((sidebarItem) => {
                    const { label, href, iconSrc } = sidebarItem;
                    return (
                        <SidebarItem
                            label={label}
                            href={href}
                            iconSrc={iconSrc}
                            key={href}
                        />
                    );
                })}
            </div>
            <div className="p-4">
                <ClerkLoading>
                    <Loader className='h-5 w-5 text-muted-foreground animate-spin' />
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton afterSignOutUrl='/'/>
                </ClerkLoaded>
            </div>
        </aside>
    )
}

export default sidebar