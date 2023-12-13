import music from "../resources/calendarMusic.mp3";
import { useNavigate } from "react-router-dom";
import '../App.css'

function Calendar() {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate("/home");
    };
    function calculateDateDiff() {
        let anniversary = new Date("May 20, 2023 21:30:00");
        let currentTime = new Date();
        let diff = currentTime.getTime() - anniversary.getTime();
        let diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
        let diffHours = Math.floor(diff / (1000 * 60 * 60) - (diffDays * 24));
        let diffMinutes = Math.floor(diff / (1000 * 60) - ((diffDays * 24 * 60) + (diffHours * 60)));
        let diffSeconds = Math.floor(diff / (1000) - ((diffDays * 24 * 60 * 60) + (diffHours * 60 * 60) + (diffMinutes * 60)));

        let days = document.getElementById("days");
        let hours = document.getElementById("hours");
        let minutes = document.getElementById("minutes");
        let seconds = document.getElementById("seconds");
        console.log("DIFF: " + days);
        days.innerText = diffDays.toString() + " Days... ";
        hours.innerHTML = diffHours.toString() + " Hours... ";
        minutes.innerHTML = diffMinutes.toString() + " Minutes... ";
        seconds.innerHTML = diffSeconds.toString() + " Seconds"
    }

    return (
        <div id={"calendar-background"}>
            <div id="center">
                <div id="card">
                    <audio id="audio" loop autoPlay>
                        <source src={music} type="audio/mpeg"/>
                    </audio>
                    {/*<img src={icon} id="calendar-icon"/>*/}
                    <h1>Hey my beautiful Heidi! 🤍</h1>
                    <h2>I've been waiting for you, I need to tell you something...</h2>
                    <h2>First of all... I love you 😌</h2>
                    <h2>Secondly, we've been together for...</h2>
                    <span id="days">xx Days... </span>
                    <span id="hours">xx Hours... </span>
                    <span id="minutes">xx Minutes... </span>
                    <span>and </span>
                    <span id="seconds">xx Seconds</span>
                </div>
                <div class="horizontal-center">
                    <button class="button" onClick={calculateDateDiff}>Click Me 🥰</button>
                    <button class="button" onClick={goToHome}>Take Me Back To Home</button>
                </div>
            </div>
        </div>
    );
}

export default Calendar;
