import { Fragment } from 'react';
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';

const App = () => {
    return (
        <Fragment>
            <section className='hero is-black is-fullheight'>
                <Header />
                <div className='hero-body'>
                    <Outlet />
                </div>
                <Footer />
            </section>
        </Fragment>
    );
};

export { App };
