import svg from '@synthcore/assets/science.gif';

const Home = () => {
    return (
        <div className='container has-text-centered is-primary'>
            <div className='columns'>
                <div className='column my-auto'>
                    <div className='section has-text-left'>
                        <h1 className='title is-2 is-spaced is-3-mobile'>
                            SynthCore Development
                        </h1>
                        <h2 className='subtitle'>
                            Custom coding solutions for modern businesses.
                            Efficient, innovative, and tailored to your needs.
                        </h2>
                        <div className='buttons'>
                            <button className='button is-outlined is-link is-medium'>
                                <div className='icon-text'>
                                    <span>Get Started</span>
                                    <span className='icon '>
                                        <i className='fa-solid fa-arrow-right'></i>
                                    </span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='column'>
                    <figure className='image'>
                        <img src={svg} alt='idk' />
                    </figure>
                </div>
            </div>
        </div>
    );
};

export { Home };
