
const logo = ({ height, width }: { height: number, width: number }) => {
    return (
        <div className="pt-8 pb-7 pl-4 flex items-center gap-x-3">
            <img src="/mascot.svg" alt="Mascot" height={height} width={width} />
            <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
                Lingo
            </h1>
        </div>
    )
}

export default logo