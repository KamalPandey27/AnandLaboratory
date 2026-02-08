import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { BookTestVideo } from "../assets/index";
import { useNavigate } from "react-router-dom";

function BookTest({ PageTitle = "Book Your Test", width = "100%" }) {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    phoneNumber: "",
    date: "",
    message: "",
  });

  // otp
  const [otpVerifyStep, setOtpVerifyStep] = useState(false);

  const navigate = useNavigate();
  // Handle submit button
  const [SubmitBtn, setSubmitBtn] = useState("bg-blue-600 text-white");
  const [btnValue, setBtnValue] = useState("Book Slot");
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit form
  const sendOTP = async (e) => {
    e.preventDefault();
    setSubmitBtn("bg-green-600 text-white border");
    setBtnValue("Form Submitting...");

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/booking/send-otp`,
        formData,
      );

      if (res.status === 201) {
        setOtpVerifyStep(true);
        toast.success("Otp Sent to your phone number");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong while submitting form");
    } finally {
      // ✅ Always reset button
      setBtnValue("verifyOTP");
      setSubmitBtn("bg-blue-600 text-white");
    }
  };

  const verifyOTP = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/booking/verify-otp`,
        formData,
      );

      console.log(response);

      if (response.data.data.success) {
        setOtpVerifyStep(false);
        setBtnValue("Book Slot");
        navigate("/BookTest/payment");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="relative w-screen xl:h-screen overflow-x-hidden">
        <div className={`w-[${width}] h-full flex md:flex-row flex-col   `}>
          <div className="flex flex-col gap-5  items-center justify-center xl:w-[50%] xl:h-full w-full p-5 shadow-[inset_0_0_10px_rgba(0,0,0,0.15)]">
            <div className="lg:text-4xl/15 md:text-3xl sm:text-2xl text-xl font-semibold text-center rounded border-b-3 border-blue-900 ">
              {PageTitle}
            </div>
            <div className="text-center lg:text-[16px] md:text-[15px] text-[14px]">
              If you have any questions please feel free to contact with us.
            </div>
            <form
              className="w-full h-full flex flex-col gap-2 justify-evenly  cursor-pointer"
              onSubmit={otpVerifyStep ? verifyOTP : sendOTP}
            >
              <div className="flex sm:flex-row flex-col lg:gap-5 md:gap-3 gap-1">
                <input
                  required
                  type="text"
                  name="name"
                  disabled={otpVerifyStep}
                  placeholder="Name"
                  className={`border-1 rounded sm:w-[50%] p-3  cursor-pointer border-gray-400 ${otpVerifyStep && " bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed opacity-70"}`}
                  onChange={handleChange}
                  value={formData.name}
                />
                <input
                  type="number"
                  name="age"
                  disabled={otpVerifyStep}
                  placeholder="Enter your Age"
                  className={`border-1 rounded sm:w-[50%] p-3  cursor-pointer border-gray-400 ${otpVerifyStep && " bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed opacity-70"}`}
                  onChange={handleChange}
                  value={formData.age}
                />
              </div>
              <div className="flex sm:flex-row flex-col lg:gap-5 md:gap-3 gap-1">
                <select
                  name=""
                  id=""
                  disabled={otpVerifyStep}
                  required
                  onChange={handleChange}
                  value={formData.gender}
                  className={`border-1 rounded sm:w-[50%] p-3  text-gray-500 cursor-pointer border-gray-400 ${otpVerifyStep && " bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed opacity-70"}`}
                >
                  <option>Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <input
                  type="email"
                  name="email"
                  disabled={otpVerifyStep}
                  placeholder="Email (Optional)"
                  className={`border-1 rounded sm:w-[50%] p-3  cursor-pointer border-gray-400 ${otpVerifyStep && " bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed opacity-70"}`}
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
              <div className="flex sm:flex-row flex-col lg:gap-5 md:gap-3 gap-1">
                <input
                  required
                  type="text"
                  disabled={otpVerifyStep}
                  name="phoneNumber"
                  maxLength="10"
                  inputMode="numeric"
                  pattern="[6-9]{1}[0-9]{9}"
                  placeholder="Phone"
                  className={`border-1 rounded sm:w-[50%] p-3  cursor-pointer border-gray-400 ${otpVerifyStep && " bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed opacity-70"}`}
                  value={formData.phoneNumber}
                  onChange={(e) => {
                    const { name, value } = e.target;
                    if (
                      value.length == 10 &&
                      !/^[6-9]{1}[0-9]{9}$/.test(value)
                    ) {
                      alert("Please enter Correct mobile Number");
                      return;
                    } else {
                      setFormData({ ...formData, [name]: value });
                    }
                  }}
                />
                <div
                  className={` text-gray-500 border-1 rounded sm:w-[50%] p-3 flex gap-3 cursor-pointer border-gray-400 ${otpVerifyStep && " bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed opacity-70"}`}
                >
                  <label htmlFor="date">Select Date</label>
                  <input
                    required
                    type="date"
                    id="date"
                    disabled={otpVerifyStep}
                    min={new Date().toISOString().split("T")[0]}
                    name="date"
                    className="text-gray-500"
                    onChange={handleChange}
                    value={formData.date}
                  />
                </div>
              </div>
              <div>
                <textarea
                  required
                  rows={5}
                  name="message"
                  disabled={otpVerifyStep}
                  placeholder="Your Message"
                  className={`border-1 rounded w-full p-3  cursor-pointer border-gray-400 ${otpVerifyStep && " bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed opacity-70"}`}
                  onChange={handleChange}
                  value={formData.message}
                ></textarea>
              </div>
              {otpVerifyStep && (
                <div>
                  <input
                    type="number"
                    placeholder="Enter Otp"
                    className="border-1 rounded w-full p-3  cursor-pointer border-gray-400"
                  />
                </div>
              )}
              <button
                type="submit"
                className={`${SubmitBtn} p-3 rounded  cursor-pointer hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out `}
              >
                {btnValue}
              </button>
            </form>
          </div>
          <div className={`xl:w-[50%] xl:h-full w-full  `}>
            <video
              src={BookTestVideo}
              loop
              autoPlay
              muted
              className="w-full h-full object-cover object-center"
            ></video>
          </div>
        </div>
      </section>
    </>
  );
}

export default BookTest;
