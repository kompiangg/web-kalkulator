import { useState } from "react";
import Tombol from "./Tombol";
import Layar from "./Layar";

function Kalkulator() {
  const [value, setValue] = useState('');
  const tombol = [
    'C', 'DEL', '.', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '+',
    '1', '2', '3', '-',
    '0', '='
  ];

  return (
    <div className="kalkulator">
      <Layar value={value} />
      <Tombol semuaTombol={tombol} value={value} setValue={setValue} />
    </div>
  );
}

export default Kalkulator