import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts"
function Analysis() {
  const data = [
  { day: "Mon", productivity: 60 },
  { day: "Tue", productivity: 80 },
  { day: "Wed", productivity: 75 },
  { day: "Thu", productivity: 90 },
]
  return (
    
    <div className="min-h-screen bg-[#0B1020] text-white p-10">
      <LineChart width={500} height={300} data={data}>
  <XAxis dataKey="day" />
  <YAxis />
  <Tooltip />
  <Line type="monotone" dataKey="productivity" stroke="#a855f7" />
</LineChart>

      <h1 className="text-5xl font-bold">
        AI Analysis
      </h1>

      <p className="mt-4 text-gray-400">
        AI-generated productivity insights.
      </p>

    </div>
    
  )
}

export default Analysis