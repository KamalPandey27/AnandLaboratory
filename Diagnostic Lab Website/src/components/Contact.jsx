import React from "react";
import { testimonial, clock, call, location } from "../assets/index.jsx";
function Contact() {
  return (
    <>
      <main>
        <section
          className="w-screen lg:h-[50vh] h-[40vh] relative flex justify-center items-center"
          style={{ backgroundImage: `url(${testimonial})` }}
        >
          <div className="absolute top-0 left-0 bg-blue-600 opacity-70 w-full h-full z-0"></div>
          <h1 className="text-5xl font-semibold text-white relative">
            Contact Us
          </h1>
        </section>
        {/* contact us form start */}
        <section className="w-screen xl:h-screen lg:p-10 ">
          <div className="w-[90%] h-full flex xl:flex-row flex-col justify-between m-auto shadow-[0_0_10px_rgba(0,0,0,0.15)] ">
            <div className="flex flex-col gap-5 items-center justify-center xl:w-[50%] xl:h-full w-full  p-5">
              <div className="lg:text-4xl/15 md:text-3xl sm:text-2xl text-xl font-semibold text-center rounded border-b-3 border-blue-900 ">
                Contact With Us
              </div>
              <div className="text-center lg:text-[16px] md:text-[15px] text-[14px]">
                If you have any questions please fell free to contact with us.
              </div>
              <form className="w-full h-full flex flex-col gap-2 justify-around cursor-pointer">
                <div className="flex gap-5">
                  <input
                    type="text"
                    placeholder="Name"
                    className="border-1 rounded w-[50%] p-3  cursor-pointer border-gray-400"
                  />
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Email"
                    className="border-1 rounded w-[50%] p-3  cursor-pointer border-gray-400"
                  />
                </div>
                <div className="flex gap-5">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Phone"
                    className="border-1 rounded w-[50%] p-3  cursor-pointer border-gray-400"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Subject"
                    className="border-1 rounded w-[50%] p-3  cursor-pointer border-gray-400"
                  />
                </div>
                <div>
                  <textarea
                    rows={5}
                    name=""
                    id=""
                    placeholder="Your Message"
                    className="border-1 rounded w-full p-3  cursor-pointer border-gray-400"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white p-3 rounded  cursor-pointer hover:bg-white hover:text-black transition-all duration-300 ease-in-out hover:border hover:border-gray-400"
                >
                  Send
                </button>
              </form>
            </div>
            <div className="xl:w-[50%] xl:h-full w-full h-[25vh]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3475.8333418014927!2d76.97678547503693!3d29.404431048611386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dda390ff67635%3A0x8ef81057f3962807!2sBhawna%20Chowk%2C%20Tehsil%20Camp%2C%20Panipat%20Taraf%20Ansar%2C%20Panipat%2C%20Haryana%20132103!5e0!3m2!1sen!2sin!4v1744560877038!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
        {/* contact us section end  */}
        <section className="w-screen h-[25vh]">
          <div className="   bg-black w-[90%] h-full m-auto flex justify-evenly py-2">
            <div className=" bg-blue-600 text-white rounded h-full w-[30%] flex items-center justify-evenly gap-2 p-3">
              <img src={call} alt="call" className="w-[50px]" />
              <div className="flex flex-col gap-2">
                <span>+(91) 8708949157</span>
                <span className="break-all ">kamalpandey0009@gmail.com</span>
              </div>
            </div>
            <div className="bg-blue-600 text-white rounded h-full w-[30%] flex items-center justify-evenly gap-2 p-3">
              <img src={clock} alt="call" className="w-[50px]" />
              <div className="flex flex-col gap-2">
                <span>Mon - Sat : 9AM To 6PM</span>
                <span>Sunday Closed</span>
              </div>
            </div>
            <div className="bg-blue-600 text-white rounded h-full w-[30%] flex items-center justify-evenly gap-2 p-3">
              <img src={location} alt="call" className="w-[50px]" />
              <div className="flex flex-col gap-2 w-[60%]">
                <span>Devi mandir road , bhawna chown , Panipat (132103)</span>
                <span>Haryana , India</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contact;
