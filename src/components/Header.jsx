import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='hero-head'>
            <nav className='navbar'>
                <div className='container'>
                    <div className='navbar-brand'>
                        <a className='navbar-item'>
                            <h4 className='title is-4'>SynthCore</h4>
                        </a>

                        <a
                            className='navbar-burger'
                            role='button'
                            aria-label='menu'
                            aria-expanded='false'
                            data-target='navbarBurger'>
                            <span aria-hidden='true'></span>
                            <span aria-hidden='true'></span>
                            <span aria-hidden='true'></span>
                        </a>
                    </div>

                    <div className='navbar-menu' id='navbarBurger'>
                        <div className='navbar-end'>
                            <Link to={'/'} className='navbar-item is-tab'>
                                Home
                            </Link>
                            <Link to={'/about'} className='navbar-item is-tab'>
                                About Us
                            </Link>
                            <Link
                                to={'/services'}
                                className='navbar-item is-tab'>
                                Services
                            </Link>

                            <Link
                                to={'/contact'}
                                className='navbar-item is-tab'>
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export { Header };
