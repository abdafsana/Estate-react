import './App.css'
import Header from './components/Header/HeaderComp'
import Section1 from './components/Section/Section1'
import Section2 from './components/Section/Section2'
import Section3 from './components/Section/Section3'
import Section4 from './components/Section/Section4'
import Footer from './components/Footer/Footer'


function App() {
  
  return (
    <>
     <Header />
     <main>
     <Section1 />
     <Section2 />
     <Section3 />
     <Section4 />
     </main>
    <Footer />
    </>
  )
}

export default App
