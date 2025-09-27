
'use client'

import React, { useState } from 'react'
import Menu from './Menu'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { PiHouseLineFill, PiAddressBookFill, PiTreeViewFill, PiUsersThreeFill, PiLockKeyOpenFill, PiBuildingOfficeFill, PiIdentificationCardFill } from 'react-icons/pi';
import { RiShieldUserFill } from 'react-icons/ri';
import { BsPersonVcardFill } from 'react-icons/bs';
import { MdManageAccounts } from 'react-icons/md';

export default function Sidebar() {

    const [openRh, setOpenRh ] = useState(false) // state button deploy submenu
    const [openAdmin, setOpenAdmin ] = useState(false)

    const menu = [
        {name:"home", path:"/", icon:<PiHouseLineFill className="w-5 h-5"/>},
        {name:"phonebook", path:"/phonebook", icon:<PiAddressBookFill className="w-5 h-5"/>},
        {name:"organization-chart", path:"/organization-chart", icon:<PiTreeViewFill className="w-5 h-5 "/>},    
        {name:"humans resources", path:"", icon:<BsPersonVcardFill className="w-5 h-5 "/>, subMenu:[
                { name:"employees", path:"/rh/employees", icon:<PiUsersThreeFill className="w-5 h-5"/>},
                { name:"enterprises", path:"/rh/enterprises", icon:<PiBuildingOfficeFill className="w-5 h-5"/>},   
            ],
            status: openRh,
            handleClick: ()=>{
                setOpenRh(!openRh)
                setOpenAdmin(false)
            },            
        },    
        {name:"administration", path:"", icon:<RiShieldUserFill className="w-5 h-5 "/>, subMenu:[
                { name:"accounts", path:"/administration/accounts", icon:<MdManageAccounts className="w-5 h-5"/>},
                { name:"authorization", path:"/administration/authorization", icon:<PiLockKeyOpenFill className="w-5 h-5"/>},
            ],
            status: openAdmin,
            handleClick: ()=>{
                setOpenAdmin(!openAdmin)
                setOpenRh(false)
            },
        },    
    ]

  return (
    <aside className="w-[320px] bg-abyss rounded-md text-white p-4 flex flex-col">
        <div className="text-4xl my-10 uppercase text-center">
            lehanann corp.
        </div>
        <hr className="mb-10"/>
        <nav className="flex flex-col "> 
           <Menu menu={menu} />
        </nav>
        <hr className="mt-auto mb-10"/>
        <div className="flex items-center mb-10 gap-2">
            <div className="flex flex-col text-end w-full">
              <span className="text-[14px] font-bold">Lehana Grondin</span>
              <span className="text-[12px] italic font-semibold">Administrateur Systemes et reseaux</span>
            </div>
            
            <Avatar className="w-16 h-16">
                <AvatarImage src="shiva.jpg" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
        
    </aside>
  )
}