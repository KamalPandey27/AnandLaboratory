import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { BookTestVideo } from "../assets/index";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "./Loader";

function BookTest({ PageTitle = "Book Your Test", width = "100%" }) {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [otpData, setOtpData] = useState({});
  const [OTP, setOTP] = useState("");

  // Form State

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    phoneNumber: "",
    date: "",
    message: "",
    testId: id,
    address: "",
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
    setLoading(true);
    setSubmitBtn("bg-green-600 text-white border");
    setBtnValue("Form Submitting...");

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/booking/send-otp`,
        formData,
      );

      if (res.status === 201) {
        setOtpVerifyStep(true);
        setOtpData(res.data.data);
        toast.success(res.data.message);
        setBtnValue("verifyOTP");
      }
    } catch (err) {
      console.error(err);
      setBtnValue("Book Slot");
      toast.error(err.response.data.message);
    } finally {
      setSubmitBtn("bg-blue-600 text-white");
      setLoading(false);
    }
  };

  const verifyOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/booking/verify-otp`,
        {
          bookingId: otpData.bookingId,
          otp: OTP,
        },
      );

      if (response.data.success) {
        const data = response.data.data;
        toast.success(response.data.message);
        setOtpVerifyStep(false);
        setBtnValue("Book Slot");
        setFormData({
          name: "",
          age: "",
          gender: "",
          email: "",
          phoneNumber: "",
          date: "",
          message: "",
          testId: "",
          address: "",
        });
        navigate("/BookTest/payment", {
          state: data,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loader />}
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
                  name="gender"
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
              <div
                className={` ${otpVerifyStep && " bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed opacity-70"} flex flex-col gap-3`}
              >
                <input
                  required
                  type="text"
                  disabled={otpVerifyStep}
                  name="address"
                  placeholder="Enter your Address"
                  className={`border-1 rounded w-full p-3  cursor-pointer border-gray-400 ${otpVerifyStep && " bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed opacity-70"}`}
                  onChange={handleChange}
                  value={formData.address}
                />
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
                    value={OTP}
                    required
                    onChange={(e) => setOTP(e.target.value)}
                    className="border-1 rounded w-full p-3  cursor-pointer border-gray-400"
                  />
                  {otpData.OTP}
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
