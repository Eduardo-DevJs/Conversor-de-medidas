import React, { useState } from 'react';
import { FaExchangeAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';


import { MdContentPaste } from 'react-icons/md';

const Home = () => {
  const [pixels, setPixels] = useState<number>(0);
  const [rem, setRem] = useState<number>(0);

  function pxToRem(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = parseFloat(event.target.value);
    const remValue = parseFloat((inputValue / 16).toFixed(3));

    setPixels(inputValue);
    setRem(remValue);
  }

  function copyProp() {
    const remString = rem.toString().replace(',', '.');
    navigator.clipboard.writeText(remString + 'rem');

    alert(`Unidade de medida ${remString}rem copiada com sucesso!`)
  }

  return (
    <div className="bg-zinc-800 flex items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-10">
        <form className="md:flex flex-col items-center gap-5">
          <h1 className="md:text-5xl text-white mb-5 font-medium">
            Converter: PX / REM
          </h1>

          <div className="flex gap-5 items-center">
            <div>
              <label
                className="md:block mb-3 text-center text-white font-medium text-2xl"
                htmlFor=""
              >
                Pixels
              </label>
              <input
                className="md:text-3xl text-center bg-transparent border text-white font-semibold p-5 rounded outline-none"
                type="number"
                onChange={pxToRem}
                value={pixels}
              />
            </div>

            <Link to={'/rem-to-px'} className="mt-10">
              <FaExchangeAlt size={30} color="#FFF" />
            </Link>

            <div>
              <label
                className="md:block mb-3 text-center text-white font-medium text-2xl"
                htmlFor=""
              >
                REM
              </label>
              <input
                className="md:text-3xl text-center bg-transparent border text-cyan-600 font-semibold p-5 rounded outline-none"
                readOnly
                type="number"
                value={rem}
              />
            </div>
          </div>
        </form>

        <div className="relative bg-zinc-900 p-5 w-full">
          <h2 className="md:text-white font-bold text-2xl">
            font-size: {rem}
            <span className="text-yellow-300">rem</span>;
          </h2>

          <MdContentPaste
            onClick={copyProp}
            size={25}
            color="#FFF"
            className="absolute cursor-pointer top-6 right-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
