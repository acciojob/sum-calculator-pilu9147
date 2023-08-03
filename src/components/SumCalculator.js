import { useState, useEffect } from "react";

const SumCalculator = () => {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    // Calculate the sum whenever 'numbers' changes
    const totalSum = numbers.reduce((acc, num) => acc + num, 0);
    setSum(totalSum);
  }, [numbers]);

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
