import React,{ useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Plus } from 'lucide-react'
import Link from 'next/link'

export default function PhonebookComponent({usersList}) {


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
  
  return (
     <div className="grow flex flex-wrap overflow-y-auto mt-0.5"> 
    
      <div className="max-h-[1180px] flex flex-col flex-wrap" >
        {        
          letterArr.map((letter)=>{   
            return (
              <React.Fragment key={uuidv4()}>            
              
                <div className="w-[264px] h-[40px] flex bg-abyss p-2 text-white text-xl font-bold justify-end uppercase mr-2 my-1">
                  {letter}                                 
                </div>
                {
                  usersSort.map((user) => {
                    if ((user.lname.charAt(0)) === letter )
                    {
                      return (
                        <div key={user.id} className="w-[264px] pl-1 my-1 bg-zinc-200">
                          <div className="flex justify-between items-center gap-0.5">
                              <span className="capitalize font-semibold underline text-sky-800">{user.lname}&nbsp;{user.fname} </span>                           
                          </div>
                          <div className="flex flex-col pl-1 mb-2">
                            <span className="capitalize text-[0.7rem] italic">career:&nbsp;{user.profession}</span>
                            <span className="capitalize text-[0.8rem] font-semibold">internal:&nbsp;{user.internal}</span>
                            <span className="capitalize text-[0.8rem] font-semibold">phone:&nbsp;{user.tel}</span>
                            <span className="first-letter:capitalize text-[0.7rem]">email:&nbsp;<Link href={"mailto:"}>{user.email}</Link></span>
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
