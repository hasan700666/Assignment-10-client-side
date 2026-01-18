import React, { use, useEffect, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext/ThemeContext";

const HighlightStats = () => {
  const { isDarkMode } = use(ThemeContext);
  const [stats, setStats] = useState({
    totalReviews: 0,
    totalUsers: 0,
    totalFoods: 0,
  });
  const [displayedStats, setDisplayedStats] = useState({
    totalReviews: 0,
    totalUsers: 0,
    totalFoods: 0,
  });
  const [isVisible, setIsVisible] = useState(false);

  // Fetch stats from server
  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch total reviews
        const reviewsRes = await fetch(
          "https://foodloverserver.vercel.app/publicFoodCollection",
        );
        const reviewsData = await reviewsRes.json();
        const totalReviews = Array.isArray(reviewsData)
          ? reviewsData.length
          : 0;

        // Fetch total food items (home featured)
        const foodRes = await fetch(
          "https://foodloverserver.vercel.app/publicFoodCollectionHome",
        );
        const foodData = await foodRes.json();
        const totalFoods = Array.isArray(foodData) ? foodData.length : 0;

        setStats({
          totalReviews: totalReviews,
          totalUsers: 500, // Static value as per About page
          totalFoods: totalFoods,
        });

        // Trigger animation
        setIsVisible(true);
      } catch (error) {
        console.error("Error fetching stats:", error);
        setStats({
          totalReviews: 1000,
          totalUsers: 500,
          totalFoods: 100,
        });
        setIsVisible(true);
      }
    };

    fetchStats();
  }, []);

  // Counter animation
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds animation
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setDisplayedStats({
        totalReviews: Math.floor(stats.totalReviews * progress),
        totalUsers: Math.floor(stats.totalUsers * progress),
        totalFoods: Math.floor(stats.totalFoods * progress),
      });

      if (currentStep >= steps) {
        setDisplayedStats(stats);
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible, stats]);

  const StatCard = ({ number, label, icon, gradient }) => (
    <div
      className={`p-8 rounded-2xl text-center transform transition-all duration-500 hover:scale-105 ${
        isDarkMode
          ? `bg-gradient-to-br ${gradient} border border-gray-700 shadow-lg`
          : `bg-gradient-to-br ${gradient} shadow-xl`
      }`}
    >
      <div className="text-5xl mb-4 animate-bounce">{icon}</div>
      <div className="text-5xl font-bold mb-2 text-white">
        {displayedStats[number]}
        <span className="text-3xl">+</span>
      </div>
      <p className="text-lg font-semibold text-white opacity-90">{label}</p>
      <div className="mt-4 w-12 h-1 bg-white bg-opacity-50 rounded-full mx-auto"></div>
    </div>
  );

  return (
    <div
      className={`py-16 px-4 ${
        isDarkMode
          ? "bg-gradient-to-r bg-black"
          : "bg-gradient-to-r from-red-50 via-white to-red-50"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">
            <span className={isDarkMode ? "text-red-400" : "text-[#bf1e2e]"}>
              Our
            </span>
            <span
              className={`ml-3 ${
                isDarkMode ? "text-red-500" : "text-[#ee1c25]"
              }`}
            >
              Community
            </span>
          </h2>
          <p
            className={`text-lg ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Growing every day with passionate food lovers
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <StatCard
            number="totalReviews"
            label="Total Reviews"
            icon="⭐"
            gradient={
              isDarkMode ? "from-red-900 to-red-800" : "from-red-400 to-red-600"
            }
          />
          <StatCard
            number="totalUsers"
            label="Active Users"
            icon="👥"
            gradient={
              isDarkMode
                ? "from-pink-900 to-pink-800"
                : "from-pink-400 to-pink-600"
            }
          />
          <StatCard
            number="totalFoods"
            label="Food Items"
            icon="🍽️"
            gradient={
              isDarkMode
                ? "from-orange-900 to-orange-800"
                : "from-orange-400 to-orange-600"
            }
          />
        </div>

        {/* Bottom Banner */}
        <div
          className={`p-8 rounded-2xl text-center ${
            isDarkMode
              ? "bg-gray-800 border-l-4 border-red-500"
              : "bg-white border-l-4 border-red-500 shadow-lg"
          }`}
        >
          <p className="text-xl font-semibold mb-2">
            Join thousands of food lovers sharing their favorite moments
          </p>
          <p
            className={`text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Share your reviews, discover new cuisines, and build connections
            with fellow food enthusiasts
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="mt-8 flex justify-center gap-4">
          <div
            className={`w-12 h-12 rounded-full ${
              isDarkMode
                ? "bg-gradient-to-r from-red-600 to-red-800"
                : "bg-gradient-to-r from-red-400 to-red-600"
            } opacity-20 animate-pulse`}
          ></div>
          <div
            className={`w-12 h-12 rounded-full ${
              isDarkMode
                ? "bg-gradient-to-r from-pink-600 to-pink-800"
                : "bg-gradient-to-r from-pink-400 to-pink-600"
            } opacity-20 animate-pulse`}
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className={`w-12 h-12 rounded-full ${
              isDarkMode
                ? "bg-gradient-to-r from-orange-600 to-orange-800"
                : "bg-gradient-to-r from-orange-400 to-orange-600"
            } opacity-20 animate-pulse`}
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HighlightStats;
