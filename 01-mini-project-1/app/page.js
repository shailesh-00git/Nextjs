import { Heart, TabletSmartphone } from "lucide-react";
export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className=" text-center mt-16">
        <h1 className="text-gray-800 font-bold md:text-6xl text-4xl mb-6">
          Welcome to my website
        </h1>
        <p className="max-w-2xl text-xl text-gray-700 mx-auto mb-8">
          This is simple project that demonstrate the concepto of routing and
          dynamic routing in the Next.js
        </p>

        <div className="space-x-6 mb-6">
          <button className="rounded-xl bg-blue-600 px-6 py-4">
            Get started
          </button>
          <button className="border px-6 py-4 rounded-xl">Learn More</button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 ">
          <div className="text-center max-w-sm shadow-sm border p-4 rounded-lg">
            <div className="h-12 w-12 bg-green-200 rounded-lg shadow-sm flex justify-center items-center mx-auto mb-4 p-1">
              <Heart />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Fast</h3>
            <p className="text-gray-700 italic">
              Built with modern technology for the optimal perfomance
            </p>
          </div>
          <div className="text-center max-w-sm shadow-sm border p-4 rounded-lg">
            <div className="h-12 w-12 bg-purple-200 rounded-lg shadow-sm flex justify-center items-center mx-auto mb-4 p-1">
              <TabletSmartphone />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Fast</h3>
            <p className="text-gray-700 italic">
              Built with modern technology for the optimal perfomance
            </p>
          </div>
          <div className="text-center max-w-sm shadow-sm border p-4 rounded-lg">
            <div className="h-12 w-12 bg-blue-200 rounded-lg shadow-sm flex justify-center items-center mx-auto mb-4 p-1">
              <svg
                h-6
                w-6
                text-blue-600
                fill="none"
                stroke="Currentcolor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Fast</h3>
            <p className="text-gray-700 italic">
              Built with modern technology for the optimal perfomance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
