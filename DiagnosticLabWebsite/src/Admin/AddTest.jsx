import { useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AddTestPageVideo } from "../assets/index";
import { TestContext } from "../context/TestContext";
const AddTest = () => {
  const { fetchAllTests } = useContext(TestContext);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [tests, setTests] = useState([""]);
  const [loading, setLoading] = useState(false);
  
  const handleTestChange = (index, value) => {
    const updatedTests = [...tests];
    updatedTests[index] = value;
    setTests(updatedTests);
  };

  const addTestField = () => {
    setTests([...tests, ""]);
  };

  const removeTestField = (index) => {
    const updatedTests = tests.filter((_, i) => i !== index);
    setTests(updatedTests);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = {
      title,
      price,
      tests: tests.filter((t) => t.trim() !== ""),
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/add-test/add-blood-test`,
        formData,
      );
      console.log(response);
      if (response.data.success) {
        toast.success(response.data.message);
        setTitle("");
        setPrice("");
        setTests([""]);
        fetchAllTests();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen relative overflow-hidden  ">
      <div className="bg-black/30 absolute top-0 left-0 w-full h-full z-1"></div>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 "
      >
        <source src={AddTestPageVideo} type="video/mp4" />
      </video>
      {loading && <Loader />}
      <div className="md:w-[50%] w-[90%] mx-auto  text-white  p-6 rounded-lg shadow-md z-2 border border-white">
        <h2 className="text-2xl font-bold mb-6">Add Test</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div>
            <label className="block mb-1 font-medium">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter test title"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block mb-1 font-medium">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter price"
              required
            />
          </div>

          {/* Test Names */}
          <div>
            <label className="block mb-2 font-medium">Test Names</label>

            {tests.map((test, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={test}
                  required
                  onChange={(e) => handleTestChange(index, e.target.value)}
                  className="flex-1 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={`Test name ${index + 1}`}
                />

                {tests.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeTestField(index)}
                    className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={addTestField}
              className="mt-2 text-sm  hover:underline"
            >
              + Add another test
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Save Test
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTest;
