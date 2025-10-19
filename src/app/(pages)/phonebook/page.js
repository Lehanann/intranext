"use client"


import { usersList } from './list'


import PhonebookComponent from '@/components/basics/PhonebookComponent'




export default function Phonebook() {

  return (
    <section className="flex flex-col overflow-auto ">
       <div className="h-[60px] p-2 flex items-center justify-center gap-2">
        <input className="h-8 border border-zinc-600 rounded-md"/>
         <input className="h-8 border border-zinc-600 rounded-md"/>
          <input className="h-8 border border-zinc-600 rounded-md"/>
        <button className="border rounded-md h-8 px-2 border-zinc-600 flex items-center justify-center text-white bg-abyss">search</button>
       </div>
       <PhonebookComponent usersList={usersList} />
    </section>
  
  )
}