import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { ThemeContext } from "../Context/ThemeContext/ThemeContext";
import { Link } from "react-router";

const Dashboard = () => {
  const { user } = use(AuthContext);
  const { isDarkMode } = use(ThemeContext);

  const [userStats, setUserStats] = useState({
    totalReviews: 0,
    totalFavorites: 0,
  });

  const [recentReviews, setRecentReviews] = useState([]);
  const [recentFavorites, setRecentFavorites] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Fetch user reviews
        const reviewsRes = await fetch(
          `https://foodloverserver.vercel.app/privateFoodCollection?email=${user.email}`,
          {
            headers: {
              authorization: `Bearer ${user.accessToken}`,
            },
          },
        );
        const reviewsData = await reviewsRes.json();
        const reviews = Array.isArray(reviewsData) ? reviewsData : [];

        // Fetch user favorites
        const favoritesRes = await fetch(
          `https://foodloverserver.vercel.app/favoriteCollection?email=${user.email}`,
          {
            headers: {
              authorization: `Bearer ${user.accessToken}`,
            },
          },
        );
        const favoritesData = await favoritesRes.json();
        const favorites = Array.isArray(favoritesData) ? favoritesData : [];

        setUserStats({
          totalReviews: reviews.length,
          totalFavorites: favorites.length,
        });

        setRecentReviews(reviews.slice(0, 3));
        setRecentFavorites(favorites.slice(0, 3));
        setLoader(false);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        setLoader(false);
      }
    };

    if (user && user.email) {
      fetchDashboardData();
    }
  }, [user]);

  if (loader) {
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <span className="loading loading-infinity size-20"></span>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen pb-10 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-2">
            Welcome back, {user.displayName || user.email}!
          </h1>
          <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
            Here's your food review dashboard
          </p>
        </div>

        {/* User Profile Card */}
        <div
          className={`mb-8 p-6 rounded-lg ${
            isDarkMode
              ? "bg-gray-800 border border-gray-700"
              : "bg-white border border-gray-200"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {user.photoURL && (
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="w-20 h-20 rounded-full object-cover border-2 border-red-500"
                />
              )}
              <div>
                <h2 className="text-2xl font-bold">{user.displayName}</h2>
                <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                  {user.email}
                </p>
              </div>
            </div>
            <Link
              to="/MyProfile"
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Edit Profile
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total Reviews Card */}
          <div
            className={`p-6 rounded-lg ${
              isDarkMode
                ? "bg-gradient-to-br from-red-900 to-red-800"
                : "bg-gradient-to-br from-red-100 to-red-50"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p
                  className={`text-sm font-semibold mb-2 ${
                    isDarkMode ? "text-red-200" : "text-red-600"
                  }`}
                >
                  Total Reviews
                </p>
                <h3 className="text-3xl font-bold text-red-600">
                  {userStats.totalReviews}
                </h3>
              </div>
              <div
                className={`text-5xl ${
                  isDarkMode ? "text-red-700" : "text-red-300"
                }`}
              >
                ⭐
              </div>
            </div>
          </div>

          {/* Total Favorites Card */}
          <div
            className={`p-6 rounded-lg ${
              isDarkMode
                ? "bg-gradient-to-br from-pink-900 to-pink-800"
                : "bg-gradient-to-br from-pink-100 to-pink-50"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p
                  className={`text-sm font-semibold mb-2 ${
                    isDarkMode ? "text-pink-200" : "text-pink-600"
                  }`}
                >
                  Favorite Foods
                </p>
                <h3 className="text-3xl font-bold text-pink-600">
                  {userStats.totalFavorites}
                </h3>
              </div>
              <div className="text-5xl">❤️</div>
            </div>
          </div>

          {/* Quick Actions Card */}
          <div
            className={`p-6 rounded-lg ${
              isDarkMode
                ? "bg-gradient-to-br from-orange-900 to-orange-800"
                : "bg-gradient-to-br from-orange-100 to-orange-50"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p
                  className={`text-sm font-semibold mb-2 ${
                    isDarkMode ? "text-orange-200" : "text-orange-600"
                  }`}
                >
                  Quick Action
                </p>
                <Link
                  to="/AddReview"
                  className="text-orange-600 font-bold hover:underline"
                >
                  Add New Review →
                </Link>
              </div>
              <div className="text-5xl">📝</div>
            </div>
          </div>
        </div>

        {/* Recent Reviews Section */}
        <div
          className={`mb-8 p-6 rounded-lg ${
            isDarkMode
              ? "bg-gray-800 border border-gray-700"
              : "bg-white border border-gray-200"
          }`}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Recent Reviews</h2>
            <Link
              to={`/MyReviews/${user.email}`}
              className="text-red-500 hover:text-red-600 font-semibold"
            >
              View All →
            </Link>
          </div>

          {recentReviews.length > 0 ? (
            <div className="space-y-4">
              {recentReviews.map((review) => (
                <div
                  key={review._id}
                  className={`p-4 rounded-lg border ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600"
                      : "bg-gray-50 border-gray-200"
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">{review.foodName}</h3>
                    <span className="text-yellow-500 font-bold">
                      {"★".repeat(review.rating)}
                      {"☆".repeat(5 - review.rating)}
                    </span>
                  </div>
                  <p
                    className={`text-sm mb-2 ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {review.reviewText?.substring(0, 100)}...
                  </p>
                  <div className="flex gap-3">
                    <Link
                      to={`/update/${review._id}`}
                      className="text-sm text-blue-500 hover:underline"
                    >
                      Edit
                    </Link>
                    <span
                      className={`text-sm ${
                        isDarkMode ? "text-gray-500" : "text-gray-500"
                      }`}
                    >
                      •
                    </span>
                    <span
                      className={`text-sm ${
                        isDarkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {new Date(review.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              className={`text-center py-8 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
            >
              <p className="mb-4">
                No reviews yet. Start by adding your first review!
              </p>
              <Link
                to="/AddReview"
                className="inline-block px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Add Review
              </Link>
            </div>
          )}
        </div>

        {/* Recent Favorites Section */}
        <div
          className={`p-6 rounded-lg ${
            isDarkMode
              ? "bg-gray-800 border border-gray-700"
              : "bg-white border border-gray-200"
          }`}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Favorite Foods</h2>
            <Link
              to={`/MyFavorites/${user.email}`}
              className="text-red-500 hover:text-red-600 font-semibold"
            >
              View All →
            </Link>
          </div>

          {recentFavorites.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {recentFavorites.map((favorite) => (
                <div
                  key={favorite._id}
                  className={`p-4 rounded-lg border ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600"
                      : "bg-gray-50 border-gray-200"
                  }`}
                >
                  {favorite.foodImage && (
                    <img
                      src={favorite.foodImage}
                      alt={favorite.foodName}
                      className="w-full h-40 object-cover rounded-lg mb-3"
                    />
                  )}
                  <h3 className="font-semibold mb-2">{favorite.foodName}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-yellow-500 font-bold">
                      ★ {favorite.rating}/5
                    </span>
                    <span
                      className={`text-sm ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      ❤️ Saved
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              className={`text-center py-8 ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              <p>No favorites yet. Start adding your favorite foods!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
