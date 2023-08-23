import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.svg';
import { ImageComponent } from '../components/ImageComponent';
import { AnchorComponent } from '../components/AnchorComponent';

export const Navbar = () => {
    const handleClick = () => {
        const menuButton = document.getElementById("menu-btn")
        const menu = document.getElementById("menu")

        menuButton.classList.toggle("open")
        menu.classList.toggle("flex")
        menu.classList.toggle("hidden")
    }

    return (
        <nav className="relative container mx-auto p-6">
            <div className="flex items-center justify-between">
                <div className="p-2 mt-0 md:mt-3">
                    <Link to='/'><ImageComponent imageSrc={Logo} altText="Logo" title="Go to home page" /></Link>
                </div>

                {/* Menu items - hidden - mobile first */}
                <ul className="hidden space-x-6 md:flex">
                    <li>
                        <AnchorComponent link="#" className='hover:text-darkGrayishBlue' title="Go to pricing page">
                            <Link to='/pricing'>Pricing</Link>
                        </AnchorComponent>
                    </li>
                    <li>
                        <AnchorComponent link="#" className='hover:text-darkGrayishBlue' title="Go to product page">
                            <Link to='/product'>Product</Link>
                        </AnchorComponent>
                    </li>
                    <li>
                        <AnchorComponent link="#" className='hover:text-darkGrayishBlue' title="Go to about page">
                            <Link to='/about'>About Us</Link>
                        </AnchorComponent>
                    </li>
                    <li>
                        <AnchorComponent link="#" className='hover:text-darkGrayishBlue' title="Go to careers page">
                            <Link to='/careers'>Careers</Link>
                        </AnchorComponent>
                    </li>
                    <li>
                        <AnchorComponent link="#" className='hover:text-darkGrayishBlue' title="Go to community page">
                            <Link to='/community'>Community</Link>
                        </AnchorComponent>
                    </li>
                </ul>

                <AnchorComponent link="#" className="p-3 px-6 pt-2 rounded-full baseline text-white bg-brightRed hover:bg-brightRedLight hidden md:block">
                    Get started
                </AnchorComponent>

                {/* Hamburger Icon */}
                <button id="menu-btn" className="hamburger block md:hidden focus:outline-none" onClick={handleClick}>
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                </button>
            </div>

            {/* Mobile menu */}
            <div className="md:hidden">
                <div id="menu" className="hidden absolute flex-col items-center justify-self-end py-8 mt-10 space-y-6 font-bold bg-slate-100 sm:w-auto sm:justify-self-center left-6 right-6 drop-shadow-lg">
                    <AnchorComponent link="#" className='hover:text-brightRed' title="Go to pricing page">
                        <Link to='/pricing'>Pricing</Link>
                    </AnchorComponent>
                    <AnchorComponent link="#" className='hover:text-brightRed' title="Go to product page">
                        <Link to='/product'>Product</Link>
                    </AnchorComponent>
                    <AnchorComponent link="#" className='hover:text-brightRed' title="Go to about page">
                        <Link to='/about'>About Us</Link>
                    </AnchorComponent>
                    <AnchorComponent link="#" className='hover:text-brightRed' title="Go to careers page">
                        <Link to='/careers'>Careers</Link>
                    </AnchorComponent>
                    <AnchorComponent link="#" className='hover:text-brightRed' title="Go to community page">
                        <Link to='/community'>Community</Link>
                    </AnchorComponent>
                </div>
            </div>
        </nav>
    )
}
