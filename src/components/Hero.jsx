import tabbyImg from '../../public/images/tabby.jpg';

function Hero () {
    return (
        <section id="hero" className="w-full nav-height bg-cloudy relative top-0">
            <img id='hero-background' src={tabbyImg} alt="Cats At Sea" className='sm:w-lvw h-lvh object-cover brightness-75'/>
            <div id="hero-overlay" className="w-full flex-center absolute top-2/3 sm:top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div id="hero-overlay-container">
                    <div id="hero-overlay-text" className="">
                        <div id='hero-overlay-text-banner' className='text-center sm:text-left text-white sm:pl-20'>
                            <h1 className="text-3xl sm:text-6xl font-bold">Drinking Water For All Cats</h1>
                            <p className='text-xl md:text-3xl md:max-w-3xl'>To provide clean, tasty, and crispy water in the most efficient manner to all people and cats of the world.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </section>
    )
}

export default Hero;