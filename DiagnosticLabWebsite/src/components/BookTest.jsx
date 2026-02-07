import React, { useState } from "react";
import axios from "axios";

function BookTest({
  PageTitle = "Book Test",
  width = "90%",
  height = "h-[25vh]",
}) {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    gender: "",
    age: "",
    message: "",
    date: "",
  });

  // Handle submit button
  const [SubmitBtn, setSubmitBtn] = useState("bg-blue-600 text-white");
  const [btnValue, setBtnValue] = useState("Book Test");
  // Handle input change

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitBtn("bg-white text-black border");
    setBtnValue("Form Submitting...");

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/booking`,
        formData,
      );

      if (res.data.success) {
        alert("Form Submitted Successfully");

        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          gender: "",
          age: "",
          message: "",
          date: "",
        });
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting form");
    } finally {
      // ✅ Always reset button
      setBtnValue("Book Test");
      setSubmitBtn("bg-blue-600 text-white");
    }
  };

  return (
    <>
      <section className="w-screen xl:h-screen lg:p-8">
        <div
          className={`w-[${width}] h-full flex xl:flex-row flex-col justify-between m-auto shadow-[0_0_10px_rgba(0,0,0,0.15)]`}
        >
          <div className="flex flex-col gap-5 items-center justify-center xl:w-[50%] xl:h-full w-full p-5">
            <div className="lg:text-4xl/15 md:text-3xl sm:text-2xl text-xl font-semibold text-center rounded border-b-3 border-blue-900 ">
              {PageTitle}
            </div>
            <div className="text-center lg:text-[16px] md:text-[15px] text-[14px]">
              If you have any questions please feel free to contact with us.
            </div>
            <form
              className="w-full h-full flex flex-col gap-2 justify-around cursor-pointer"
              onSubmit={handleSubmit}
            >
              <div className="flex gap-5">
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="border-1 rounded w-[50%] p-3  cursor-pointer border-gray-400"
                  onChange={handleChange}
                  value={formData.name}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email (optional)"
                  className="border-1 rounded w-[50%] p-3  cursor-pointer border-gray-400"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
              <div className="flex gap-5">
                <input
                  required
                  type="text"
                  name="phoneNumber"
                  maxLength="10"
                  inputMode="numeric"
                  pattern="[6-9]{1}[0-9]{9}"
                  placeholder="Phone"
                  className="border-1 rounded w-[50%] p-3  cursor-pointer border-gray-400"
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

                <select
                  name="gender"
                  required
                  className="border-1 rounded w-[50%] p-3  cursor-pointer border-gray-400"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="flex gap-5">
                <input
                  required
                  type="number"
                  name="age"
                  placeholder="Age"
                  min={1}
                  className="border-1 rounded w-[50%] p-3  cursor-pointer border-gray-400"
                  onChange={handleChange}
                />
                <input
                  required
                  type="date"
                  name="date"
                  placeholder="Date"
                  min={new Date().toISOString().split("T")[0]}
                  className="border-1 rounded w-[50%] p-3  cursor-pointer border-gray-400"
                  onChange={handleChange}
                  value={formData.date}
                />
              </div>
              <div>
                <textarea
                  required
                  rows={5}
                  name="message"
                  placeholder="Your Message"
                  className="border-1 rounded w-full p-3  cursor-pointer border-gray-400"
                  onChange={handleChange}
                  value={formData.message}
                ></textarea>
              </div>
              <button
                type="submit"
                className={`${SubmitBtn} p-3 rounded  cursor-pointer hover:bg-white hover:text-black transition-all duration-300 ease-in-out hover:border hover:border-gray-400 `}
              >
                {btnValue}
              </button>
            </form>
          </div>

          <div className={`xl:w-[50%] xl:h-full w-full ${height}`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3475.8333418014927!2d76.97678547503693!3d29.404431048611386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dda390ff67635%3A0x8ef81057f3962807!2sBhawna%20Chowk%2C%20Tehsil%20Camp%2C%20Panipat%20Taraf%20Ansar%2C%20Panipat%2C%20Haryana%20132103!5e0!3m2!1sen!2sin!4v1745179017776!5m2!1sen!2sin"
              width="100%"
              height="100%"
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

export default BookTest;
