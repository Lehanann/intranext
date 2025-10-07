'use client'

import React, { useState } from 'react'
import { PiWarningFill } from "react-icons/pi";

export default function Header() {

  const message = {
      texte: " Message d'alerte pour des opérations impactants le site",
      status: "info",
      icon:<PiWarningFill/>
  }


  return (
    <header className="h-[60px] w-full bg-abyss rounded text-zinc-100 flex items-center justify-center">
      <div className="w-3/9 inline-flex flex-nowrap overflow-hidden">
        <span className={`
            whitespace-nowrap flex items-center 
            animate-infinite-scroll pl-[100%]
            font-bold text-xl gap-2
            ${message.status === "info" && "text-cyan-100"}
            ${message.status === "warning" && "text-amber-400"}
            ${message.status === "danger" && "text-red-400"}

        `}>
          {message.icon}
           {message.texte}
          {message.icon}
        </span>                         
      </div>
    </header>
  )
}
