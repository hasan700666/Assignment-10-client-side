import React, { use } from "react";
import { ThemeContext } from "../Context/ThemeContext/ThemeContext";

const AboutPage = () => {
  const { isDarkMode } = use(ThemeContext);

  return (
    <div
      className={`min-h-screen py-16 ${
        isDarkMode ? "bg-black text-white" : "bg-black text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-[#bf1e2e]">About </span>
            <span className="text-[#ee1c25]">Food Lover</span>
          </h1>
          <p
            className={`text-lg ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            Your Community for Food Reviews & Culinary Discovery
          </p>
        </div>

        {/* Mission Section */}
        <div
          className={`mb-16 p-8 rounded-lg ${
            isDarkMode
              ? "bg-gray-800 border border-gray-700"
              : "bg-white border border-gray-200"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p
            className={`text-lg leading-relaxed mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
          >
            At Food Lover, we believe that great food experiences should be
            shared and celebrated. Our mission is to create a vibrant community
            where food enthusiasts can discover new cuisines, share their
            authentic reviews, and connect with fellow food lovers from around
            the world.
          </p>
          <p
            className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
          >
            We are dedicated to helping you explore the culinary world, one
            review at a time, while building meaningful connections with others
            who share your passion for food.
          </p>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose Food Lover?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div
              className={`p-6 rounded-lg text-center ${
                isDarkMode
                  ? "bg-gray-800 border border-gray-700"
                  : "bg-white border border-gray-200"
              }`}
            >
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-3">Authentic Reviews</h3>
              <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                Share and discover genuine reviews from real food enthusiasts,
                helping you make informed dining choices.
              </p>
            </div>

            {/* Feature 2 */}
            <div
              className={`p-6 rounded-lg text-center ${
                isDarkMode
                  ? "bg-gray-800 border border-gray-700"
                  : "bg-white border border-gray-200"
              }`}
            >
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-bold mb-3">Save Favorites</h3>
              <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                Bookmark your favorite foods and restaurants for quick access
                later. Build your personal food bucket list.
              </p>
            </div>

            {/* Feature 3 */}
            <div
              className={`p-6 rounded-lg text-center ${
                isDarkMode
                  ? "bg-gray-800 border border-gray-700"
                  : "bg-white border border-gray-200"
              }`}
            >
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-3">Global Community</h3>
              <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                Connect with food lovers worldwide and discover cuisines from
                different cultures and regions.
              </p>
            </div>

            {/* Feature 4 */}
            <div
              className={`p-6 rounded-lg text-center ${
                isDarkMode
                  ? "bg-gray-800 border border-gray-700"
                  : "bg-white border border-gray-200"
              }`}
            >
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold mb-3">Easy Sharing</h3>
              <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                Write detailed reviews with ratings, photos, and comments to
                help others discover great meals.
              </p>
            </div>

            {/* Feature 5 */}
            <div
              className={`p-6 rounded-lg text-center ${
                isDarkMode
                  ? "bg-gray-800 border border-gray-700"
                  : "bg-white border border-gray-200"
              }`}
            >
              <div className="text-4xl mb-4">👨‍🍳</div>
              <h3 className="text-xl font-bold mb-3">Top Bloggers</h3>
              <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                Follow renowned food bloggers and culinary experts to get
                insights and recommendations.
              </p>
            </div>

            {/* Feature 6 */}
            <div
              className={`p-6 rounded-lg text-center ${
                isDarkMode
                  ? "bg-gray-800 border border-gray-700"
                  : "bg-white border border-gray-200"
              }`}
            >
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-3">User-Friendly Design</h3>
              <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                Enjoy a seamless experience with our intuitive interface and
                dark/light mode support.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            By The Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div
              className={`p-6 rounded-lg text-center ${
                isDarkMode
                  ? "bg-gradient-to-br from-red-900 to-red-800"
                  : "bg-gradient-to-br from-red-100 to-red-50"
              }`}
            >
              <div className="text-4xl font-bold text-red-600 mb-2">1000+</div>
              <p className={isDarkMode ? "text-red-200" : "text-red-600"}>
                Food Reviews
              </p>
            </div>
            <div
              className={`p-6 rounded-lg text-center ${
                isDarkMode
                  ? "bg-gradient-to-br from-pink-900 to-pink-800"
                  : "bg-gradient-to-br from-pink-100 to-pink-50"
              }`}
            >
              <div className="text-4xl font-bold text-pink-600 mb-2">500+</div>
              <p className={isDarkMode ? "text-pink-200" : "text-pink-600"}>
                Active Users
              </p>
            </div>
            <div
              className={`p-6 rounded-lg text-center ${
                isDarkMode
                  ? "bg-gradient-to-br from-orange-900 to-orange-800"
                  : "bg-gradient-to-br from-orange-100 to-orange-50"
              }`}
            >
              <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
              <p className={isDarkMode ? "text-orange-200" : "text-orange-600"}>
                Countries
              </p>
            </div>
            <div
              className={`p-6 rounded-lg text-center ${
                isDarkMode
                  ? "bg-gradient-to-br from-yellow-900 to-yellow-800"
                  : "bg-gradient-to-br from-yellow-100 to-yellow-50"
              }`}
            >
              <div className="text-4xl font-bold text-yellow-600 mb-2">
                100+
              </div>
              <p className={isDarkMode ? "text-yellow-200" : "text-yellow-600"}>
                Top Bloggers
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div
          className={`p-8 rounded-lg ${
            isDarkMode
              ? "bg-gray-800 border border-gray-700"
              : "bg-white border border-gray-200"
          }`}
        >
          <h2 className="text-3xl font-bold mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2 text-[#bf1e2e]">
                Authenticity
              </h3>
              <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                We believe in honest, genuine reviews that help people make real
                decisions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-[#ee1c25]">
                Community
              </h3>
              <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                Building a supportive community where everyone's voice matters
                and is respected.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-[#bf1e2e]">
                Innovation
              </h3>
              <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                Continuously improving our platform with new features and better
                experiences.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-[#ee1c25]">
                Accessibility
              </h3>
              <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                Making food discovery accessible to everyone, regardless of
                background.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
