import bucketImg from '../../public/images/bucket.jpg'
import officeImg from '../../public/images/office.webp'
import engineerImg from '../../public/images/enigneer.jpg'
import { paragraphGlance, paragraphAim, paragraphIssues } from '../constants';

// rafce boilerplate

function Home () {
    return (
        <div className='relative bg-gradient-to-b from-g1 to-g2'>
            <div className="w-full h-10 sm:h-20 text-xl sm:text-2xl inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                    <li>
                        <img src="/images/cat1.png" alt="Meow" className='h-10 w-10'/>
                    </li>
                    <li>
                        <img src="/images/cat2.png" alt="Meow" className='h-10 w-10'/>
                    </li>
                    <li>
                        <img src="/images/cat3.png" alt="Meow" className='h-10 w-10'/>
                    </li>
                    <li>
                        <img src="/images/cat4.png" alt="Meow" className='h-10 w-10'/>
                    </li>
                    <li>
                        <img src="/images/cat5.png" alt="Meow" className='h-10 w-10' />
                    </li>
                    <li>
                        <img src="/images/cat6.png" alt="Meow" className='h-10 w-10' />
                    </li>
                    <li>
                        <img src="/images/cat7.png" alt="Meow" className='h-10 w-10'/>
                    </li>
                    <li>
                        <img src="/images/cat8.png" alt="Meow" className='h-10 w-10'/>
                    </li>
                </ul>
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                    <li>
                        <img src="/images/cat1.png" alt="Meow" className='h-10 w-10'/>
                    </li>
                    <li>
                        <img src="/images/cat2.png" alt="Meow" className='h-10 w-10'/>
                    </li>
                    <li>
                        <img src="/images/cat3.png" alt="Meow" className='h-10 w-10'/>
                    </li>
                    <li>
                        <img src="/images/cat4.png" alt="Meow" className='h-10 w-10'/>
                    </li>
                    <li>
                        <img src="/images/cat5.png" alt="Meow" className='h-10 w-10' />
                    </li>
                    <li>
                        <img src="/images/cat6.png" alt="Meow" className='h-10 w-10' />
                    </li>
                    <li>
                        <img src="/images/cat7.png" alt="Meow" className='h-10 w-10'/>
                    </li>
                    <li>
                        <img src="/images/cat8.png" alt="Meow" className='h-10 w-10'/>
                    </li>
                   
                </ul>
            </div>
            
            <div className="p-10 w-full">
                <div id="parent" className='flex flex-col space-y-32'>
                    
                    <h1 className="text-6xl pb-10 text-center">Addressing The Current Water Crisis</h1>
                    
                    <div id="child" className="flex sm:flex-row flex-col sm:justify-evenly w-full">
                        <div id='text-container' className='relative sm:w-1/2'>
                            <h2 className="text-3xl">The Crisis at a Glance</h2>
                            <p className="text-xl text-justify">{paragraphGlance}</p>
                        </div>
                        <div id='image-container' className="self-center">
                            <img src={bucketImg} alt="Meow" className='sm:h-52'/>
                        </div>
                    </div>
                    <div id="child" className="flex sm:flex-row flex-col sm:justify-evenly w-full">
                        <div id='image-container' className="self-center">
                            <img src={officeImg} alt="Meow" className='sm:h-52'/>
                        </div>
                        <div id='text-container' className='relative sm:w-1/2 '>
                            <h2 className="text-3xl">Our Aim</h2>
                            <p className="text-xl text-justify">{paragraphAim}</p>
                        </div>
                    </div>
                    <div id="child" className="flex sm:flex-row flex-col sm:justify-evenly w-full">
                        <div id='text-container' className='relative sm:w-1/2 '>
                            <h2 className="text-3xl">Tackling the Issues</h2>
                            <p className="text-xl text-justify">{paragraphIssues}</p>
                        </div>
                        <div id='image-container' className="self-center">
                            <img src={engineerImg} alt="Meow" className='sm:h-52'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;