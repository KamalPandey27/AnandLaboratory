import React, { useState } from "react";
import axios from "axios";

function AppointmentForm({
  PageTitle = "Contact With Us",
  width = "90%",
  height = "h-[25vh]",
}) {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/formdata", formData);
      alert("Form submitted successfully!");
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Error submitting form");
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
                  placeholder="Email"
                  className="border-1 rounded w-[50%] p-3  cursor-pointer border-gray-400"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
              <div className="flex gap-5">
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone"
                  className="border-1 rounded w-[50%] p-3  cursor-pointer border-gray-400"
                  onChange={handleChange}
                  value={formData.phone}
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="border-1 rounded w-[50%] p-3  cursor-pointer border-gray-400"
                  onChange={handleChange}
                  value={formData.subject}
                />
              </div>
              <div>
                <textarea
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
                className="bg-blue-600 text-white p-3 rounded  cursor-pointer hover:bg-white hover:text-black transition-all duration-300 ease-in-out hover:border hover:border-gray-400"
              >
                Send
              </button>
            </form>
          </div>

          <div className={`xl:w-[50%] xl:h-full w-full ${height}`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!..."
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default AppointmentForm;
