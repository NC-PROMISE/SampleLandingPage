import { useState } from "react";
import sample from "./assets/sample.jpg";

interface Option {
  id: number;
  label: string;
}

export default function PosterSelector() {
  const [selected, setSelected] = useState<number | null>(null);

  const options: Option[] = [
    { id: 1, label: "Display" },
    { id: 2, label: "Promotion" },
    { id: 3, label: "Branding" },
    { id: 4, label: "Announce.." },
  ];

  return (
    <div className="bg-black  text-white px-4">
      
      <h2 className="text-lg font-semibold mb-4">
        What type of posters do you want to create?
      </h2>

      
      <div className="flex gap-4 overflow-x-auto pb-2">
        {options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => setSelected(opt.id)}
            className={`flex flex-col items-center min-w-[100px] rounded-xl p-[2px]
              ${
                selected === opt.id
                  ? "border-2 border-white"
                  : "border border-gray-600"
              }`}
          >
            <div className="bg-black rounded-lg p-2 w-full flex flex-col items-center">
              <img
                src={sample}
                alt={opt.label}
                className="rounded-lg w-full h-24 object-cover"
              />
             
              <span
                className="mt-2 text-sm text-center bg-gray-800 px-3 py-1 rounded-md"
              >
                {opt.label}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}