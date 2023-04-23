import notfound from '../assets/404.gif';

const NotFound = () => {
    return (
        <div className='container has-text-centered'>
            <div className='columns'>
                <div className='column my-auto'>
                    <div className='section has-text-left'>
                        <h1 className='title is-2 is-spaced is-3-mobile'>
                            Oops!
                        </h1>
                        <h2 className='subtitle'>404! Page Not Found</h2>
                        <div className='buttons'>
                            <button className='button is-outlined is-link is-medium'>
                                <div className='icon-text'>
                                    <span>Back to Home</span>
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
                        <img src={notfound} alt='idk' />
                    </figure>
                </div>
            </div>
        </div>
    );
};

export { NotFound };
