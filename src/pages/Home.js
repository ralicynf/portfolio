import Headline from "../components/Headline"
import AboutMe from "../components/AboutMe"
import Projects from "./Projects"

const Home = () => {

    return (
        <div>
            <div>
                <Headline />
            </div>
            <div>
                <AboutMe />
            </div>
            <div>
                <Projects />
            </div>

        </div>
    )
}

export default Home