import {
  HiSparkles,
  HiBell,
  HiChartBar,
  HiClipboardList,
  HiCalendar,
  HiLightningBolt,
  HiHand,
} from "react-icons/hi"

function Dashboard() {
  return (
  <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-[#050816] via-[#0B1020] to-[#111827] text-white overflow-hidden relative">

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="absolute top-40 left-[40%] w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>

      {/* Sidebar */}
      <div className="w-full md:w-72 bg-white/5 backdrop-blur-xl border-r border-white/10 p-8 z-10">

        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          LifeFlow AI
        </h1>

        <ul className="mt-14 space-y-5 text-gray-300 text-lg">

          <li className="flex items-center gap-4 hover:bg-white/10 px-4 py-4 rounded-2xl hover:text-purple-400 transition duration-300 cursor-pointer">
            📊 Dashboard
          </li>

          <li className="flex items-center gap-4 hover:bg-white/10 px-4 py-4 rounded-2xl hover:text-pink-400 transition duration-300 cursor-pointer">
            🧠 Analysis
          </li>

          <li className="flex items-center gap-4 hover:bg-white/10 px-4 py-4 rounded-2xl hover:text-blue-400 transition duration-300 cursor-pointer">
            📅 Planner
          </li>

          <li className="flex items-center gap-4 hover:bg-white/10 px-4 py-4 rounded-2xl hover:text-gray-100 transition duration-300 cursor-pointer">
            ⚙ Settings
          </li>

        </ul>

      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 z-10">

        {/* Navbar */}
        <div className="flex justify-between items-center">

          <h1 className="text-3xl font-bold">
            Dashboard
          </h1>

          <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-2xl shadow-lg shadow-purple-500/30 hover:scale-105 transition duration-300">
            Profile
          </button>

        </div>

        {/* Welcome Section */}
        <div className="mt-14">

          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent flex items-center gap-4">

            Welcome Back

            <HiHand className="text-yellow-400 animate-bounce" />

          </h1>

          <p className="text-gray-400 mt-5 text-xl">
            Your AI productivity overview is ready.
          </p>

        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
          {/* AI Summary */}
          <div className="bg-white/5 backdrop-blur-xl border border-pink-400/20 hover:border-pink-400/40 p-8 rounded-3xl shadow-[0_0_25px_rgba(236,72,153,0.15)] hover:scale-105 hover:-translate-y-2 transition-all duration-300">

            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <HiSparkles className="text-pink-400" />
              AI Summary
            </h2>

            <p className="mt-5 text-gray-400">
              Your workflow looks highly productive today.
            </p>

            <div className="mt-6 bg-white/10 p-4 rounded-2xl text-sm text-gray-300">
              ⚡ AI suggests focusing on high-priority tasks first.
            </div>

          </div>

          {/* Stress Level */}
          <div className="bg-white/5 backdrop-blur-xl border border-yellow-400/20 hover:border-yellow-400/40 p-8 rounded-3xl shadow-[0_0_25px_rgba(250,204,21,0.15)] hover:scale-105 hover:-translate-y-2 transition-all duration-300">

            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <HiChartBar className="text-yellow-400" />
              Stress Level
            </h2>

            <p className="mt-5 text-gray-400">
              Moderate stress detected.
            </p>

            <div className="w-full bg-white/10 rounded-full h-3 mt-6">
              <div className="bg-yellow-400 h-3 rounded-full w-[65%]"></div>
            </div>

            <p className="mt-3 text-yellow-400 font-semibold">
              Stress Level: 65%
            </p>

          </div>

          {/* Tasks */}
          <div className="bg-white/5 backdrop-blur-xl border border-green-400/20 hover:border-green-400/40 p-8 rounded-3xl shadow-[0_0_25px_rgba(74,222,128,0.15)] hover:scale-105 hover:-translate-y-2 transition-all duration-300">

            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <HiClipboardList className="text-green-400" />
              Tasks
            </h2>

            <div className="mt-5 space-y-4">

              <div className="bg-white/5 p-4 rounded-2xl">
                📌 Finish dashboard UI
              </div>

              <div className="bg-white/5 p-4 rounded-2xl">
                📌 Prepare hackathon presentation
              </div>

              <div className="bg-white/5 p-4 rounded-2xl">
                📌 Connect Gemini API
              </div>

            </div>

          </div>

          {/* Notifications */}
          <div className="bg-white/5 backdrop-blur-xl border border-orange-400/20 hover:border-orange-400/40 p-8 rounded-3xl shadow-[0_0_25px_rgba(251,146,60,0.15)] hover:scale-105 hover:-translate-y-2 transition-all duration-300">

            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <HiBell className="text-orange-400" />
              Notifications
            </h2>

            <div className="mt-5 space-y-3">

              <div className="bg-white/5 p-3 rounded-xl text-gray-300 text-sm">
                ⚡ AI suggests a short break in 20 mins
              </div>

              <div className="bg-white/5 p-3 rounded-xl text-gray-300 text-sm">
                📅 Meeting starts at 4 PM
              </div>

              <div className="bg-white/5 p-3 rounded-xl text-gray-300 text-sm">
                🔥 Productivity increased by 12%
              </div>

            </div>

          </div>

          {/* Planner */}
          <div className="bg-white/5 backdrop-blur-xl border border-purple-400/40 p-8 rounded-3xl shadow-[0_0_35px_rgba(168,85,247,0.25)] hover:scale-105 hover:-translate-y-2 transition-all duration-300">

            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <HiCalendar className="text-blue-400" />
              Planner
            </h2>

            <div className="mt-5 space-y-4 text-gray-300">

              <div className="bg-white/5 p-4 rounded-2xl">
                🕘 Team Meeting — 10 AM
              </div>

              <div className="bg-white/5 p-4 rounded-2xl">
                💻 Coding Session — 1 PM
              </div>

              <div className="bg-white/5 p-4 rounded-2xl">
                🎤 Demo Practice — 5 PM
              </div>

            </div>

          </div>

          {/* Productivity Score */}
          <div className="bg-white/5 backdrop-blur-xl border border-purple-400/20 hover:border-purple-400/40 p-8 rounded-3xl shadow-[0_0_25px_rgba(168,85,247,0.15)] hover:scale-105 hover:-translate-y-2 transition-all duration-300">

            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <HiLightningBolt className="text-purple-400" />
              Productivity Score
            </h2>

            <p className="mt-5 text-gray-400">
              AI detected excellent productivity today.
            </p>

            <div className="w-full bg-white/10 rounded-full h-3 mt-6">
              <div className="bg-purple-400 h-3 rounded-full w-[92%]"></div>
            </div>

            <p className="mt-3 text-purple-400 font-semibold">
              Productivity Score: 92%
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Dashboard