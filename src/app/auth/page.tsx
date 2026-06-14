"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Auth() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <div className="w-screen h-screen flex">
      {/* Login */}
      <div className="w-193.75 h-screen relative bg-amber-300 shadow-[-22px_-1px_34.5px_0px_rgba(255,222,90,0.25)] overflow-hidden">
        <div className="">
          <div className="w-100 h-[588.27px] -left-35 -top-42 absolute origin-top-left rotate-[-28deg] bg-linear-to-b from-yellow-300 from-60% to-amber-400 shadow-[5px_14px_50px_19px_rgba(0,0,0,0.25)] z-0"></div>
          <div className="w-75 h-87.5 left-155 top-66 absolute origin-top-left -rotate-45 bg-linear-to-tl from-yellow-300 from-70% to-amber-400 shadow-[5px_14px_50px_19px_rgba(0,0,0,0.25)] z-0"></div>
          <div className="w-75 h-87.5 -left-5 top-113.75 absolute origin-top-left rotate-18 bg-linear-to-tr from-yellow-300 from-70% to-amber-400 shadow-[5px_14px_50px_19px_rgba(0,0,0,0.25)] z-0"></div>
          <div className="relative z-20">
            <div className="flex justify-center relative top-10">
              <div className="w-112.5">
                <img src="./logo-auth.svg" alt="ShrimpChat Logo" />
              </div>
            </div>
            <div className="flex flex-col mt-36 gap-5">
              <h1 className="justify-center text-center text-black text-4xl font-extrabold font-['Poppins'] [text-shadow:0px_5px_7px_rgb(0_0_0/0.25)]">
                Welcome
              </h1>
              <p className="w-109 mx-auto text-center text-xl font-['Poppins']">
                Log in to your ShrimpChat account to connect with your friends.
              </p>
              <p className="w-109 mx-auto text-center text-md font-['Poppins']">
                Don't have an account?{" "}
                <span className="text-[#FF5200] underline cursor-pointer">
                  Register
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 h-screen flex flex-col justify-center items-center bg-white">
        <Card className="w-126.25 px-6 shadow-none border-none rounded-none ring-0 item-center flex flex-col">
          <CardHeader className="">
            <h1 className="text-center text-black text-4xl font-extrabold font-['Poppins']">
              Login
            </h1>
          </CardHeader>
          <CardContent className="w-full flex flex-col gap-6">
            <div className="flex items-center bg-white border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.08)] relative overflow-hidden h-14 pl-3 pr-4">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#FF5700] rounded-r-xl" />
              <span className="material-symbols-outlined text-gray-500 px-3">
                mail
              </span>
              <div className="h-6 w-px bg-gray-300 mr-3" />
              <Input
                type="email"
                placeholder="Input Your Email"
                className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 p-0 text-sm placeholder:text-gray-400 h-full text-black font-light"
              />
            </div>
            <div className="flex items-center bg-white border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.08)] relative overflow-hidden h-14 pl-3 pr-4">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#FF5700] rounded-r-xl" />
              <span className="material-symbols-outlined text-gray-500 px-3">
                key
              </span>
              <div className="h-6 w-px bg-gray-300 mr-3" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Input Your Password"
                className="w-full border-none focus:outline-none p-0 text-sm placeholder:text-gray-400 h-full text-black font-light bg-transparent"
              />
            </div>
            <div className="mt-1">
              <div 
                className="flex items-center space-x-2 cursor-pointer w-fit"
                onClick={() => setShowPassword(!showPassword)}
              >
                <div className={`w-5 h-5 flex items-center justify-center rounded-sm transition-colors ${showPassword ? 'bg-[#FF5700]' : 'bg-white border border-gray-300'}`}>
                  {showPassword && (
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className="text-sm text-black font-['Poppins'] font-medium select-none">
                  Show Password
                </span>
              </div>
            </div>
            <Button className="w-full bg-[#FF5700] hover:bg-[#E04E00] text-white text-2xl h-14 rounded-xl mt-4 font-['Poppins'] shadow-none cursor-pointer">
              Login
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
