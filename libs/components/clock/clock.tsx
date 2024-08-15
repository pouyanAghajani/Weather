import React, { useEffect, useState } from 'react';

interface ClockTime {
  hours: number;
  minutes: number;
  seconds: number;
}

const Clock: React.FC = () => {
  const [clock, setClocl] = useState<ClockTime>({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
  });
  useEffect(() => {
    setInterval(() => {
      const now = new Date();
      setClocl({
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      });
    }, 1000);
  });
  return (
    <div className="absolute bg-black/40 p-5 text-5xl  font-semibold text-white">
      Time : {String(clock.hours).padStart(2, '0')}:
      {String(clock.minutes).padStart(2, '0')}:
      {String(clock.seconds).padStart(2, '0')}
    </div>
  );
};

export default Clock;
