"use client";

import Image from "next/image";
import { FormEvent, useRef, useState } from "react";
import TextNumberCard from "./../components/text-number-card";
import EffectiveNumbers, { Effective } from "./../components/effective-numbers";
import { prefix } from "./prefix";
import { useAppDispatch, useAppSelector, useAppStore } from "@/lib/hooks";
import { setUserName } from "@/lib/features/user-info/userSlice";
import JyotishBabaComponent from "@/components/jyotish-baba";

export default function Home() {
  const userInfo = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch(); //
  const [loaded, setLoaded] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
  });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(formData);
    dispatch(setUserName(formData.name));
    setLoaded(true);
    setTimeout(() => {
      const element = document.getElementById("jyotish-baba");
      element?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }, 1000);
  }

  return (
    <main className="flex flex-col items-center justify-between p-1 sm:p-10 bg-secondary-900">
      {userInfo.name ? (
        <div className="flex flex-col w-full max-w-2xl items-center justify-center">
          <div className="main-page-title">
            {" "}
            Hello, <div className="text-primary-200">{userInfo.name}</div>{" "}
          </div>
          <div className="main-page-description">
            Here is all the information related to your life
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-full max-w-2xl items-center justify-center">
          <div className="main-page-title">
            Empowering Tomorrow with Our Lu shu Grid
          </div>
          <div className="main-page-description">
            Here you will find all the things related to your life and solutions
            to all your problems absolutely free of cost.
          </div>
        </div>
      )}

      <div className="py-16">
        <div className="flex flex-col md:flex-row w-full md:h-[400px] max-w-5xl items-center justify-between space-x-10 space-y-10">
          <form
            className="w-full md:w-[534px] flex flex-col space-y-6 p-3 items-center"
            onSubmit={onSubmit}
          >
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              onChange={(e) => {
                setFormData((pre) => ({ ...pre, name: e.target.value }));
              }}
            />
            <input
              name="dob"
              type="date"
              placeholder="Enter your DOB"
              onChange={(e) => {
                setFormData((pre) => ({ ...pre, dob: e.target.value }));
              }}
            />
            <select
              name="gender"
              required
              onChange={(e) => {
                setFormData((pre) => ({ ...pre, gender: e.target.value }));
              }}
              defaultValue={""}
            >
              <option value="" disabled hidden>
                Select Gender...
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <button className="submit-button" type="submit">
              Submit
            </button>
          </form>

          <div className="relative flex items-center justify-center">
            <div className="absolute">
              <div className=" w-48 h-48 rounded-full bg-gradient-radial from-primary-800 blur-lg"></div>
            </div>
            <Image
              className="z-10"
              src={`${prefix}/icons/wall-stump.png`}
              alt=""
              width={414}
              height={414}
              unoptimized
            />
          </div>
        </div>
      </div>
      {userInfo.name && <JyotishBabaComponent />}
      {userInfo.name && <EffectiveNumbers effective={Effective.MISSING} />}
      {userInfo.name && <EffectiveNumbers effective={Effective.AVAILABLE} />}
    </main>
  );
}
