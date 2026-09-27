import sonali from "../assets/sonaliImage.jpeg"
import { AiOutlineArrowRight } from "react-icons/ai"
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div name="home"
            className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                
                {/* Left Section */}
                <div className='flex flex-col justify-center h-full'>
                    
                    <h2 className='md:text-6xl sm:text-5xl font-bold text-white'>
                        I'm a GIS Engineer
                    </h2>

                    <p className='text-gray-400 py-4 max-w-md leading-relaxed'>
                        GIS Engineer with 3+ years of experience in Utility GIS and Power Distribution GIS. 
                        Skilled in GE Smallworld Electric Office, ArcMap, ArcGIS Pro, and QGIS, specializing in LT/HT 
                        network digitization, electrical asset mapping, and network topology. 
                        Passionate about geospatial data accuracy and delivering reliable utility GIS solutions.
                    </p>

                    <div>
                        <Link
                            to='contact'
                            smooth
                            duration={500}
                            className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            
                            Get In Touch
                            
                            <span className='group-hover:rotate-90 duration-300'>
                                <AiOutlineArrowRight size={25} className='ml-1' />
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Right Section */}
                <div>
                    <img
                        src={sonali}
                        alt='profile'
                        className='rounded-full mx-auto w-2/3 md:w-80'
                    />
                </div>

            </div>
        </div>
    )
}

export default Home