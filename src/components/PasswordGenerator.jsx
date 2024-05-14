import { useCallback, useEffect, useRef, useState, useMemo } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const str = useMemo(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()_+{}:><?/";
    return str;
  }, [numberAllowed, characterAllowed]);

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, str]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,99);
    window.navigator.clipboard.writeText(password)
  }, []);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, characterAllowed, generatePassword]);

  return (
    <div className="w-[45vw] h-[30vh] mx-auto shadow-md  rounded-lg gap-4 m-8 text-orange-500 bg-gray-500 flex items-center justify-center flex-col">
      <h1 className="text-2xl mx-auto text-white">Password Generator</h1>
      <div className="flex w-full bg-white rounded-full overflow-hidden ">
        <input
          type="text"
          value={password}
          ref={passwordRef}
          placeholder="Password"
          readOnly
          className="w-full rounded-full px-2 py-2 outline-none text-black bg-white shadow-lg"
        />
        <button onClick={copyToClipboard} className="px-4 py-2 bg-blue-500 hover:bg-blue-900">
          Copy
        </button>
      </div>
      <div className="items-center flex gap-2">
        <input
          onChange={(e) => setLength(e.target.value)}
          className="cursor-pointer"
          type="range"
          value={length}
          name="length"
          id="length"
        />
        <label htmlFor="length">length:{length}</label>
        <input
          onChange={() => setNumberAllowed((prev) => !prev)}
          type="checkbox"
          min={6}
          max={100}
          name=""
          id="numberAllowed"
        />
        <label htmlFor="numberAllowed">numberAllowed</label>
        <input
          onChange={() => setCharacterAllowed((prev) => !prev)}
          type="checkbox"
          min={6}
          max={100}
          name=""
          id="charAllowed"
        />
        <label htmlFor="charAllowed">charAllowed</label>
      </div>
    </div>
  );
}

export default PasswordGenerator;
