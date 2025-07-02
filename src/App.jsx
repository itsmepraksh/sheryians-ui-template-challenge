import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import SectionEight from "./layouts/SectionEight"
import SectionFive from "./layouts/SectionFive"
import SectionFour from "./layouts/SectionFour"
import SectionOne from "./layouts/SectionOne"
import SectionSeven from "./layouts/SectionSeven"
import SectionSix from "./layouts/SectionSix"
import SectionThree from "./layouts/SectionThree"
import SectionTwo from "./layouts/SectionTwo"

 

const App = () => {
  return (
    
    <div>
      <Navbar/>
 
      
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <SectionSix/>
      <SectionSeven/>
      <SectionEight/>
      <Footer/>
      
      
      
      
      
      
      
    </div>
  )
}

export default App