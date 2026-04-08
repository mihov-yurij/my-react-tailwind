import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'
import Form from './components/Form'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="App-main">
      <header className="App-header">
        <img src={heroImg} alt="Hero" className="hero-image" />
        <h1>Welcome to My React App</h1>
        <p>This is a simple React application built with Vite.</p>
        
        <div className="card-container">
          <Card
            title="React"
            description="A JavaScript library for building user interfaces."
            image={reactLogo}
          />
          <Card
            title="Vite"
            description="A build tool that aims to provide a faster and leaner development experience for modern web projects."
            image={viteLogo}
          />
        </div>

        {/* Добавляем вашу форму */}
        <div className="form-container">
          <h2>Register</h2>
          <Form />
        </div>
      </header>
      </main>
    </div>
  )
}

export default App


