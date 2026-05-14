function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B1020] text-white">

      <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 w-[400px]">

        <h1 className="text-4xl font-bold mb-8">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 rounded-xl bg-white/10 mb-5 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 rounded-xl bg-white/10 mb-5 outline-none"
        />

        <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 py-4 rounded-xl">
          Login
        </button>

      </div>

    </div>
  )
}

export default Login