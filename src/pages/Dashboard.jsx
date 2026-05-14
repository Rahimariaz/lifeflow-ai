import { useState } from "react";
import {
  Brain,
  Activity,
  Zap,
  Calendar,
  Bell,
  Settings,
  
  CheckCircle,
  LayoutDashboard,
  Moon,
  Smile,
} from "lucide-react";

export default function Dashboard() {
  // INPUT STATES
  const [tasks, setTasks] = useState("");
  const [sleep, setSleep] = useState("");
  const [mood, setMood] = useState("");

  // OUTPUT STATES
  const [stress, setStress] = useState(30);
  const [productivity, setProductivity] = useState(85);
  const [summary, setSummary] = useState(
    "Your AI productivity overview is ready."
  );

  const [activeCard, setActiveCard] = useState("dashboard");

  // AI ANALYSIS
  const analyzeProductivity = () => {
    let stressScore = 20;
    let productivityScore = 95;
    let aiSummary = "";

    // TASK ANALYSIS
    if (tasks >= 10) {
      stressScore += 40;
      productivityScore -= 30;
    } else if (tasks >= 6) {
      stressScore += 20;
      productivityScore -= 10;
    }

    // SLEEP ANALYSIS
    if (sleep < 5) {
      stressScore += 35;
      productivityScore -= 25;
    } else if (sleep < 7) {
      stressScore += 15;
      productivityScore -= 10;
    }

    // MOOD ANALYSIS
    if (mood === "bad") {
      stressScore += 25;
      productivityScore -= 20;
    } else if (mood === "normal") {
      stressScore += 10;
    } else if (mood === "good") {
      productivityScore += 10;
    }

    // LIMIT VALUES
    if (stressScore > 100) stressScore = 100;
    if (productivityScore > 100) productivityScore = 100;
    if (productivityScore < 0) productivityScore = 0;

    // AI SUMMARY
    if (stressScore >= 75) {
      aiSummary =
        "High stress detected. Take breaks and focus on fewer tasks.";
    } else if (stressScore >= 50) {
      aiSummary =
        "Moderate stress detected. Maintain balance and manage your time carefully.";
    } else {
      aiSummary =
        "Excellent productivity detected. Your workflow looks balanced and healthy.";
    }

    setStress(stressScore);
    setProductivity(productivityScore);
    setSummary(aiSummary);

    // AUTO OPEN SUMMARY
    setActiveCard("summary");
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#050816] via-[#0B1020] to-[#111827] text-white overflow-hidden">

      {/* SIDEBAR */}
      <div className="w-72 bg-white/5 backdrop-blur-2xl border-r border-white/10 p-6">

        <h1 className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
          LifeFlow AI
        </h1>

        <div className="space-y-4">

          <SidebarButton
            icon={<LayoutDashboard />}
            title="Dashboard"
            onClick={() => setActiveCard("dashboard")}
          />

          <SidebarButton
            icon={<Brain />}
            title="AI Summary"
            onClick={() => setActiveCard("summary")}
          />

          <SidebarButton
            icon={<Activity />}
            title="Stress Level"
            onClick={() => setActiveCard("stress")}
          />

          <SidebarButton
            icon={<Zap />}
            title="Productivity"
            onClick={() => setActiveCard("productivity")}
          />

          <SidebarButton
            icon={<CheckCircle />}
            title="Tasks"
            onClick={() => setActiveCard("tasks")}
          />

          <SidebarButton
            icon={<Calendar />}
            title="Planner"
            onClick={() => setActiveCard("planner")}
          />

          <SidebarButton
            icon={<Bell />}
            title="Notifications"
            onClick={() => setActiveCard("notifications")}
          />

          <SidebarButton
            icon={<Settings />}
            title="Settings"
            onClick={() => setActiveCard("settings")}
          />
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-10 overflow-y-auto">

        {/* HEADER */}
        <div className="mb-12">

          <h1 className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text">
            Welcome Back 👋
          </h1>

          <p className="text-gray-400 text-lg">
            Your intelligent AI productivity assistant is ready.
          </p>
        </div>

        {/* INPUT SECTION */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">

          {/* TASK INPUT */}
          <GlassCard>
            <div className="flex items-center gap-3 mb-5">
              <CheckCircle className="text-blue-400" />
              <h2 className="text-2xl font-bold">
                Daily Tasks
              </h2>
            </div>

            <input
              type="number"
              placeholder="Enter number of tasks"
              value={tasks}
              onChange={(e) => setTasks(e.target.value)}
              className="w-full p-4 rounded-2xl bg-black/30 border border-white/10 outline-none"
            />
          </GlassCard>

          {/* SLEEP INPUT */}
          <GlassCard>
            <div className="flex items-center gap-3 mb-5">
              <Moon className="text-indigo-400" />
              <h2 className="text-2xl font-bold">
                Sleep Hours
              </h2>
            </div>

            <input
              type="number"
              placeholder="Enter sleep hours"
              value={sleep}
              onChange={(e) => setSleep(e.target.value)}
              className="w-full p-4 rounded-2xl bg-black/30 border border-white/10 outline-none"
            />
          </GlassCard>

          {/* MOOD INPUT */}
          <GlassCard>
            <div className="flex items-center gap-3 mb-5">
              <Smile className="text-pink-400" />
              <h2 className="text-2xl font-bold">
                Mood
              </h2>
            </div>

            <select
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              className="w-full p-4 rounded-2xl bg-black/30 border border-white/10 outline-none"
            >
              <option value="">Select Mood</option>
              <option value="good">Good 😊</option>
              <option value="normal">Normal 😐</option>
              <option value="bad">Bad 😔</option>
            </select>
          </GlassCard>
        </div>

        {/* ANALYZE BUTTON */}
        <button
          onClick={analyzeProductivity}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 transition duration-300 px-10 py-5 rounded-3xl text-xl font-bold shadow-2xl mb-12"
        >
          Analyze Productivity
        </button>

        {/* OUTPUT CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">

          {/* AI SUMMARY */}
          <OutputCard
            title="AI Summary"
            icon={<Brain size={42} className="text-pink-400" />}
            color="from-pink-500/20 to-purple-500/20"
            onClick={() => setActiveCard("summary")}
          >
            <p className="text-lg leading-8">
              {summary}
            </p>
          </OutputCard>

          {/* STRESS */}
          <OutputCard
            title="Stress Level"
            icon={<Activity size={42} className="text-yellow-400" />}
            color="from-yellow-500/20 to-orange-500/20"
            onClick={() => setActiveCard("stress")}
          >
            <ProgressBar value={stress} color="bg-yellow-400" />
            <p className="text-lg mt-4">
              {stress}% Stress
            </p>
          </OutputCard>

          {/* PRODUCTIVITY */}
          <OutputCard
            title="Productivity"
            icon={<Zap size={42} className="text-green-400" />}
            color="from-green-500/20 to-emerald-500/20"
            onClick={() => setActiveCard("productivity")}
          >
            <ProgressBar
              value={productivity}
              color="bg-green-400"
            />

            <p className="text-lg mt-4">
              {productivity}% Productivity
            </p>
          </OutputCard>
        </div>

        {/* DETAILS SECTION */}
        <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[40px] p-10 shadow-2xl min-h-[350px]">

          <h2 className="text-5xl font-extrabold mb-8 capitalize bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text">
            {activeCard} Details
          </h2>

          {activeCard === "dashboard" && (
            <div className="space-y-5 text-xl text-gray-300">
              <p>
                Welcome to your AI-powered smart productivity dashboard.
              </p>

              <p>
                Enter your daily workload, sleep hours, and mood
                to get intelligent AI analysis.
              </p>
            </div>
          )}

          {activeCard === "summary" && (
            <div className="space-y-6">
              <p className="text-3xl leading-[60px] text-pink-200">
                {summary}
              </p>
            </div>
          )}

          {activeCard === "stress" && (
            <div className="space-y-6">
              <p className="text-3xl">
                Current Stress Level: {stress}%
              </p>

              <ProgressBar
                value={stress}
                color="bg-yellow-400"
              />

              <p className="text-gray-300 text-lg">
                AI analyzes workload pressure, emotional state,
                and sleep quality to estimate stress level.
              </p>
            </div>
          )}

          {activeCard === "productivity" && (
            <div className="space-y-6">
              <p className="text-3xl">
                Productivity Score: {productivity}%
              </p>

              <ProgressBar
                value={productivity}
                color="bg-green-400"
              />

              <p className="text-gray-300 text-lg">
                Productivity is calculated based on energy,
                sleep balance, and task management.
              </p>
            </div>
          )}

          {activeCard === "tasks" && (
            <div className="space-y-5">
              <p className="text-3xl">
                Total Tasks: {tasks || 0}
              </p>

              <p className="text-gray-300 text-lg">
                Managing too many tasks can reduce productivity
                and increase stress.
              </p>
            </div>
          )}

          {activeCard === "planner" && (
            <div>
              <ul className="space-y-5 text-xl text-gray-300">
                <li>✅ Prioritize important tasks first</li>
                <li>✅ Maintain proper sleep schedule</li>
                <li>✅ Reduce multitasking overload</li>
                <li>✅ Take small breaks for better focus</li>
              </ul>
            </div>
          )}

          {activeCard === "notifications" && (
            <div>
              <p className="text-2xl">
                🔔 No new notifications available.
              </p>
            </div>
          )}

          {activeCard === "settings" && (
            <div>
              <p className="text-2xl">
                ⚙️ Settings panel coming soon.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// SIDEBAR BUTTON
function SidebarButton({ icon, title, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-4 w-full p-4 rounded-2xl bg-white/5 hover:bg-purple-500/20 hover:scale-105 transition duration-300"
    >
      {icon}
      <span className="text-lg">{title}</span>
    </button>
  );
}

// GLASS CARD
function GlassCard({ children }) {
  return (
    <div className="bg-white/10 backdrop-blur-2xl p-8 rounded-[32px] border border-white/10 shadow-2xl hover:scale-105 transition duration-300">
      {children}
    </div>
  );
}

// OUTPUT CARD
function OutputCard({
  title,
  icon,
  color,
  children,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer bg-gradient-to-br ${color} p-8 rounded-[32px] border border-white/10 hover:scale-105 hover:shadow-2xl transition duration-300`}
    >
      <div className="mb-5">{icon}</div>

      <h2 className="text-3xl font-bold mb-5">
        {title}
      </h2>

      {children}
    </div>
  );
}

// PROGRESS BAR
function ProgressBar({ value, color }) {
  return (
    <div className="w-full bg-black/30 rounded-full h-5 overflow-hidden">
      <div
        className={`${color} h-5 rounded-full transition-all duration-500`}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}