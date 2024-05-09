import { LinkedinLogo } from "@phosphor-icons/react";
import logo from '../logo.svg';

const Footer = () => {
    return (
        <div className="bg-base-200/75  w-full">	
            <footer className="container mx-auto footer px-10 py-8 border-t text-base-content border-base-300">
                <div className="items-center grid-flow-col text-xs text-md">
                    <img src={logo} className="w-10 h-10 mr-2" alt="logo" />
                    <p>I'm Mobile Friendly. <br />Providing reliable tech since 2020</p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.linkedin.com/in/rp42/" target="_blank" rel="noreferrer" className="text-primary hover:text-primary-focus inline-block -mb-4 ml-2"> <LinkedinLogo size={42} weight="light" /></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer