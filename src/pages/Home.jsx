import yawnImg from '../../public/images/yawn.jpg';

function Home () {
    return (
        <container className='relative'>
            <div className="w-full h-10 sm:h-20 text-xl sm:text-2xl inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                    <li>
                        <img src="./cat.svg" alt="Meow" />
                    </li>
                    <li>
                        <img src="./cat.svg" alt="Meow" />
                    </li>
                    <li>
                        <img src="./cat.svg" alt="Meow" />
                    </li>
                    <li>
                        <img src="./cat.svg" alt="Meow" />
                    </li>
                    <li>
                        <img src="./cat.svg" alt="Meow" />
                    </li>
                    <li>
                        <img src="./cat.svg" alt="Meow" />
                    </li>
                    <li>
                        <img src="./cat.svg" alt="Meow" />
                    </li>
                    <li>
                        <img src="./cat.svg" alt="Meow" />
                    </li>
                </ul>
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                    <li>
                        <img src="./cat.svg" alt="Meow" />
                    </li>
                    <li>
                        <img src="./cat.svg" alt="Meow" />
                    </li>
                    <li>
                        <img src="./cat.svg" alt="Meow" />
                    </li>
                    <li>
                        <img src="./cat.svg" alt="Meow" />
                    </li>
                    <li>
                        <img src="./cat.svg" alt="Meow" />
                    </li>
                    <li>
                        <img src="./cat.svg" alt="Meow" />
                    </li>
                    <li>
                        <img src="./cat.svg" alt="Meow" />
                    </li>
                    <li>
                        <img src="./cat.svg" alt="Meow" />
                    </li>
                
                </ul>
            </div>
            
            <div className="p-10 w-full">
                <div id="parent" className='flex flex-col space-y-32'>
                    
                    <h1 className="text-6xl pb-10 text-center">Addressing The Current Water Crisis</h1>
                    
                    <div id="child" className="flex sm:flex-row flex-col sm:justify-evenly w-full">
                        <div id='text-container' className='relative sm:w-1/2 '>
                            <h2 className="text-3xl">Context</h2>
                            <p className="text-xl text-justify">The Republic of Felines has a water shortage because of an unusual drought. Riots are starting to break out across the country. Black market water is driving crime rates up, the healthcare system is being strained, and the economic elites are vying to help the poorer sections, but no relief has arrived.  The economic impact of the drought is severe – fewer crops, fewer workers, and inflated prices on goods.  There are rumors that military officers are plotting a coup.</p>
                        </div>
                        <div id='image-container' className="self-center">
                            <img src={yawnImg} alt="Meow" className='sm:h-52'/>
                        </div>
                    </div>
                    <div id="child" className="flex sm:flex-row flex-col sm:justify-evenly w-full">
                        <div id='image-container' className="self-center">
                            <img src={yawnImg} alt="Meow" className='sm:h-52'/>
                        </div>
                        <div id='text-container' className='relative sm:w-1/2 '>
                            <h2 className="text-3xl">Lorem</h2>
                            <p className="text-xl text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                    </div>
                    <div id="child" className="flex sm:flex-row flex-col sm:justify-evenly w-full">
                        <div id='text-container' className='relative sm:w-1/2 '>
                            <h2 className="text-3xl">Lorem</h2>
                            <p className="text-xl text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                        <div id='image-container' className="self-center">
                            <img src={yawnImg} alt="Meow" className='sm:h-52'/>
                        </div>
                    </div>
                </div>
            </div>
        </container>
    )
}

export default Home;