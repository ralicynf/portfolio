import Headline from "../components/Headline"
import AboutMe from "../components/AboutMe"
import Projects from "./Projects"

const Home = () => {

    return (
        <div>
            <div className="box">
                <Headline />
            </div>
            <div className="box">
                <AboutMe />
            </div>
            <div className="box">
                <Projects />
            </div>

        </div>
    )
}

export default Home