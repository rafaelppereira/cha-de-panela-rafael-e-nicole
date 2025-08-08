import { useState, useEffect } from "react";
import { CounterTime } from "./time-box";

import settings from '../../settings.json'

export function Counter() {
  const targetDate = new Date(`${settings.date}T03:00:00`);

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [time, setTime] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-3 lg:gap-5">
      <CounterTime value={time.days} label="DIAS" />
      <CounterTime value={time.hours} label="HORAS" />
      <CounterTime value={time.minutes} label="MINUTOS" />
      <CounterTime value={time.seconds} label="SEGUNDOS" />
    </div>
  );
}
