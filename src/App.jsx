import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';

const App = () => {
    return (
        <>
            <section className='min-h-screen'>
                <Header />
                <div>
                    <Outlet />
                </div>
                <Footer />
            </section>
        </>
    );
};

export { App };
