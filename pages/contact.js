import { FaPhoneAlt } from "react-icons/fa";
import { PiMapPinLineFill } from "react-icons/pi";
import { BiSolidTime } from "react-icons/bi";

function Contact() {
    return (
        <section className="sm:my-10 my-5 md:mx-20 sm:mx-8 mx-3  p-7 rounde rounded-md bg-slate-200">
            <h2 className="text-lg font-semibold text-slate-800">Contact Form</h2>
            <p className="text-sm text-slate-500">If you have any question about products or need to follow up your purchases, do not hesitate to use this form.</p>
            <form className="mt-5 mb-2 flex flex-wrap">
                <div className="flex flex-col  my-3 md:w-1/2 w-full px-4">
                    <lable className="my-2 text-sm text-slate-800" htmlFor='fullName'>Full Name</lable>
                    <input type="text" id="fullName" className="h-9 bg-slate-100 rounded-md p-2 focus:outline-none focus:border-sky-600 focus:border focus:shadow-sm focus:shadow-sky-700" />
                </div>
                <div className="flex flex-col my-3 md:w-1/2 w-full px-4">
                    <lable className="my-2 text-sm text-slate-800" htmlFor='phone'>Phone No.</lable>
                    <input type="text" id="phone" className="h-9 bg-slate-100 rounded-md p-2 focus:outline-none focus:border-sky-600 focus:border focus:shadow-sm focus:shadow-sky-700" />
                </div>
                <div className="flex flex-col my-3 md:w-1/2 w-full px-4">
                    <lable className="my-2 text-sm text-slate-800" htmlFor='email'>Email</lable>
                    <input type="text" id="email" className="h-9 bg-slate-100 rounded-md p-2 focus:outline-none focus:border-sky-600 focus:border focus:shadow-sm focus:shadow-sky-700" />
                </div>
                <div className="flex flex-col my-3 md:w-1/2 w-full px-4">
                    <lable className="my-2 text-sm text-slate-800" htmlFor='order'>Order Number</lable>
                    <input type="text" id="order" className="h-9 bg-slate-100 rounded-md p-2 focus:outline-none focus:border-sky-600 focus:border focus:shadow-sm focus:shadow-sky-700" />
                </div>
                <div className="flex flex-col my-3 md:w-1/2 w-full px-4">
                    <lable className="my-2 text-sm text-slate-800" htmlFor='message'>Message</lable>
                    <textarea type="text" id="message" rows='5' className="bg-slate-100 rounded-md p-2 focus:outline-none focus:border-sky-600 focus:border focus:shadow-sm focus:shadow-sky-700 " />
                </div>

            </form>
            <div className="container mb-8 mx-auto md:block md:ml-4 ml-0 flex items-center justify-center">
                <button className="sm:py-2 sm:px-5 py-1 px-3 rounded-md border border-white text-sm hover:bg-sky-800 bg-sky-600 text-white">Submit</button>
            </div>
            <div className="pt-2">
                <div className="flex gap-1 px-4 my-5">
                    <FaPhoneAlt size='20px' className="text-slate-800" />
                    <p className="text-sm text-slate-800">
                        <span className="font-semibold">purchasing Number</span>: 4569100023- enter 2 | after sales services: enter 3 - order's follow up: enter 1
                    </p>
                </div>
                <div className="flex gap-1 px-4 my-5">
                    <PiMapPinLineFill size='20px' className="text-slate-800" />
                    <p className="text-sm text-slate-800">
                        <span className="font-semibold">Address(main center)</span>: FRankfort, sharlotter street,2nd building, 234, Digitals building
                    </p>
                </div>
                <div className="flex gap-1 px-4 my-5">
                    <BiSolidTime size='20px' className="text-slate-800" />
                    <p className="text-sm">
                        <span className="font-semibold text-slate-800">Working Time</span>: Monday to Thurseday (8 a.m up to 4 p.m) - Friday(9 a.m up to 2p.m)
                    </p>
                </div>
            </div>
        </section>
    )
}
export default Contact;