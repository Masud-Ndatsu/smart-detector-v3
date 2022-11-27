import React from "react";
import Pest from "../Assets/pest.jpeg";
import Disease from "../Assets/rice disease.jpeg";
import Animal from "../Assets/Animal.webp";
import "../../App.css"

function Features() {
  return (
    <div className="m-8">
      <div className="problems ">
        <div className="container lg:flex gap-5 lg:w-[100%] lg:m-auto">
          <a
            href="#"
            class="flex lg:flex-col items-center bg-white border rounded-lg shadow-md md:flex-round:w-[100%]  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 flex-col"
          >
            <img
              className="object-cover md:w-[100%] lg:w-[100%] rounded-t-lg h-full md:h-auto md:rounded-none md:rounded-l-lg"
              src={Disease}
              alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Pests
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Pest damage is a major limiting factor for global food
                production. Animal pests destroy 8–15% of global wheat, rice.
              </p>
            </div>
          </a>

          <a
            href="#"
            class="flex lg:flex-col items-center bg-white border rounded-lg shadow-md md:flex-rowmd:w-[100%]  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 flex-col"
          >
            <img
              class="object-cover lg:w-[100%] w-full rounded-t-lg h-96 md:h-auto md:w-[100%] md:rounded-none md:rounded-l-lg"
              src={Disease}
              alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Animal
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                The most serious damage from rice blast occurs when the disease
                attacks the nodes just below the head, often causing the stem to
                break
              </p>
            </div>
          </a>

          <a
            href="#"
            class="flex lg:flex-col items-center bg-white border rounded-lg shadow-md md:flex-rowmd:w-[100%]  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 flex-col"
          >
            <img
              class="object-cover lg:w-[100%] rounded-t-lg h-full md:h-auto md:w-[100%] md:rounded-none md:rounded-l-lg"
              src={Disease}
              alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Disease
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                The most serious damage from rice blast occurs when the disease
                attacks the nodes just below the head, often causing the stem to
                break
              </p>
            </div>
          </a>
        </div>
      </div>

      <div className="Content text-center mt-4 p-5">
        <h1 className="font-bold font-sans text-4xl py-5">APP FEATURES</h1>
        <h1>We help farmer to detect rice disease and pest in real-time</h1>
      </div>

      <div className="w-[100%]">
        <div className="features">
          <a
            href="#"
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Portable
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Use Smart Detector wherever you are. No data connection required
              once data sources are downloaded.
            </p>
          </a>

          <a
            href="#"
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Optimized Layout
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              The app is optimized to work on both phones and tablets and
              varying screen sizes.
            </p>
          </a>

          <a
            href="#"
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Import Image
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Upload infected plant Image and Smart Detector Will Analyze and
              gives you the result
            </p>
          </a>

          <a
            href="#"
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Android and IOS Support
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Smart Detector support all version of Android and IOS device
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Features;
