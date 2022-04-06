import { ChangeEvent, useState } from 'react';

interface RatingSelectProps {
  select: (rating: number) => void;
}

const RatingSelect = ({ select }: RatingSelectProps) => {
  const [selected, setSelected] = useState(10);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelected(Number(e.target.value));
    select(Number(e.target.value));
  };

  return (
    <ul className="rating">
      <li>
        <input
          type="radio"
          id="num1"
          name="rating"
          value="1"
          onChange={handleChange}
          checked={selected === 1}
        />
        <label htmlFor="num1">1</label>
      </li>
      <li>
        <input
          type="radio"
          id="num2"
          name="rating"
          value="2"
          onChange={handleChange}
          checked={selected === 2}
        />
        <label htmlFor="num2">2</label>
      </li>
      <li>
        <input
          type="radio"
          id="num3"
          name="rating"
          value="3"
          onChange={handleChange}
          checked={selected === 3}
        />
        <label htmlFor="num3">3</label>
      </li>
    </ul>
  );
};

export default RatingSelect;
