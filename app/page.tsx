"use client"
import { Eye, RotateCw } from "lucide-react";
import Image from "next/image";
import PersonalDetailsForm from "./components/PersonalDetailsForm";
import { useState } from "react";
import { PersonalDetails } from "@/type";
import { personalDetailsPreset } from "@/preset";
import CVPreview from "./components/CVPreview";

export default function Home() {

  const [personalDetails, setPersonalDetails] = useState<PersonalDetails>(personalDetailsPreset);
  const [file, setFile] = useState<File | null>(null);
  const [theme, setTheme] = useState<string>('sunset');
  const [zoom, setZoom] = useState<number>(163);

  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];

  return (
    <div>

      <div className="hidden lg:block">
        <section className="flex items-center h-screen">

          <div className="w-1/3 h-full p-10 bg-base-200 scrollable no-scrollbar">
            <div className="mb-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold italic">
                CV 
                <span className="text-primary">Builder</span>
              </h1>
              <button className="btn btn-primary">
                Preview <Eye className="w-4" />
              </button>
            </div>

            <div className="flex flex-col gap-6 rounded-lg">

              <div className="flex justify-between items-center">
                <h1 className="badge badge-primary badge-outline">Who are you ?</h1>
                <button className="btn btn-primary btn-sm">
                  <RotateCw className="w-4" />
                </button>
              </div>

              <PersonalDetailsForm
                personalDetails={personalDetails}
                setPersonalDetails={setPersonalDetails}
                setFile={setFile}
              />

              <div className="flex justify-between items-center">
                <h1 className="badge badge-primary badge-outline">Who are you ?</h1>
                <button className="btn btn-primary btn-sm">
                  <RotateCw className="w-4" />
                </button>
              </div>
            </div>

          </div>

          <div className="w-2/3 h-full bg-base-100 bg-[url('/file.svg')] bg-cover bg-center scrollable-preview relative">

            <div className="flex items-center justify-center fixed z-[999] top-5 right-5">
              <input
                type="range"
                min={50}
                max={200}
                value={zoom}
                onChange={(e) => setZoom(Number(e.target.value))}
                className="range range-xs range-primary"
              />
              <p className="ml-4 text-sm text-primary">{zoom}%</p>
            </div>

            <select value={theme} onChange={(e) => setTheme(e.target.value)} className="select select-bordered select-sm top-12 right-5 fixed z-[999]">
              {themes.map((themeName) => (
                <option key={themeName} value={themeName}>{themeName}</option>
              ))}
            </select>

            <div 
              className="flex justify-center items-center"
              style={{
                transform: `scale(${zoom / 200})`
              }}
            >
              <CVPreview 
                personalDetails={personalDetails}
                file={file}
                theme={theme}
              />
            </div>
          </div>

        </section>
      </div>

      <div className="lg:hidden">
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-3xl font-bold">
                Sorry, the CV builder is only accessible on computer
              </h1>
              <Image
                src="/sad-sorry.gif"
                width={500}
                height={500}
                alt="Picture of the author"
                className="mx-auto my-6"
              />
              <p className="py-6">
                If you want to create and customize your CV, please use a
                computer. Thanks for your comprehension.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
