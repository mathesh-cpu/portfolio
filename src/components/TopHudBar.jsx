import React, { useState, useEffect } from 'react';

export default function TopHudBar() {
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in Indian Standard Time (IST) HH:MM:SS
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setIstTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="darkmate-top-hud">
      {/* Left: Luminous Pill Badge */}
      <div className="hud-status-badge" aria-label="Status: Open to Entry-Level & Fresher Roles">
        <span className="hud-beacon-dot">
          <span className="beacon-ping"></span>
          <span className="beacon-core"></span>
        </span>
        <span className="hud-status-text">Open to Entry-Level &amp; Fresher Roles</span>
      </div>

      {/* Right: Live Dynamic IST Clock */}
      <div className="hud-clock" aria-label="Live Indian Standard Time Clock">
        <span className="clock-label">Local Time (IST)</span>
        <span className="clock-digits">[{istTime || '00:00:00'}]</span>
      </div>
    </div>
  );
}
