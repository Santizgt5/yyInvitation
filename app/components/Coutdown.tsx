"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string;
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [mounted, setMounted] = useState(false);

  const calculateTimeLeft = () => {
    const difference =
      new Date(targetDate).getTime() - Date.now();

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

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [mounted, targetDate]);

  // 👇 el return condicional VA AL FINAL
  if (!mounted) return null;

  return (
    <div className="flex gap-4 font-elegant tracking-[0.2em] justify-center">
      <TimeCard label="Días" value={timeLeft.days} />
      <TimeCard label="Horas" value={timeLeft.hours} />
      <TimeCard label="Min" value={timeLeft.minutes} />
      <TimeCard label="Seg" value={timeLeft.seconds} />
    </div>
  );
}

function TimeCard({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center
      w-16 h-17 sm:w-24 sm:h-28
      bg-zinc-900/40
      backdrop-blur-md
      border border-white/10
      rounded-xl
      text-white
      shadow-md
      transition-transform duration-300
      hover:scale-105
    ">
      <span
        key={value}
        className=" text-2xl
                    sm:text-3xl
                    font-light
                    tracking-[0.25em]
                  text-zinc-100
                    animate-fade"
      >
        {value.toString().padStart(2, "0")}
      </span>
      <span className="mt-0.5 text-[10px] uppercase tracking-[0.25em] text-zinc-400">
        {label}
      </span>
    </div>
  );
}
