
export default function Footer() {
    return (
        <footer className=" bg-gradient-to-b from-black to-gray-800 text-center text-white ">
            <div className="container px-6  mx-auto pt-40 ">
                <div className="mb-6 flex justify-center w-full">


                    <div className="light">
                        <a
                            href="mailto:sonalirawat912@gmail.com" target="_blank" rel="noopener noreferrer"
                            type="button"
                            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                        >
                             <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto h-full w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                                    fillRule="evenodd"
                                    clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                    <div className="light">
                        <a
                            href="https://www.linkedin.com/in/sonali-rawat-464930215/" target="_blank" rel="noopener noreferrer"
                            type="button"
                            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                        >
                               <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto h-full w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            </svg>
                        </a>
                    </div>
                    <div className="light">
                        <a
                            href='/Sonali_Rawat_Resume.pdf' download={true} target="_blank" rel="noopener noreferrer" 
                            type="button"
                            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                        >
                             <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto h-full w-4"
                                fill="currentColor"
                                viewBox="0 0 20 20">
                                
							<path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
						</svg>
                            
                        </a>
                    </div>

                    

                </div>
            </div>

            {/* <!--Copyright section--> */}
            <div
                className="p-4 text-center bg-black bg-opacity-20">
                © 2024 Copyright:
                <a className="text-whitehite" href="https://tailwind-elements.com/"
                >Sonali Rawat</a>
            </div>
        </footer>
    );
}