import About from "@/components/about/About"
import Info from "@/components/infosection/Info"
import LandingPage from "@/components/landingPage/LandingPage"
import Slider from "@/components/slider/Slider"
import Link from "next/link"
export default function Home() {
  return (
    <div>
   <LandingPage/>
   <About/>
   <Slider/>
   <Info/>  
    </div>
  )
}
