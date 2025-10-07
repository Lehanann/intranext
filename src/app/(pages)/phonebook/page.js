"use client"

import React,{ useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid'
import { usersList } from './list'

import { Plus } from 'lucide-react'


/** function to sort array users */
const usersSort = usersList.sort((a, b) => {
  
  if (a.lname > b.lname) {
    return 1;
  }
  if (a.lname < b.lname) {
    return -1;
  }
  return 0;

})

/** create array first letters for each lastname  */
const letters = usersSort.map((letter) => letter.lname.slice(0, 1))

/** create array letter after delete doublon  */
const letterArr = letters.reduce((prev, cur) => (prev.indexOf(cur) === -1) ? [...prev, cur] : prev, []);



export default function Phonebook() {

  return (
    
    <div className="flex flex-wrap overflow-y-auto mt-0.5"> 
      <div className="max-h-[1100px] flex flex-col flex-wrap" >
        {        
          letterArr.map((letter)=>{   
            return (
              <React.Fragment key={uuidv4()}>            
              
                  <div className="w-[264px] px-1 h-[40px] flex bg-sky-700 p-2 text-white text-xl font-bold justify-end shadow-lg uppercase mr-2">
                    {letter}
                
                </div>
                {
                  usersSort.map((user) => {
                    if ((user.lname.charAt(0)) === letter )
                    {
                      return (
                        <div key={user.id} className="w-[264px] pl-3 mt-1">
                          <div className="flex justify-between items-center gap-0.5">
                              <span className="capitalize">{user.lname}&nbsp;{user.fname} </span>
                              <Plus className="h-4 w-4"/>
                          </div>
                          <div className="flex flex-col mb-2">
                            <span className="capitalize text-[0.7rem] italic">career:&nbsp;{user.profession}</span>
                            <span className="capitalize text-[0.8rem] font-semibold">internal:&nbsp;{user.internal}</span>
                            <span className="capitalize text-[0.8rem] font-semibold">phone:&nbsp;{user.tel}</span>
                            <span className="first-letter:capitalize text-[0.7rem]">email:&nbsp;{user.email}</span>
                          </div>
                        
                        </div>
                      )
                    }
                  })
                }
              </React.Fragment >
            )
          })
        }
      </div>
        
    </div>
  )
}