import { RxBorderDashed } from "react-icons/rx";
import { MdAttachMoney } from "react-icons/md";
import { MdOutlineHighQuality } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { useState } from "react";


function About() {
    const [currentSlide, setCurrentSlide] = useState(1);
    const totalSlides = 4;

    const nextSlide = () => {
        setCurrentSlide(prev => (prev === totalSlides ? 1 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide(prev => (prev === 1 ? totalSlides : prev - 1));
    };

    return (
        <section className="my-7 bg-slate-100">
            <div className="container mx-auto">
                {/* header part */}
                <div className='flex justify-center md:justify-between flex-col w-full my-7 lg:flex-row items-center'>
                    <div className='md:flex md:items-center block text-center px-5'>
                        <h1 className="text-xl md:text-2xl font-bold w-96 tracking-wide leading-relaxed">
                            <span className='md:text-3xl text-sky-700 text-xl'>ElectroHub</span>-Your Tech Destination
                        </h1>
                    </div>
                    <div className='md:w-1/2 flex w-full px-10'>
                        <img src="/images/devices.svg" alt="Devices" className='w-full h-auto' />
                    </div>

                </div>
                {/* about us */}
                <div className='my-32 px-5 sm:px-0'>
                    <h1 className="text-center text-2xl my-5 font-semibold">
                        About Us
                    </h1>
                    <p className='text-zinc-500 text-center'>
                        At ElectroHub, we are passionate about bringing the latest and greatest digital devices right to your fingertips. Established with a mission to provide top-quality tech products and exceptional customer service, we have quickly become a trusted name in the online marketplace for digital devices.
                    </p>
                </div>
                {/* products */}
                <div>
                    <div className="flex items-center gap-2 px-2 justify-center md:justify-start mb-5 md:mb-0">
                        <RxBorderDashed className='-mt-5 hidden md:block' />
                        <h1 className=" text-2xl font-semibold mb-6 ">
                            Our Products
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 px-2 md:grid-cols-2 gap-3">
                        <div className="bg-sky-800 space-y-5  p-5 rounded-2xl w-full">
                            <img src="/images/computer.svg" className='w-full' />
                            <h3 className='font-semibold text-lg text-white'>Computers</h3>
                            <p className='text-sm text-zinc-100'>From high-performance desktops to sleek and powerful laptops, we have the perfect computing solutions for both personal and professional use.</p>
                        </div>
                        <div className="bg-sky-700 space-y-5  p-5 rounded-2xl  w-full">
                            <img src="/images/mobile.svg" className='w-full h-32' />
                            <h3 className='font-semibold text-lg text-white'>Mobiles</h3>
                            <p className='text-sm text-zinc-200'>Stay connected with our extensive collection of smartphones from leading brands, featuring the latest technology and innovations.</p>
                        </div>
                        <div className="bg-sky-600 space-y-5  p-5 rounded-2xl w-full">
                            <img src="/images/tablet.svg" className='w-full h-32' />
                            <h3 className='font-semibold text-lg text-white'>Tablets</h3>
                            <p className='text-sm text-zinc-200'>Experience the perfect blend of portability and functionality with our range of tablets, ideal for both work and play.</p>
                        </div>
                        <div className="bg-sky-500 space-y-5  p-5 rounded-2xl w-full">
                            <img src="/images/camera.svg" className='w-full h-32' />
                            <h3 className='font-semibold text-lg text-white'>Cameras</h3>
                            <p className='text-sm text-zinc-200'>Capture your world in stunning detail with our selection of digital cameras, designed for everyone from beginners to professional photographers.</p>
                        </div>
                        <div className="bg-sky-400 space-y-5  p-5 rounded-2xl w-full">
                            <img src="/images/game-console.svg" className='w-full h-32' />
                            <h3 className='font-semibold text-lg text-white'>Game Consoles</h3>
                            <p className='text-sm text-zinc-100'>Dive into immersive gaming experiences with our cutting-edge game consoles and accessories, catering to casual and hardcore gamers alike.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* why us */}
            <div className="bg-slate-300 my-20 py-14 px-5 md:px-28">
                <div className="flex items-center gap-2 px-2 justify-center md:justify-start mb-5 md:mb-0">
                    <RxBorderDashed className='-mt-5 hidden md:block' />
                    <h1 className="text-2xl font-semibold mb-6">
                        Why Choose Us
                    </h1>
                </div>
                <div className="carousel w-full py-2 md:py-4 relative">
                    <div className={`carousel-item w-full ${currentSlide === 1 ? "block" : "hidden"}`}>
                        <div className="text-center space-y-3 my-5">
                            <div className="flex gap-1 justify-center items-center">
                                <MdOutlineHighQuality size='50px' />
                                <h3 className='text-xl font-semibold'>Quality Assurance</h3>
                            </div>
                            <p className='text-slate-700 md:px-20 px-5'>
                                We only stock products from reputable brands known for their quality and reliability. Every device undergoes thorough testing to ensure it meets our high standards.
                            </p>
                        </div>
                    </div>
                    <div className={`carousel-item w-full ${currentSlide === 2 ? "block" : "hidden"}`}>
                        <div className="text-center space-y-3 my-5">
                            <div className="flex justify-center items-center">
                                <MdAttachMoney size='30px' />
                                <h3 className='text-xl font-semibold'>Competitive Prices</h3>
                            </div>
                            <p className='text-slate-700 md:px-20 px-5'>
                                We strive to offer the best prices on the market, making advanced technology accessible to everyone.
                            </p>
                        </div>
                    </div>
                    <div className={`carousel-item w-full ${currentSlide === 3 ? "block" : "hidden"}`}>
                        <div className="text-center space-y-3 my-5">
                            <div className="flex gap-1 justify-center items-center">
                                <MdSupportAgent size='40px' />
                                <h3 className='text-xl font-semibold'>Customer Support</h3>
                            </div>
                            <p className='text-slate-700 md:px-20 px-5'>
                                Our dedicated customer service team is here to help you with any questions or concerns. We are committed to providing prompt and helpful assistance.
                            </p>
                        </div>
                    </div>
                    <div className={`carousel-item w-full ${currentSlide === 4 ? "block" : "hidden"}`}>
                        <div className="text-center space-y-3 my-5">
                            <div className="flex gap-1 justify-center items-center">
                                <FaShippingFast size='40px' />
                                <h3 className='text-lg sm:text-xl font-semibold'>Fast & Secure Shipping</h3>
                            </div>
                            <p className='text-slate-700 md:px-20 px-5'>
                                We understand the excitement of receiving a new gadget, so we ensure your orders are processed quickly and shipped securely to your doorstep.
                            </p>
                        </div>
                    </div>
                    <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button onClick={prevSlide} className="md:btn md:btn-circle">❮</button>
                        <button onClick={nextSlide} className="md:btn md:btn-circle">❯</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
