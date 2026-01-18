import React, { use, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext/ThemeContext";
import toast, { Toaster } from "react-hot-toast";

const ContactPage = () => {
  const { isDarkMode } = use(ThemeContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loader, setLoader] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    // Validate form
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast.error("Please fill in all fields");
      setLoader(false);
      return;
    }

    // Simulate sending email (replace with actual API call)
    setTimeout(() => {
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setLoader(false);
    }, 1500);
  };

  return (
    <div
      className={`min-h-screen py-16 ${
        isDarkMode ? "bg-black text-white" : "bg-black text-white"
      }`}
    >
      <Toaster />
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-[#bf1e2e]">Get in </span>
            <span className="text-[#ee1c25]">Touch</span>
          </h1>
          <p
            className={`text-lg ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Email Card */}
            <div
              className={`p-6 rounded-lg ${
                isDarkMode
                  ? "bg-gray-800 border border-gray-700"
                  : "bg-white border border-gray-200"
              }`}
            >
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                For general inquiries:
              </p>
              <a
                href="mailto:info@foodlover.com"
                className="text-red-500 hover:text-red-600 font-semibold break-all"
              >
                info@foodlover.com
              </a>
            </div>

            {/* Phone Card */}
            <div
              className={`p-6 rounded-lg ${
                isDarkMode
                  ? "bg-gray-800 border border-gray-700"
                  : "bg-white border border-gray-200"
              }`}
            >
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                Call us during business hours:
              </p>
              <a
                href="tel:+1234567890"
                className="text-red-500 hover:text-red-600 font-semibold"
              >
                +1 (234) 567-890
              </a>
            </div>

            {/* Location Card */}
            <div
              className={`p-6 rounded-lg ${
                isDarkMode
                  ? "bg-gray-800 border border-gray-700"
                  : "bg-white border border-gray-200"
              }`}
            >
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                123 Food Street
                <br />
                Culinary City, CC 12345
                <br />
                World
              </p>
            </div>

            {/* Hours Card */}
            <div
              className={`p-6 rounded-lg ${
                isDarkMode
                  ? "bg-gray-800 border border-gray-700"
                  : "bg-white border border-gray-200"
              }`}
            >
              <div className="text-4xl mb-4">🕒</div>
              <h3 className="text-xl font-bold mb-2">Hours</h3>
              <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                Monday - Friday: 9AM - 6PM
                <br />
                Saturday: 10AM - 4PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div
              className={`p-8 rounded-lg ${
                isDarkMode
                  ? "bg-gray-800 border border-gray-700"
                  : "bg-white border border-gray-200"
              }`}
            >
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-red-500 ${
                      isDarkMode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "bg-gray-50 border-gray-300 text-gray-900"
                    }`}
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-red-500 ${
                      isDarkMode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "bg-gray-50 border-gray-300 text-gray-900"
                    }`}
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What is this about?"
                    className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-red-500 ${
                      isDarkMode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "bg-gray-50 border-gray-300 text-gray-900"
                    }`}
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Type your message here..."
                    rows="6"
                    className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-red-500 resize-none ${
                      isDarkMode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "bg-gray-50 border-gray-300 text-gray-900"
                    }`}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loader}
                  className="w-full py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-lg hover:from-red-600 hover:to-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loader ? (
                    <span className="flex items-center justify-center">
                      <span className="loading loading-spinner loading-sm mr-2"></span>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {/* FAQ 1 */}
            <div
              className={`p-6 rounded-lg ${
                isDarkMode
                  ? "bg-gray-800 border border-gray-700"
                  : "bg-white border border-gray-200"
              }`}
            >
              <h3 className="text-lg font-bold mb-2">
                How do I create an account?
              </h3>
              <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                Simply click the "Sign Up" button on our homepage and fill in
                your details. You can sign up with your email or Google account.
              </p>
            </div>

            {/* FAQ 2 */}
            <div
              className={`p-6 rounded-lg ${
                isDarkMode
                  ? "bg-gray-800 border border-gray-700"
                  : "bg-white border border-gray-200"
              }`}
            >
              <h3 className="text-lg font-bold mb-2">
                Can I edit my reviews after posting?
              </h3>
              <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                Yes! You can edit your reviews at any time by going to "My
                Reviews" in your dashboard and clicking the edit button.
              </p>
            </div>

            {/* FAQ 3 */}
            <div
              className={`p-6 rounded-lg ${
                isDarkMode
                  ? "bg-gray-800 border border-gray-700"
                  : "bg-white border border-gray-200"
              }`}
            >
              <h3 className="text-lg font-bold mb-2">
                How do I save favorite foods?
              </h3>
              <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                Click the heart icon on any food item to add it to your
                favorites. You can view all your favorites from your dashboard.
              </p>
            </div>

            {/* FAQ 4 */}
            <div
              className={`p-6 rounded-lg ${
                isDarkMode
                  ? "bg-gray-800 border border-gray-700"
                  : "bg-white border border-gray-200"
              }`}
            >
              <h3 className="text-lg font-bold mb-2">Is there a mobile app?</h3>
              <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                Currently, Food Lover is fully responsive and works great on
                mobile browsers. We're developing dedicated mobile apps for iOS
                and Android.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
