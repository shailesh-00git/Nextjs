import React from "react";

function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="md:text-2xl text-md text-gray-800 mb-8">
          We love to hear from you. Send us message we will replay you! as soon
          as possible
        </p>
      </div>
      <div className="grid  md:grid-cols-2 gap-x-8">
        <div className="bg-gray-100 border-gray-950 p-8 shadow-sm rounded-lg ">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Send Us message
          </h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font- text-gray-700 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-0 focus:ring-1 focus:ring-blue-300 focus:border-transparent"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font- text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-0 focus:ring-1 focus:ring-blue-300 focus:border-transparent"
                placeholder="example@gmail.com "
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font- text-gray-700 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-0 focus:ring-1 focus:ring-blue-300 focus:border-transparent"
                placeholder="what is about?"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font- text-gray-700 mb-2"
              >
                Subject
              </label>
              <textarea
                type="text"
                id="message"
                name="message"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-0 focus:ring-1 focus:ring-blue-300 focus:border-transparent"
                placeholder="your message ..."
              />
            </div>
            <button
              type="submit "
              className="bg-blue-500 py-3 text-white duration-300 rounded-lg px-4 text-md w-full hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className=" hidden md:block bg-blue-100 rounded-lg  ">
          <p className=" mt-60 m-4 py-4 rounded-4xl bg-gray-100 text-5xl text-blue-500 text-center">
            Message Us
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
