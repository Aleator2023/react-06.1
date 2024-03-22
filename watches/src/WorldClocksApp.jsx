import React, { useState, useEffect } from 'react';

const Clock = ({ label, timezone, onDelete }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const getLocalTime = (date, timezone) => {
    const utc = date.getTime() + date.getTimezoneOffset() * 60000;
    const localTime = new Date(utc + 3600000 * timezone);
    return localTime.toLocaleTimeString();
  };

  return (
    <div>
      <h3>{label}</h3>
      <p>{getLocalTime(time, timezone)}</p>
      <button onClick={onDelete}>Удалить</button>
    </div>
  );
};

const WorldClocksApp = () => {
  const [clocks, setClocks] = useState([]);
  const [label, setLabel] = useState('');
  const [timezone, setTimezone] = useState('');

  const addClock = () => {
    setClocks([...clocks, { label, timezone }]);
    setLabel('');
    setTimezone('');
  };

  const deleteClock = (indexToDelete) => {
    setClocks(clocks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Название"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
      />
      <input
        type="text"
        placeholder="Временная зона"
        value={timezone}
        onChange={(e) => setTimezone(e.target.value)}
      />
      <button onClick={addClock}>Добавить</button>

      {clocks.map((clock, index) => (
        <Clock
          key={index}
          label={clock.label}
          timezone={parseFloat(clock.timezone)}
          onDelete={() => deleteClock(index)}
        />
      ))}
    </div>
  );
};

export default WorldClocksApp;
