import { NavLink } from "react-router-dom";
import {
  heroImage,
  clock,
  emergency,
  about1,
  about2,
  about3,
  experience,
  award,
  money,
  support,
  doctors,
  lalPath,
  prognosis,
  srl,
  thyrocare,
  modern,
  HomeContactLogo,
  about4,
} from "../assets/index";
import AppointmentForm from "../components/AppointmentForm.jsx";
function Home() {
  return (
    <>
      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section
          className={` lg:h-screen h-[60vh] w-screen  bg-cover bg-center relative  `}
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="lg:translate-25 md:translate-5 md:h-[70%] h-[100%] flex flex-col gap-10 justify-center md:items-start items-center relative p-2">
            <div>
              <h1 className="md:text-5xl sm:text-4xl text-[20px] font-semibold text-white">
                We Can Provide
                <span className="text-blue-500 md:text-5xl sm:text-4xl text-2xl">
                  Medical
                </span>
                Services <br /> That You Can
                <span className="text-blue-500 md:text-5xl sm:text-4xl text-2xl">
                  Trust!
                </span>
              </h1>
            </div>
            <div className="md:pb-3 text-wrap text-white font-semibold md:text-[15px] sm:text-[13px] hidden sm:block ">
              <h2>
                Manage Patients, Book Lab Tests, Download Reports & Handle
                Everything <br /> Easily with Smart Laboratory System
              </h2>
            </div>
            <div className="md:pb-3 text-center text-white font-semibold text-[13px] block sm:hidden ">
              <h2>
                Manage Patients, Book Lab Tests , <br /> Handle Everything
                Easily with Smart Laboratory System
              </h2>
            </div>
            <div className="flex items-center">
              <button className="cursor-pointer sm:w-[160px] w-[130px] sm:text-[16px] text-[14px]  ">
                <NavLink
                  to="/AppointmentForm"
                  className="w-full bg-blue-600  text-white sm:px-4 sm:py-3 px-2 py-2 rounded hover:bg-white hover:text-blue-800   hover:border-1 transition-all duration-300 ease-in-out"
                >
                  Get Appointment
                </NavLink>
              </button>
              <button className="cursor-pointer w-[140px] sm:text-[16px] text-[14px]  ">
                <NavLink
                  to="/LearnMore"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "bg-blue-800 text-white font-semibold"
                        : "bg-gray-700 text-white"
                    } w-full sm:px-4 sm:py-3 px-2 py-2 rounded hover:bg-blue-600 hover:text-white hover:font-semibold  transition-all duration-300 ease-in-out `
                  }
                >
                  Learn More
                </NavLink>
              </button>
            </div>
          </div>
        </section>
        {/* Hero Section Ends Here */}

        {/* Lab Time Section  */}
        <section className="lg:px-10 px-5 lg:h-[40vh] md:h-[35vh] h-[80vh] w-screen flex justify-between flex-wrap md:gap-0 gap-7">
          <div className="md:w-[45%] w-full bg-blue-600 md:h-full h-[50%] flex flex-col justify-around p-7 md:gap-2 lg:gap-0 text-white rounded cursor-pointer hover:-translate-y-2 transition-all duration-300 ease-in-out relative lg:-top-15 -top-7 z-10 hover:shadow-xl/40 hover:shadow-blue-900 overflow-hidden">
            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-black opacity-20 z-1"></div>
            <div className="font-bold lg:text-xl md:text-lg z-20">
              Opening Time
            </div>
            <div className="flex flex-col gap-2 lg:text-[16px] text-[14px] z-20">
              <div className="flex justify-between">
                <div>Monday - Friday</div>
                <div>8AM - 9PM</div>
              </div>

              <div className="flex justify-between">
                <div>Saturday</div>
                <div>9AM - 6PM</div>
              </div>
              <div className="flex justify-between">
                <div>Sunday</div>
                <div>Holiday</div>
              </div>
            </div>
            <button className="z-20">
              <NavLink
                to="/LearnMore"
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "bg-blue-300 text-white border-1 border-blue-600"
                      : "bg-white text-blue-500"
                  } w-[120px] rounded m-auto  font-semibold px-3 py-2 hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out`
                }
              >
                Learn More
              </NavLink>
            </button>
            <img
              className="w-30 absolute -bottom-11 -right-10"
              src={clock}
              alt=""
            />
          </div>
          <div className="md:w-[45%] w-full bg-blue-600 md:h-full h-[50%] flex flex-col justify-around p-7 md:gap-2 lg:gap-0 text-white rounded cursor-pointer hover:-translate-y-2 transition-all duration-300 ease-in-out relative lg:-top-15 -top-7 hover:shadow-xl/40 hover:shadow-blue-900 overflow-hidden">
            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-black opacity-20 z-1"></div>
            <div className="font-bold lg:text-xl md:text-lg z-20">
              Emergency Cases
            </div>
            <div className=" lg:text-[16px] text-[14px] z-20">
              {" "}
              In case of any medical emergency, our laboratory is always ready
              to assist you with quick and accurate diagnostic services. Contact
              us immediately
            </div>
            <button className="z-20">
              <NavLink
                to="/LearnMore"
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "bg-blue-300 text-white border-1 border-blue-600"
                      : "bg-white text-blue-500"
                  } w-[120px] rounded m-auto  font-semibold px-3 py-2 hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out`
                }
              >
                Learn More
              </NavLink>
            </button>
            <img
              className="w-30 absolute -bottom-11 -right-9"
              src={emergency}
              alt=""
            />
          </div>
        </section>
        {/* {lab section ends} */}
        {/* Some Thing About lab section */}
        <section className="flex lg:justify-around justify-between sm:gap-10 gap-5 lg:gap-0 lg:w-screen lg:h-screen flex-wrap lg:p-0 p-5">
          <div className="lg:w-[45%] lg:h-full flex flex-col sm:justify-center h-screen w-screen relative">
            <div className="flex lg:w-[50%] lg:h-[45%] w-[100%] sm:h-[50%] h-[45%]">
              <img
                src={about1}
                alt="about1"
                className="h-full lg:w-full w-[50%] object-cover object-right"
              />
              <img
                src={about2}
                alt="about2"
                className="h-full lg:w-full w-[50%] object-cover object-left"
              />
            </div>

            <img
              src={about3}
              alt="about3"
              className=" sm:flex hidden lg:w-[50%] lg:h-[45%] w-[50%] sm:h-[50%] h-[45%] object-cover object-center"
            />

            <div className="sm:hidden flex lg:w-[50%] lg:h-[45%] w-[100%] sm:h-[50%] h-[45%]">
              <img
                src={about3}
                alt="about3"
                className="h-full lg:w-full w-[50%] object-cover object-right"
              />
              <img
                src={about4}
                alt="about4"
                className="h-full lg:w-full w-[50%] object-cover object-left"
              />
            </div>

            <div className="bg-blue-600 text-white sm:w-[50%] sm:h-[45%] w-full h-[40%] p-5 flex flex-col lg:justify-between justify-evenly items-center sm:absolute sm:right-10 sm:bottom-20">
              <img src={experience} alt="experience" />
              <div className="lg:text-7xl md:text-5xl text-4xl">7</div>
              <div className="lg:text-lg md:text-[16px] text-[15px] text-center">
                Years of Experience
              </div>
            </div>
          </div>

          <div className="lg:w-[45%] lg:h-full md:h-[50vh] sm:h-[70vh] w-screen flex flex-col sm:gap-0 gap-5  justify-around px-5">
            <div className="lg:text-5xl/15 text-center md:text-4xl sm:text-3xl text-2xl">
              Trusted Lab Experts and Latest Lab Technologies
            </div>
            <div className="lg:text-[16px] md:text-[15px] text-[14px] text-center">
              Our certified lab professionals use cutting-edge diagnostic
              equipment to deliver fast, accurate, and reliable test results.
              With a strong focus on precision and innovation, we ensure the
              highest standards in medical testing and patient care.
            </div>
            <div className="h-[45%] w-full flex flex-col justify-center items-center text-white relative">
              <div className="flex gap-5 sm:text-[16px] text-[10px] ">
                <div className="flex flex-col justify-center items-center bg-[#3368c6] px-5 py-12 rounded-[100%]">
                  <span>Awards Winning</span>
                  <span>9</span>
                </div>
                <div className="flex flex-col justify-center items-center bg-[#8a91ac] px-5 py-10 rounded-[100%]">
                  <span>Happy Clients</span>
                  <span>1500+</span>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center bg-[#031b4e] px-5 py-10 rounded-[100%] absolute lg:bottom-2 sm:-bottom-17 -bottom-10 sm:text-[16px] text-[10px]">
                <span>Complete Test</span>
                <span>9999+</span>
              </div>
            </div>
          </div>
        </section>
        {/* Ends of Some Thing About lab section  */}

        {/* Other section start */}
        <section className=" w-screen   py-7 flex justify-center items-center ">
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 w-[90%]  shadow-[0_0_10px_rgba(0,0,0,0.15)] h-[90%] ">
            <div className="bg-white h-full flex flex-col justify-evenly items-center p-5 border-r-1 border-b-1 border-gray-200">
              <img src={award} alt="award" className="w-[70px]" />
              <div className="lg:text-2xl md:text-xl text-lg font-semibold text-center text-blue-950">
                Award Winning
              </div>
              <div className=" text-gray-500 sm:text-[16px] text-[14px] text-justify">
                Recognized for excellence in service and innovation, our team is
                proud to deliver trusted solutions backed by industry awards and
                client satisfaction.
              </div>
            </div>
            <div className="bg-white h-full  flex flex-col justify-evenly items-center p-5 border-r-1 border-b-1 border-gray-200">
              <img src={doctors} alt="award" className="w-[70px]" />
              <div className="lg:text-2xl md:text-xl text-lg font-semibold text-center text-blue-950">
                Expet Doctors
              </div>
              <div className="text-justify text-gray-500 sm:text-[16px] text-[14px]">
                Our team of certified and experienced doctors is committed to
                providing personalized care, accurate diagnoses, and advanced
                treatment backed by the latest medical technology.
              </div>
            </div>
            <div className="bg-white h-full flex flex-col justify-evenly items-center p-5 border-r-1 border-b-1 border-gray-200">
              <img src={money} alt="award" className="w-[70px]" />
              <div className="lg:text-2xl md:text-xl text-lg font-semibold text-center text-blue-950">
                Fair Prices
              </div>
              <div className="text-justify text-gray-500 sm:text-[16px] text-[14px]">
                We believe quality healthcare should be accessible to all —
                that’s why we offer transparent pricing with no hidden costs,
                ensuring real value for your money.
              </div>
            </div>
            <div className="bg-white h-full  flex flex-col justify-evenly items-center p-5 border-gray-300 ">
              <img src={support} alt="award" className="w-[70px]" />
              <div className="lg:text-2xl md:text-xl text-lg font-semibold text-center text-blue-950">
                24/7 Support
              </div>
              <div className="text-justify text-gray-500 sm:text-[16px] text-[14px]">
                Our dedicated support team is available around the clock to
                assist you with any queries, emergencies, or appointment
                needs—anytime, any day.
              </div>
            </div>
          </div>
        </section>
        {/* Other section End */}

        {/* Testimonial section start */}
        <section className="flex items-center sm:gap-0 gap-5 flex-col justify-around m-auto my-5 w-[95vw] xl:h-[50vh]  p-5 md:h-[35vh] sm:h-[45vh] relative shadow-[0_0_10px_rgba(0,0,0,0.15)]">
          <div className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold z-10 text-center">
            Our Collaboration with many Companies{" "}
          </div>
          <div className="grid md:grid-cols-5 grid-cols-3 gap-2 justify-evenly items-center  z-10">
            <img src={lalPath} className="object-contain" alt="lalPath" />
            <img src={thyrocare} className="object-contain w-[250px]" alt="" />
            <img src={srl} className="object-contain" alt="" />
            <img src={prognosis} className="object-contain" alt="" />
            <img src={modern} className=" object-contain" alt="" />
          </div>
        </section>
        {/* Testimonial section ends */}

        {/* Book appointment */}
        <section className="flex flex-col items-center">
          <div className="lg:text-4xl/15 md:text-3xl/15 sm:text-2xl/10 text-xl/10 text-center py-5 font-semibold">
            We Are Always Ready to Help You. <br /> Book An Appointment
          </div>
          <div>
            <img src={HomeContactLogo} alt="HomeContactLogo" />
          </div>
        </section>
        <AppointmentForm PageTitle=" " width="100%" height="h-[40vh]" />
        {/* book appointment ends */}
      </main>
    </>
  );
}

export default Home;
