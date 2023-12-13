import music from '../resources/homeMusic.mp3'
import background from '../resources/background.PNG'
// import notes from '../resources/notes.PNG'
import calendar from '../resources/calendar.PNG'

import { useNavigate } from "react-router-dom";
import '../App.css'

function Home() {
    const navigate = useNavigate();

    const goToCalendar = () => {
        navigate("/calendar");
    };

    // const goToNotes = () => {
    //     navigate("/notes");
    // };

    return (
        <div>
            <div id="home">
                <audio id="audio" loop autoPlay>
                    <source src={music} type="audio/mpeg"/>
                </audio>
                <img src={background} id="background"/>
                {/*<img src={notes} id="notes" onClick={goToNotes}/>*/}
                <img src={calendar} id="calendar" onClick={goToCalendar}/>
                <div id="message">
                    <h4>Sound on pleaseee ☺️</h4>
                    <h4>Keep checking this site and you many find hidden goodies 👀🎁💐</h4>
                    <h4>P.S. HINT: Tap the calendar</h4>
                    <h4>P.P.S. Everything is draw by me! (I'm and artist now hehe)</h4>
                </div>
            </div>
        </div>
    );
}

export default Home;