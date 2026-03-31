const Home = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <div className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Coaching Platform
        </h1>
        <p className="text-lg">
          Prepare for UPSC with the best guidance 🚀
        </p>
      </div>

      {/* COURSES SECTION */}
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Our Popular Courses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* CARD 1 */}
          <div className="border p-4 rounded shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold">GS Foundation</h3>
            <p className="text-gray-600">Complete UPSC preparation</p>
          </div>

          {/* CARD 2 */}
          <div className="border p-4 rounded shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold">CSAT Course</h3>
            <p className="text-gray-600">Aptitude & reasoning</p>
          </div>

          {/* CARD 3 */}
          <div className="border p-4 rounded shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold">Test Series</h3>
            <p className="text-gray-600">Practice with real exams</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;