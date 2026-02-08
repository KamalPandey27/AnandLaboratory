import React from "react";
import { LearnMoreVedio } from "../assets/index";
function AboutUs() {
  return (
    <>
      {/*  */}
      <div className="bg-[url(/images/bg.jpg)] w-[100vw] h-[50vh] relative flex justify-center items-center bg-center bg-no-repeat bg-cover">
        <div className="absolute h-full w-full  bg-blue-700 opacity-60 z-0"></div>
        <div className="z-1 justify-center  flex items-center  relative lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold text-white">
          Learn More
        </div>
      </div>
      <div className="w-[100vw] flex justify-between   lg:flex-row flex-col">
        <p className="lg:text-[17px] text-[15px] lg:w-[50vw] w-full text-justify px-5 mt-5">
          <strong>At Anand Lab</strong> , We are revolutionizing the way
          healthcare is delivered. Our platform offers the convenience of
          booking blood tests online with a simple, easy-to-use interface. No
          more waiting in long queues or traveling to clinics — simply schedule
          a blood test, and we’ll send a certified professional to your
          doorstep. Our partnership with trusted, renowned labs like Dr. Lal
          PathLabs, PRL, SRL, Modern Prognosis, and others ensures that you
          receive the most accurate, high-quality test results. We understand
          that life can be busy, and health can't always wait. That’s why we
          provide emergency home visits for sample collection, allowing you to
          get the necessary tests even when you're at home or in need of urgent
          care. Whether it's a routine blood test or a specialized diagnostic
          check, we ensure fast, reliable results and provide your test report
          right at your doorstep. Our expert doctors review every test and offer
          personalized consultations to help you understand your health better.
          We also guarantee fair prices with no hidden costs, ensuring that our
          services are accessible to everyone without compromising on quality.
          Our cutting-edge technology and highly trained lab professionals work
          together to bring you precise results, and our commitment to
          excellence is reflected in the industry awards we’ve received for
          outstanding service. With 24/7 support, you can reach out to us at any
          time for assistance with booking, test results, or any medical
          concerns. We’re here to make healthcare simpler, faster, and more
          accessible — all from the comfort of your home. Beyond diagnostics,
          our mission is to empower individuals with timely health insights that
          enable early detection and prevention of serious conditions. We place
          a strong emphasis on patient safety, data privacy, and hygiene,
          ensuring that all sample collection procedures follow strict medical
          protocols. Our digital reports are easy to understand, securely
          stored, and instantly accessible from any device, helping you track
          your health history effortlessly. By combining compassionate care with
          advanced technology, we aim to build a healthcare ecosystem that
          prioritizes trust, transparency, and long-term well-being. With us,
          quality healthcare is no longer limited by location, time, or
          convenience — it’s designed around you.
        </p>
        <div className="lg:w-[50vw] w-full  h-[100vh]">
          <video
            src={LearnMoreVedio}
            loop
            autoPlay
            muted
            className="w-full h-full object-cover object-center-right"
          ></video>
        </div>
      </div>

      {/*  */}
    </>
  );
}

export default AboutUs;
