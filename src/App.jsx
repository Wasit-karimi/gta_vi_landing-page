import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Hero from "./sections/Hero"
import NavBar from "./sections/NavBar"
import FirstVideo from "./sections/FirstVideo"
import Jason from "./sections/Jason"
import SecondVideo from "./sections/SecondVideo"

gsap.registerPlugin(ScrollTrigger)

const App = () => {
    return (
        <main>
            <NavBar />
            <Hero />

            <FirstVideo />
            <Jason />

            <SecondVideo />
            {/* <Lucia /> */}
        </main>
    )
}

export default App