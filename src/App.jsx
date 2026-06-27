import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'

/* ===================== HOME ===================== */
function Home() {
  return (
    <div className="container">
      <nav className="navbar">
        <h2 className="nav-logo">NEXORA</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </nav>

      <h1 className="logo">NEXORA</h1>
      <p className="slogan">The Future of Learning</p>

      <Link to="/login">
        <button className="start-btn">Get Started</button>
      </Link>
    </div>
  )
}

/* ===================== LOGIN ===================== */
function Login() {
  return (
    <div className="container">
      <nav className="navbar">
        <h2 className="nav-logo">NEXORA</h2>
      </nav>

      <div className="login-box">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <Link to="/dashboard">
          <button>Login</button>
        </Link>

        <p>Forgot Password?</p>

        <Link to="/">Back Home</Link>
      </div>
    </div>
  )
}

/* ===================== DASHBOARD ===================== */
function Dashboard() {
  return (
    <div className="app-layout">

      <div className="sidebar">
        <h2>NEXORA</h2>

        <Link to="/dashboard">Dashboard</Link>
        <Link to="/notes">Notes</Link>
        <Link to="/ai">AI Assistant</Link>
        <Link to="/settings">Settings</Link>
      </div>

      <div className="main-content">
        <h1>Welcome 👋</h1>
        <p>This is your Nexora Dashboard</p> 

        <div className="dashboard-grid">
  <Link to="/notes" className="card">Notes</Link>

  <Link to="/ai" className="card">AI Assistant</Link>

  <div className="card">Assignments</div>

  <div className="card">Study Groups</div>
</div>
      </div>

    </div>
  )
}

/* ===================== NOTES ===================== */
function Notes() {
  return (
    <div className="main-content">
      <h1>📚 My Notes</h1>
<button
  className="btn"
  onClick={() => alert("Add Note feature coming soon!")}
>
  + Add Note
</button>

      <div className="dashboard-grid">
        <div className="card">Mathematics</div>
        <div className="card">English</div>
        <div className="card">Biology</div>
        <div className="card">Physics</div>
      </div>
    </div>
  )
}

/* ===================== AI ===================== */
function AI() {
  return (
    <div className="main-content">
      <h1>AI Assistant</h1>
      <p>Ask Nexora AI anything.</p>
    </div>
  )
}

/* ===================== SETTINGS ===================== */
function Settings() {
  return (
    <div className="main-content">
      <h1>Settings</h1>
      <p>Manage your account here.</p>
    </div>
  )
}

/* ===================== APP ROUTER ===================== */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  )
}
