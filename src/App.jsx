import Hero from "./components/Hero"
import Snippet from "./components/Snippet"
import {Feature} from './components/Feature';
import AccessAnywhere from "./components/AccessAnywhere";
import SuperCharge from "./components/SuperCharge";
import Footer from "./components/Footer";
import {Reference} from "./components/Reference";


const App = () => {
  return (
    <div className="max-w-6xl mx-auto text-center mb-40 px-10 pt-16">
      <Hero />
      <Snippet />
      <Feature />
      <AccessAnywhere />
      <SuperCharge />
      <Reference />
      <Footer />
    </div>
  )
}

export default App