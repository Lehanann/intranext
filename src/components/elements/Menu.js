import Link from 'next/link';
import React from 'react';

import { RiAddLine,RiSubtractLine } from 'react-icons/ri';

export default function Menu({menu}) {
  return (
    <ul className="flex flex-col capitalize">
        {menu.map((item, index)=>{
            return(
                <li key={index}>
                    {
                        item.subMenu                         

                        ? (
                            <>
                                <div type="button" className="flex items-center gap-1 cursor-pointer" onClick={item.handleClick}>
                                    <span> {item.icon}</span>
                                    <span className="font-medium mt-1 ">
                                        {item.name}                            
                                    </span>
                                    {
                                        item.status ? <RiSubtractLine className="ml-auto" /> :<RiAddLine className="ml-auto"/>
                                    }
                                    
                                </div>
                                {
                                    item.status && 
                                    
                                        item.subMenu && (
                                            <ul className="flex flex-col pl-5 ">
                                                {item.subMenu.map((itemSub,indexSub)=>{
                                                    return(
                                                        <li key={indexSub}>
                                                            <Link href={itemSub.path} className="flex gap-1 items-center focus:bg-amber-500">
                                                                <span> {itemSub.icon}</span>
                                                                <span className=" mt-1 hover:translate-x-4 hover:duration-700"> {itemSub.name}</span>
                                                                
                                                            </Link>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        )
                                    
                                }
                            </>
                            
                        )
                        


                        : (
                            <Link href={item.path} className="flex gap-1 items-center focus:bg-amber-500">
                                <span> {item.icon}</span>
                                <span className="font-medium mt-1  hover:translate-x-4 hover:duration-700">
                                    {item.name}                            
                                </span>
                           
                            </Link>
                        )

                    }                    
                    
                </li>
            )
        })}
    </ul>
  )
}