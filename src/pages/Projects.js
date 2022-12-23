const Projects = () => {

return (
    <div>
        <div className="project">
            <a href="https://languid-hand.surge.sh/" target='_blank' className="project-name" id='tic-tac-toe'>Tic Tac Toe </a>
            <div className="flex-row align-top">
                <div className="tech-list">
                    <h4 className="list">Technologies used:</h4>
                    <li>HTML</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                </div>
                <div className="project-description">
                    <h4>Project description</h4>
                    <p>This was the first web application I ever developed! After only one week of learning to code, I was able to create this primitive, vanilla JavaScript Tic-Tac-Toe game. The inspiration for the game came from my years of nannying. I played many a tic-tac-toe game with the kids and I wanted to create a game that was easy to use and was geared toward kids. The game states in the instructions that 'O's' start the game, but each click after the first will have an indicator on screen of which player's turn it is. Once a square on the game board is clicked, a player is unable to click again on the same square. When the game is over, you are unable to click anywhere on the board, a 'winner' pop-up appears, and the score of the player who won is added to the leaderboard. Additionally, players can restart the game at any time. In addition to coding the project, I also drew the little astronaut mascot on the website. After having only been coding a week when I created this project, I am quite proud of the project I delivered and I enjoy being able to look back and see how far I've come.</p>
                </div>
            </div>
        </div>
        <br />
        <div className="project">
            <a href="https://truthordarerf.surge.sh/" target='_blank' className="project-name" id='truth-or-dare'>Truth or Dare </a>
            <div className="flex-row align-top">
                <div className="tech-list">
                    <h4 className="list">Technologies used:</h4>
                    <li>HTML</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                </div>
                <div className="project-description">
                    <h4>Project description:</h4>
                    <p></p>
                </div>
            </div>
        </div>
        <br />
        <div className="project">
            <h4>Recipedia (coming soon)</h4>
            {/* <div>
                <ul>Technologies used:</ul>
                <li>HTML</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>MongoDB</li>
                <li>Express</li>
                <li>Node</li>
            </div> */}
        </div>

    </div>
)
}

export default Projects