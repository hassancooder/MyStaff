import { useState } from "react";
import { ArrowRight } from "lucide-react";

const ContactSec = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Contact Form */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
                GET IN <span className="text-blue-600 font-bold">TOUCH</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                Please fill out the quick form and we will be in touch with
                lightning speed.
              </p>
            </div>

            {/* FormSubmit.co Integration */}
            <form
              action="https://formsubmit.co/info@diligram.com"
              method="POST"
              className="space-y-6"
            >
              <div className="space-y-2">
                <label htmlFor="name" className="text-gray-700 font-medium">
                  Name :
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none focus:ring-0 transition-colors duration-200"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-gray-700 font-medium">
                  Email :
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none focus:ring-0 transition-colors duration-200"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-gray-700 font-medium">
                  Company :
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none focus:ring-0 transition-colors duration-200"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-gray-700 font-medium">
                  Message :
                </label>
                <textarea
                  id="message"
                  name="message"
                  onChange={handleInputChange}
                  className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 bg-transparent focus:border-blue-600 focus:outline-none focus:ring-0 transition-colors duration-200"
                >
                  {formData.message}
                </textarea>
              </div>

              <div className="pt-8">
                <button
                  type="submit"
                  className="bg-slate-700 hover:bg-slate-800 text-white px-8 py-4 flex items-center gap-3 font-medium transition-colors duration-200 group"
                >
                  Submit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </form>
          </div>

          {/* Right Side - Contact Info and Map */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
                CONNECT <span className="text-blue-600 font-bold">WITH US</span>
              </h2>

              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 font-medium">Phone:</p>
                  <a
                    href="tel:+441223421336"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    +44 (0) 1223 421336
                  </a>
                </div>

                <div className="space-y-2">
                  <p className="text-gray-800 font-semibold text-lg">
                    Diligram Limited
                  </p>
                  <div className="text-gray-600">
                    <p>Diligram Limited, St John’s</p>
                    <p>Innovation Centre, Cowley Road,</p>
                    <p>Milton, Cambridge CB4 0WS</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Container */}
            <div className="relative bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-64 md:h-80 lg:h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2211.2356527280112!2d0.15043072617425676!3d52.23439325733636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876117560691c2f%3A0x2e7e11c28887584e!2sDiligram%20Limited!5e1!3m2!1sen!2s!4v1757433558441!5m2!1sen!2s"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Diligram Limited Location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSec;
