"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Auth() {
  const [loginPassword, setLoginPassword] = useState("");
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [usernameStatus, setUsernameStatus] = useState<"available" | "taken" | null>(null);
  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState<"available" | "taken" | "invalid" | null>(null);

  const handleEmailBlur = () => {
    if (!email) {
      setEmailStatus(null);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailStatus("invalid");
      return;
    }
    const takenEmails = ["test@gmail.com", "admin@shrimpchat.com", "user@yahoo.com"];
    if (takenEmails.includes(email.toLowerCase())) {
      setEmailStatus("taken");
    } else {
      setEmailStatus("available");
    }
  };

  const handleCheckUsername = () => {
    if (!username) return;
    const takenUsernames = ["admin", "testuser", "shrimp"];
    if (takenUsernames.includes(username)) {
      setUsernameStatus("taken");
    } else {
      setUsernameStatus("available");
    }
  };

  return (
    <div>
      {/* Login */}
      <div className="hidden">
        <div className="w-screen h-screen flex">
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
                    Log in to your ShrimpChat account to connect with your
                    friends.
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
                    className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 p-0 text-sm placeholder:text-gray-400 h-full text-black font-light font-['Poppins']"
                  />
                </div>
                <div className="flex items-center bg-white border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.08)] relative overflow-hidden h-14 pl-3 pr-4">
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#FF5700] rounded-r-xl" />
                  <span className="material-symbols-outlined text-gray-500 px-3">
                    key
                  </span>
                  <div className="h-6 w-px bg-gray-300 mr-3" />
                  <input
                    type={showLoginPassword ? "text" : "password"}
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="Input Your Password"
                    className="w-full border-none focus:outline-none p-0 text-sm placeholder:text-gray-400 h-full text-black font-light font-['Poppins'] bg-transparent"
                  />
                </div>
                <div className="mt-1">
                  <div
                    className="flex items-center space-x-2 cursor-pointer w-fit"
                    onClick={() => setShowLoginPassword(!showLoginPassword)}
                  >
                    <div
                      className={`w-5 h-5 flex items-center justify-center rounded-sm transition-colors ${showLoginPassword ? "bg-[#FF5700]" : "bg-white border border-gray-300"}`}
                    >
                      {showLoginPassword && (
                        <svg
                          className="w-3.5 h-3.5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={4}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
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
      </div>
      {/* Register */}
      <div className="">
        <div className="w-screen h-screen flex">
          <div className="flex-1 h-screen flex flex-col justify-center items-center bg-white">
            <Card className="w-126.25 px-6 shadow-none border-none rounded-none ring-0 item-center flex flex-col">
              <CardHeader className="">
                <h1 className="text-center text-black text-4xl font-extrabold font-['Poppins']">
                  Register
                </h1>
              </CardHeader>
              <CardContent className="w-full flex flex-col gap-6">
                {/* Username */}
                <div>
                  <div className={`flex items-center bg-white border ${usernameStatus === 'taken' ? 'border-red-500' : usernameStatus === 'available' ? 'border-green-500' : 'border-gray-100'} shadow-[0_4px_12px_rgba(0,0,0,0.08)] relative overflow-hidden h-14 pl-3 pr-4 transition-colors`}>
                    <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#FF5700] rounded-r-xl" />
                    <span className={`material-symbols-outlined px-3 ${usernameStatus === 'taken' ? 'text-red-500' : usernameStatus === 'available' ? 'text-green-500' : 'text-gray-500'} transition-colors`}>
                      id_card
                    </span>
                    <div className="h-6 w-px bg-gray-300 mr-3" />
                    <Input
                      type="text"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value.toLowerCase());
                        setUsernameStatus(null);
                      }}
                      placeholder="Input Your Username"
                      className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 p-0 text-sm placeholder:text-gray-400 h-full text-black font-light font-['Poppins']"
                    />
                    <h6 
                      className={`text-sm font-['Poppins'] cursor-pointer transition-colors select-none ${usernameStatus === 'taken' ? 'text-red-500' : usernameStatus === 'available' ? 'text-green-500' : 'text-[#FF5700]'}`}
                      onClick={handleCheckUsername}
                    >
                      {usernameStatus === 'available' ? 'Available' : usernameStatus === 'taken' ? 'Taken' : 'Check'}
                    </h6>
                  </div>
                  {usernameStatus === 'taken' && (
                    <p className="text-red-500 text-xs mt-1 ml-1 font-['Poppins']">Username already exists.</p>
                  )}
                  {usernameStatus === 'available' && (
                    <p className="text-green-500 text-xs mt-1 ml-1 font-['Poppins']">Username is available.</p>
                  )}
                </div>
                {/* Email */}
                <div>
                  <div className={`flex items-center bg-white border ${emailStatus === 'taken' || emailStatus === 'invalid' ? 'border-red-500' : emailStatus === 'available' ? 'border-green-500' : 'border-gray-100'} shadow-[0_4px_12px_rgba(0,0,0,0.08)] relative overflow-hidden h-14 pl-3 pr-4 transition-colors`}>
                    <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#FF5700] rounded-r-xl" />
                    <span className={`material-symbols-outlined px-3 ${emailStatus === 'taken' || emailStatus === 'invalid' ? 'text-red-500' : emailStatus === 'available' ? 'text-green-500' : 'text-gray-500'} transition-colors`}>
                      mail
                    </span>
                    <div className="h-6 w-px bg-gray-300 mr-3" />
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (emailStatus) setEmailStatus(null);
                      }}
                      onBlur={handleEmailBlur}
                      placeholder="Input Your Email"
                      className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 p-0 text-sm placeholder:text-gray-400 h-full text-black font-light font-['Poppins']"
                    />
                    {emailStatus === 'available' && (
                      <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                    )}
                    {(emailStatus === 'taken' || emailStatus === 'invalid') && (
                      <span className="material-symbols-outlined text-red-500 text-lg">cancel</span>
                    )}
                  </div>
                  {emailStatus === 'taken' && (
                    <p className="text-red-500 text-xs mt-1 ml-1 font-['Poppins']">Email is already registered.</p>
                  )}
                  {emailStatus === 'invalid' && (
                    <p className="text-red-500 text-xs mt-1 ml-1 font-['Poppins']">Please enter a valid email address.</p>
                  )}
                  {emailStatus === 'available' && (
                    <p className="text-green-500 text-xs mt-1 ml-1 font-['Poppins']">Email is available.</p>
                  )}
                </div>
                {/* Password */}
                <div className="flex items-center bg-white border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.08)] relative overflow-hidden h-14 pl-3 pr-4">
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#FF5700] rounded-r-xl" />
                  <span className="material-symbols-outlined text-gray-500 px-3">
                    key
                  </span>
                  <div className="h-6 w-px bg-gray-300 mr-3" />
                  <input
                    type={showRegisterPassword ? "text" : "password"}
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    placeholder="Input Your Password"
                    className="w-full border-none focus:outline-none p-0 text-sm placeholder:text-gray-400 h-full text-black font-light font-['Poppins'] bg-transparent"
                  />
                </div>
                {/* Confirm Password */}
                <div>
                  <div className={`flex items-center bg-white border ${registerConfirmPassword.length > 0 ? (registerPassword === registerConfirmPassword ? 'border-green-500' : 'border-red-500') : 'border-gray-100'} shadow-[0_4px_12px_rgba(0,0,0,0.08)] relative overflow-hidden h-14 pl-3 pr-4 transition-colors`}>
                    <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#FF5700] rounded-r-xl" />
                    <span className={`material-symbols-outlined px-3 ${registerConfirmPassword.length > 0 ? (registerPassword === registerConfirmPassword ? 'text-green-500' : 'text-red-500') : 'text-gray-500'} transition-colors`}>
                      key
                    </span>
                    <div className="h-6 w-px bg-gray-300 mr-3" />
                    <input
                      type={showRegisterPassword ? "text" : "password"}
                      value={registerConfirmPassword}
                      onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                      placeholder="Input Your Confirm Password"
                      className="w-full border-none focus:outline-none p-0 text-sm placeholder:text-gray-400 h-full text-black font-light font-['Poppins'] bg-transparent"
                    />
                    {registerConfirmPassword.length > 0 && registerPassword === registerConfirmPassword && (
                      <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                    )}
                    {registerConfirmPassword.length > 0 && registerPassword !== registerConfirmPassword && (
                      <span className="material-symbols-outlined text-red-500 text-lg">cancel</span>
                    )}
                  </div>
                  {registerConfirmPassword.length > 0 && registerPassword !== registerConfirmPassword && (
                    <p className="text-red-500 text-xs mt-1 ml-1 font-['Poppins']">Passwords do not match.</p>
                  )}
                  {registerConfirmPassword.length > 0 && registerPassword === registerConfirmPassword && (
                    <p className="text-green-500 text-xs mt-1 ml-1 font-['Poppins']">Passwords match.</p>
                  )}
                </div>
                {/* Show Password */}
                <div className="mt-1">
                  <div
                    className="flex items-center space-x-2 cursor-pointer w-fit"
                    onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                  >
                    <div
                      className={`w-5 h-5 flex items-center justify-center rounded-sm transition-colors ${showRegisterPassword ? "bg-[#FF5700]" : "bg-white border border-gray-300"}`}
                    >
                      {showRegisterPassword && (
                        <svg
                          className="w-3.5 h-3.5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={4}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm text-black font-['Poppins'] font-medium select-none">
                      Show Password
                    </span>
                  </div>
                </div>
                <Button className="w-full bg-[#FF5700] hover:bg-[#E04E00] text-white text-2xl h-14 rounded-xl mt-4 font-['Poppins'] shadow-none cursor-pointer">
                  Register
                </Button>
              </CardContent>
            </Card>
          </div>
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
                    Get Started
                  </h1>
                  <p className="w-109 mx-auto text-center text-xl font-['Poppins']">
                    Create an account to connect with your community.
                  </p>
                  <p className="w-109 mx-auto text-center text-md font-['Poppins']">
                    Already have an account?{" "}
                    <span className="text-[#FF5200] underline cursor-pointer">
                      Login
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
