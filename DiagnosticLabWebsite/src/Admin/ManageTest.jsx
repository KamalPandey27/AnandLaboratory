import React, { useState } from "react";
import { useContext } from "react";
import { TestContext } from "../context/TestContext";
import { AdminImage, Video5 } from "../assets/index";
import { toast } from "react-toastify";
import axios from "axios";
import Loader from "../components/Loader";
function ManageTest() {
  const { tests, fetchAllTests } = useContext(TestContext);
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState("");
  const [updateTestData, setUpdateTestData] = useState({
    testId: edit,
    title: "",
    price: "",
    testNames: [],
  });

  const HandleUpdate = async () => {
    setLoading(true);
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_API_URL}/api/v1/add-test/update-tests`,
        updateTestData,
      );
      if (response.data.success) {
        setEdit("");
        fetchAllTests();
        toast.success(response.data.message);
        console.log(response);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      {loading && <Loader />}
      {/* top part */}
      <div
        className={`w-[100vw] h-[50vh] relative flex justify-center items-center bg-center bg-no-repeat bg-cover `}
        style={{ backgroundImage: `url(${AdminImage})` }}
      >
        <div className="absolute h-[50vh] w-[100vw]  bg-[#002d75] opacity-50 z-0"></div>
        <div className="z-1 justify-center  flex items-center  relative text-5xl font-bold text-white">
          <div className=""> Manage Tests</div>
        </div>
      </div>
      {/* bottom part */}
      <div className="flex w-screen">
        <table className="w-[60%] p-5">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Title
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                ₹Price
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Test Names
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Update
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Cancel
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {tests.map((test) => (
              <tr key={test._id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-sm text-gray-800">
                  {edit === test._id ? (
                    <input
                      onChange={(e) =>
                        setUpdateTestData({
                          ...updateTestData,
                          title: e.target.value,
                        })
                      }
                      type="text"
                      value={updateTestData.title}
                      className={`${edit ? "border-1 p-1 rounded bg-gray-100" : ""}`}
                    />
                  ) : (
                    String(test.title).toUpperCase()
                  )}
                </td>
                <td className="px-4 py-3 text-sm text-gray-800">
                  {edit === test._id ? (
                    <input
                      onChange={(e) =>
                        setUpdateTestData({
                          ...updateTestData,
                          price: e.target.value,
                        })
                      }
                      type="number"
                      value={updateTestData.price}
                      className={`${edit ? "border-1 p-1 rounded bg-gray-100" : ""}`}
                    />
                  ) : (
                    test.price
                  )}
                </td>
                <td className="px-4 py-3 text-sm text-gray-800  flex flex-col gap-1">
                  {edit === test._id ? (
                    <>
                      {updateTestData.testNames.map((item, index) => {
                        return (
                          <input
                            onChange={(e) => {
                              const upDateNames = [...updateTestData.testNames];
                              upDateNames[index] = e.target.value;
                              setUpdateTestData({
                                ...updateTestData,
                                testNames: upDateNames,
                              });
                            }}
                            type="text"
                            key={index}
                            value={updateTestData.testNames[index]}
                            className={`${edit ? "border-1 p-1 rounded bg-gray-100" : ""}`}
                          />
                        );
                      })}
                      <div
                        className="p-2 bg-blue-700 rounded text-white cursor-pointer hover:bg-blue-600 transition-all ease-in-out duration-300"
                        onClick={() => {
                          setUpdateTestData({
                            ...updateTestData,
                            testNames: [...updateTestData.testNames, ""],
                          });
                        }}
                      >
                        Add More Tests
                      </div>
                    </>
                  ) : (
                    test.testNames.join(" , ")
                  )}
                </td>
                {edit === test._id ? (
                  <td
                    className="px-4 py-3  font-semibold text-blue-600 text-md cursor-pointer hover:text-blue-800 transition-all ease-in-out duration-300"
                    onClick={HandleUpdate}
                  >
                    Save
                  </td>
                ) : (
                  <td
                    className="px-4 py-3  font-semibold text-blue-600 text-md cursor-pointer hover:text-blue-800 transition-all ease-in-out duration-300"
                    onClick={() => {
                      setEdit(test._id);
                      setUpdateTestData({
                        testId: test._id,
                        title: test.title,
                        price: test.price,
                        testNames: test.testNames,
                      });
                    }}
                  >
                    Edit
                  </td>
                )}
                <td
                  className="px-4 py-3  font-semibold text-red-600 text-md cursor-pointer hover:text-red-800 transition-all ease-in-out duration-300 "
                  onClick={() => setEdit("")}
                >
                  Cancel
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-[40%] h-screen sticky top-0">
          <video
            src={Video5}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default ManageTest;
