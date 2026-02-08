import React from "react";
import TestCard from "../components/TestCard";

function Services() {
  return (
    <>
      {/*  */}
      <div className="bg-[url(/images/bg.jpg)] w-[100vw] h-[50vh] relative flex justify-center items-center bg-center bg-no-repeat bg-cover">
        <div className="absolute h-[50vh] w-[100vw]  bg-blue-700 opacity-60 z-0"></div>
        <div className="z-1 justify-center  flex items-center  relative text-5xl font-bold text-white">
          <div className=""> Services</div>
        </div>
      </div>
      {/*  */}

      {/*  */}

      <div className="flex justify-center mt-10">
        <div className=" flex justify-center cursor-pointer ">
          <input
            type="text"
            placeholder="⌕ Search tests "
            className="hover:border-gray-500 text-lg  border-2 rounded-md p-2 border-gray-300 lg:w-[40vw] cursor-pointer w-[80vw]"
          />
        </div>
      </div>

      <div className="flex justify-center p-10">
        <div className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-10">
          <TestCard
            heading="Weakness"
            rate="₹ 700/-"
            des="Thyroyd + Vitamin B12 + Vitamin D + Hormone Profile"
          />
          <TestCard
            heading="Thyroyd Function Test"
            rate="₹ 1000/-"
            des="T3 + T4 + TSH"
          />
          <TestCard
            heading="Bone Package"
            rate="₹ 500/-"
            des="Calcium + Phosporous + Alkatine Phosporous + Vitamin D"
          />
          <TestCard
            heading="Heart Package"
            rate="₹ 1200/-"
            des="Blood Sugar + Lipid Profile + Cholestrol + HDL + LDL + CRP + SGOT"
          />
          <TestCard
            heading="Hair Loss"
            rate="₹ 600/-"
            des="Thyroyd + Iron Studies + Testosterone + Hormone Profile"
          />
          <TestCard
            heading="Weight Gain/ Loss"
            rate="₹ 1300/-"
            des="Thyroyd + HbA1c + Cortisol + Hormone Profile"
          />
          <TestCard
            heading="Joint Package"
            rate="₹ 300/-"
            des="Calcium + Blood Sugar + ESR + Uric Acid + CRP"
          />
          <TestCard
            heading="Fever Package"
            rate="₹ 400/-"
            des="CBC + ESR + Widal + MP + Urine Analysis"
          />
          <TestCard
            heading="Preganancy Package"
            rate="₹ 800/-"
            des="CBC + Thyroyd Function Test + HIV + Blood Sugar + HCV + VDRL + HbsAg"
          />
          <TestCard
            heading="Diabetic Package"
            rate="₹ 900/-"
            des="Blood Sugar + HBA1c + Lipid Profile + Cholestrol + Triglycerides + HDL + VLDL + Urine Analysis + Urea + Uric Acid"
          />
          <TestCard
            heading="Hypertension Package"
            rate="₹ 1500/-"
            des="Blood Sugar + Cholestrol + Triglycerides + LDL + Sodium + Potassium + Creatinine + Lipid Profile"
          />
        </div>
      </div>
      {/*  */}

      {/*  */}

      <div className="flex justify-center w-full ">
        <div className="flex flex-col lg:flex-row w-full ">
          {/* Card 1 */}
          <div className="flex items-center gap-4 bg-blue-700 text-white p-6 w-full lg:w-1/3">
            <img
              src="images/doc.png"
              alt="Online Reports"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
            />
            <div>
              <h1 className="text-lg sm:text-xl font-semibold mb-1">
                Online Reports
              </h1>
              <p className="text-sm sm:text-base leading-relaxed">
                With reports available online, you can view your results
                anytime, anywhere.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center gap-4 bg-blue-800 text-white p-6 w-full lg:w-1/3">
            <img
              src="images/stetho.png"
              alt="Health Checkups"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
            />
            <div>
              <h1 className="text-lg sm:text-xl font-semibold mb-1">
                Health Checkups
              </h1>
              <p className="text-sm sm:text-base leading-relaxed">
                The best time to go for a health checkup is when you don’t need
                one.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center gap-4 bg-blue-600 text-white p-6 w-full lg:w-1/3">
            <img
              src="images/homee.png"
              alt="Home Collection"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
            />
            <div>
              <h1 className="text-lg sm:text-xl font-semibold mb-1">
                Home Collection
              </h1>
              <p className="text-sm sm:text-base leading-relaxed">
                Covers all the vital parameters of your body with ease.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
    </>
  );
}

export default Services;
