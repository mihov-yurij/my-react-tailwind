import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// Компонент Card лучше держать здесь (вне App)
const Card = ({ title, description, image }: { title: string; description: string; image: string }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
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
      </header>
    </div>





  )
}

export default App; // ОБЯЗАТЕЛЬНО ДОБАВЬТЕ ЭТУ СТРОКУ
