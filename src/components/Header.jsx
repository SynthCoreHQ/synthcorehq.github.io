import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='flex flex-wrap items-center justify-between p-4 text-lg text-white'>
            <div>SynthCore</div>

            <svg
                xmlns='http://www.w3.org/2000/svg'
                id='menu-button'
                className='h-6 w-6 cursor-pointer md:hidden block'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                />
            </svg>

            <nav
                className='hidden w-full md:flex md:items-center md:w-auto'
                id='menu'>
                <ul className='text-base md:flex md:justify-center space-x-4'>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About Us</Link>
                    </li>
                    <li>
                        <Link to={'/services'}>Services</Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export { Header };
