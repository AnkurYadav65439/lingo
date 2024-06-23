import Flag from "@/components/shared/flag"
import { flags } from "@/constants"

const Footer = () => {
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                {flags.map((flag)=>(
                    <Flag key={flag.image} flag={flag}/>
                ))}
            </div>
        </footer>
    )
}

export default Footer