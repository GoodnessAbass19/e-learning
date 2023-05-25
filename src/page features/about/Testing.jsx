import React from "react";

const Testing = () => {
  return (
    <div className="w-full h-full">
      <h2 className="text-3xl text-center font-semibold text-white uppercase">
        <span className="border-b-4 border-orange-500">
        checkout our courses
        </span>
      </h2>
      <div className="text-white py-20 relative h-full flex flex-wrap justify-center gap-10 items-center">
        <div className="min-h-[50vh]">
          <img src="/cyber-2.jpg" className=" max-w-[500px] w-auto" />
          <span className="mt-3 block text-2xl font-semibold text-white">
            CC- Certified in Cybersecurity <br />
            <span>
              <button className="bg-orange-500 text-white p-1.5 m-2.5 rounded-md text-lg font-normal">
                Register
              </button>
            </span>
          </span>
        </div>
        <div className="min-h-[50vh]">
          <img src="/cyber-5.jpg" className="max-w-[500px] w-auto h-" />
          <span className="mt-3 block text-2xl font-semibold text-white">
            Security Plus training <br />
            <span>
              <button className="bg-orange-500 text-white p-1.5 m-2.5 rounded-md text-lg font-normal">
                Register
              </button>
            </span>
          </span>
        </div>
        <div className="min-h-[50vh]">
          <img src="/cyber-5.jpg" className="max-w-[500px] w-auto" />
          <span className="mt-3 block text-2xl font-semibold text-white">
            Mentorship <br />
            <span>
              <button className="bg-orange-500 text-white p-1.5 m-2.5 rounded-md text-lg font-normal">
                Register
              </button>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testing;
