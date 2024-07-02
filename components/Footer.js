import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <section className="border border-t-2 border-slate-300 py-5 sm:px-10 md:px-20 px-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-around">
                <div className="mb-8 lg:mb-0">
                    <h3 className="text-lg font-sans font-bold">ElectroHub</h3>
                    <ul>
                        <li className="my-1"><a href="/" className="text-slate-500 text-sm" target="_blank">License and Certificates</a></li>
                        <li className="my-1"><a href="/" className="text-slate-500 text-sm" target="_blank">Rules and Policies</a></li>
                        <li className="my-1"><a href="/" className="text-slate-500 text-sm" target="_blank">Privacy</a></li>
                        <li className="my-1"><a href="/contact" className="text-slate-500 text-sm" target="_blank">Contact with Us</a></li>
                        <li className="my-1"><a href="/about" className="text-slate-500 text-sm" target="_blank">About us</a></li>
                    </ul>
                </div>
                <div className="mb-8 lg:mb-0">
                    <h3 className="text-lg font-sans font-bold">Guidance</h3>
                    <ul>
                        <li className="my-1"><a href="/" className="text-slate-500 text-sm" target="_blank">Guarantee of product authenticity</a></li>
                        <li className="my-1"><a href="/" className="text-slate-500 text-sm" target="_blank">Conditions for returning goods</a></li>
                        <li className="my-1"><a href="/" className="text-slate-500 text-sm" target="_blank">Way of sending goods</a></li>
                        <li className="my-1"><a href="/" className="text-slate-500 text-sm" target="_blank">Purchase Guide</a></li>
                        <li className="my-1"><a href="/about" className="text-slate-500 text-sm" target="_blank">Discounts</a></li>
                    </ul>
                </div>
                <div className="mb-8 lg:mb-0">
                    <h3 className="text-lg font-sans font-bold">Services</h3>
                    <ul>
                        <li className="my-1"><a href="/" className="text-slate-500 text-sm" target="_blank">Free consult</a></li>
                        <li className="my-1"><a href="/" className="text-slate-500 text-sm" target="_blank">Support</a></li>
                        <li className="my-1"><a href="/" className="text-slate-500 text-sm" target="_blank">Advertise</a></li>
                        <li className="my-1"><a href="/" className="text-slate-500 text-sm" target="_blank">Organizational purchase</a></li>
                        <li className="my-1"><a href="/about" className="text-slate-500 text-sm" target="_blank">About us</a></li>
                    </ul>
                </div>
                <div className="space-y-2 mb-8 lg:mb-0">
                    <h3 className="text-lg font-sans font-bold">Contact with Us</h3>
                    <ul className="flex space-x-3">
                        <li className="my-1"><a href="https://www.linkedin.com/in/masooma-mousavi" target="_blank"><FaLinkedin size='20px' /></a></li>
                        <li className="my-1"><a href="/" target="_blank"><FaFacebook size='20px' /></a></li>
                        <li className="my-1"><a href="/" target="_blank"><FaTelegram size='20px' /></a></li>
                        <li className="my-1"><a href="/" target="_blank"><FaXTwitter size='20px' /></a></li>
                        <li className="my-1"><a href="/" target="_blank"><FaInstagram size='20px' /></a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Footer;