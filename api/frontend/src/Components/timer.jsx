import {useState, useEffect} from 'react';
import '../index.css';
import {getRemainingTimeUntilMsTimestamp} from './timerUtils/CountdownTimerUtils';

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}
// function that makes the countdown timer for the tasks
const CountDownTimer = ({countdownTimestampMs}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
    // reset it self every sec
    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearInterval(intervalId);
    },[countdownTimestampMs]);

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    return(
        <div className="countdown-timer">
            <span>{remainingTime.days}</span>
            <span>:</span>
            <span className="two-numbers">{remainingTime.hours}</span>
            <span>:</span>
            <span className="two-numbers">{remainingTime.minutes}</span>
            <span>:</span>
            <span className="two-numbers">{remainingTime.seconds}</span>
        </div>
    );
}

export default CountDownTimer;