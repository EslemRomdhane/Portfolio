"use client"

import { useState } from "react"

export default function Challenges() {
  const [gameActive, setGameActive] = useState<string | null>(null)
  const [score, setScore] = useState(0)

  return (
    <section className="min-h-screen bg-slate-950 py-20 px-4 pt-32">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-2">
          <h2 className="text-cyan-400 text-sm">eslem@portfolio:~$ ./challenges.sh</h2>
          <h1 className="text-4xl font-bold text-white">Interactive Challenges</h1>
          <p className="text-slate-400">Test your skills with these interactive games</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="bg-slate-900 border border-slate-700 rounded p-6 cursor-pointer hover:border-cyan-400 transition"
            onClick={() => setGameActive("typing")}
          >
            <h3 className="text-cyan-400 font-bold text-lg mb-2">$ docker run typing-challenge</h3>
            <h4 className="text-white font-bold mb-2">Typing Challenge</h4>
            <p className="text-slate-400 text-sm mb-4">Test your typing speed with programming commands</p>
            {gameActive === "typing" ? (
              <div className="bg-slate-800 p-4 rounded">
                <div className="text-green-400 mb-4">Type this command:</div>
                <code className="text-sm">git commit -m "Amazing project"</code>
                <div className="mt-4 text-sm text-slate-400">Press Enter when done</div>
              </div>
            ) : (
              <button className="text-cyan-400 hover:text-cyan-300">Start Challenge →</button>
            )}
          </div>

          <div
            className="bg-slate-900 border border-slate-700 rounded p-6 cursor-pointer hover:border-cyan-400 transition"
            onClick={() => setGameActive("snake")}
          >
            <h3 className="text-cyan-400 font-bold text-lg mb-2">$ docker run terminal-snake</h3>
            <h4 className="text-white font-bold mb-2">Terminal Snake</h4>
            <p className="text-slate-400 text-sm mb-4">Eat good commands, avoid bad ones</p>
            {gameActive === "snake" ? (
              <div className="bg-slate-800 p-4 rounded text-center">
                <div className="text-2xl mb-4">🐍</div>
                <div>
                  Score: <span className="text-cyan-400 font-bold">{score}</span>
                </div>
                <button onClick={() => setGameActive(null)} className="mt-4 text-cyan-400 hover:text-cyan-300">
                  Back
                </button>
              </div>
            ) : (
              <button className="text-cyan-400 hover:text-cyan-300">Play Game →</button>
            )}
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-700 rounded p-6">
          <h3 className="text-cyan-400 font-bold mb-4">$ cat achievements.json</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["First Deploy", "Explorer", "Terminal Master", "Code Magician", "AI Enthusiast", "Team Player"].map(
              (achievement) => (
                <div key={achievement} className="bg-slate-800 p-4 rounded text-center">
                  <div className="text-2xl mb-2">🏆</div>
                  <p className="text-sm text-slate-300">{achievement}</p>
                </div>
              ),
            )}
          </div>
        </div>

        <div className="text-center text-slate-400">
          <p>© 2026 - Built with passion by Eslem Romdhane</p>
          <p className="text-sm mt-2">Powered by React & Next.js</p>
        </div>
      </div>
    </section>
  )
}
