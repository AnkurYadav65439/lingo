
const FeedWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex-1 relative top-0 pb-10 bg-teal-300">
            {children}
        </div>
    )
}

export default FeedWrapper