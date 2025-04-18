import React from "react";
function AppointmentForm({
  PageTitle = "Contact With Us",
  width = "90%",
  height = "h-[25vh]",
}) {
  return (
    <>
      {/* contact us form start */}
      <section className="w-screen xl:h-screen lg:p-8 ">
        <div
          className={`w-[${width}] h-full flex xl:flex-row flex-col justify-between m-auto shadow-[0_0_10px_rgba(0,0,0,0.15)] `}
        >
          <div className="flex flex-col gap-5 items-center justify-center xl:w-[50%] xl:h-full w-full  p-5">
            <div className="lg:text-4xl/15 md:text-3xl sm:text-2xl text-xl font-semibold text-center rounded border-b-3 border-blue-900 ">
              {PageTitle}
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
          <div className={`xl:w-[50%] xl:h-full w-full ${height}`}>
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
    </>
  );
}

export default AppointmentForm;
