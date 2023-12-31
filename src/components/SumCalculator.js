import { useState } from "react";

const SumCalculator = () => {
  const [numbers, setNumbers] = useState([]);
  const sum = numbers.reduce((acc, num) => acc + num, 0);

  const handleNumberChange = (e) => {
    const newNumber = parseInt(e.target.value);
    setNumbers([...numbers, newNumber]);
  };

  return (
    <div>
     <h1>Sum Calculator</h1>
      <input type="number" onChange={handleNumberChange} />
      <h3>Sum: {sum}</h3>
    </div>
  );
};

export default SumCalculator;
