import Headline from "../components/Headline"
import AboutMe from "../components/AboutMe"
import Projects from "./Projects"
import { Link } from "react-router-dom"

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
                <Link to='/projects'>View my project library!</Link>
            </div>

        </div>
    )
}

export default Home