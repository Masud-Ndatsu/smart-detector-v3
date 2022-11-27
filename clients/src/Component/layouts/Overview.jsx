import React from 'react'
import Phone from "../Assets/mocup2.png";

function Overview() {
  return (
    <div>
    <div class="relative overflow-hidden ">
    <div class=" bg-white pt-10 pb-14 sm:pt-16 lg:overflow-hidden lg:pt-24 lg:pb-24 backgroungLayer p-6">
      <div class="mx-auto max-w-[1300px] lg:px-8 lg:bg-green-100  rounded-xl">
        <div class="lg:grid lg:grid-cols-2 lg:gap-9">
          <div class="mx-auto max-w-md px-4 text-center sm:max-w-2x1 sm:px-6 lg:flex lg:items-center lg:px-0 lg:text-left">
            <div class="lg:py-24">
              <h1 class="mt-4 font-bold tracking-tight text-4xl text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                <span class="block text-black xl:text-6xl">
                  SMART DETECTOR{" "}
                </span>
                <span class="block text-black">
                  Real Time Disease and Pest Detector
                </span>
              </h1>
              <p class="mt-3 text-base lg:text-gray-600 text-white sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Smart Detect is a flexible and easy use application for
                aiding in the identification of rice diseases and pests .
                The aim is to help farmers to identify problems in the
                growing crop and Prevent loss of rice yield.
              </p>

              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-8"
              >
                Download the App
              </button>
            </div>
          </div>
          <div class="mt-12 hidden lg:block w-[250px]">
            <img class="" src={Phone} alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>

    </div>
  )
}

export default Overview
