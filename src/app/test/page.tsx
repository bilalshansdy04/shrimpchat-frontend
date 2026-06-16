import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Menu, Paperclip, Smile, Mic } from "lucide-react"

export default function Test() {
  return (
    <main className="flex h-screen bg-gray-100 p-4">
      <div className="flex w-full max-w-6xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
        
        {/* Sidebar: Chat List */}
        <aside className="w-1/3 flex flex-col border-r border-gray-200 bg-gray-50">
          {/* Sidebar Header */}
          <header className="h-16 px-4 py-3 flex items-center justify-between bg-gray-100 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">Me</div>
              <h2 className="font-semibold text-gray-800">My Profile</h2>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu className="w-5 h-5 text-gray-600" />
              </Button>
            </div>
          </header>
          
          {/* Search Bar */}
          <div className="p-3 bg-white border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input type="search" placeholder="Search or start new chat" className="pl-9 bg-gray-100 border-transparent focus-visible:ring-1 focus-visible:ring-blue-400" />
            </div>
          </div>

          {/* Contact List */}
          <nav className="flex-1 overflow-y-auto">
            <ul className="flex flex-col">
              <li className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                <div className="w-12 h-12 rounded-full bg-purple-500 flex-shrink-0 flex items-center justify-center text-white font-bold">AL</div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-semibold text-gray-800 truncate">Alice</h3>
                    <small className="text-gray-500 text-xs">10:30 AM</small>
                  </div>
                  <p className="text-gray-600 text-sm truncate">Are we still on for tomorrow?</p>
                </div>
              </li>
              <li className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                <div className="w-12 h-12 rounded-full bg-green-500 flex-shrink-0 flex items-center justify-center text-white font-bold">BO</div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-semibold text-gray-800 truncate">Bob</h3>
                    <small className="text-gray-500 text-xs">Yesterday</small>
                  </div>
                  <p className="text-gray-600 text-sm truncate">Haha, that's funny!</p>
                </div>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Area: Chat Window */}
        <section className="flex-1 flex flex-col bg-[#efeae2]">
          {/* Chat Header */}
          <header className="h-16 px-4 py-3 flex items-center justify-between bg-gray-100 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">AL</div>
              <div>
                <h2 className="font-semibold text-gray-800 leading-tight">Alice</h2>
                <p className="text-xs text-gray-500">last seen today at 10:35 AM</p>
              </div>
            </div>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Search className="w-5 h-5 text-gray-600" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu className="w-5 h-5 text-gray-600" />
              </Button>
            </div>
          </header>

          {/* Conversation History */}
          <article className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
            {/* Received Message */}
            <div className="flex justify-start">
              <div className="bg-white text-gray-800 px-4 py-2 rounded-lg max-w-[70%] shadow-sm relative">
                <p className="text-sm">Hey! How are you doing?</p>
                <div className="text-[10px] text-gray-400 text-right mt-1">10:25 AM</div>
              </div>
            </div>
            
            {/* Sent Message */}
            <div className="flex justify-end">
              <div className="bg-green-100 text-gray-800 px-4 py-2 rounded-lg max-w-[70%] shadow-sm relative">
                <p className="text-sm">I'm doing well, thanks! Just working on some code.</p>
                <div className="text-[10px] text-gray-500 text-right mt-1">10:28 AM</div>
              </div>
            </div>
            
            {/* Received Message */}
            <div className="flex justify-start">
              <div className="bg-white text-gray-800 px-4 py-2 rounded-lg max-w-[70%] shadow-sm relative">
                <p className="text-sm">Are we still on for tomorrow?</p>
                <div className="text-[10px] text-gray-400 text-right mt-1">10:30 AM</div>
              </div>
            </div>
          </article>

          {/* Input Area */}
          <footer className="bg-gray-100 px-4 py-3 flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-gray-500 rounded-full hover:bg-gray-200">
              <Smile className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-500 rounded-full hover:bg-gray-200">
              <Paperclip className="w-5 h-5" />
            </Button>
            
            <Input 
              type="text" 
              placeholder="Type a message" 
              className="flex-1 bg-white border-none focus-visible:ring-0 shadow-sm py-5 px-4 rounded-xl"
            />
            
            <Button variant="ghost" size="icon" className="text-gray-500 rounded-full hover:bg-gray-200">
              <Mic className="w-5 h-5" />
            </Button>
          </footer>
        </section>
      </div>
    </main>
  )
}
