'use client'

import { HomeMenu } from "@/components/HomeMenu";
import { Calendar, House, Info, List } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { useState } from "react";

export const Header = () => {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <nav className="bg-green-600 px-6 py-1 flex justify-between items-center">
            <div className="logo">
                <img src="/logo.png" width="12%" className="bg-white"/>
            </div>

            <nav className="nav_list md:flex gap-52 hidden ">
                <a href="#" className="relative flex items-center gap-2 text-lg text-white font-bold hover:-top-1 transition-all ">
                    <House size={20} weight="fill"/> Início
                </a>
                <a href="#" className="relative flex items-center gap-2 text-lg text-white hover:-top-1 transition-all ">
                    <Info size={20} /> Sobre
                </a>
                <a href="#" className="relative flex items-center gap-2 text-lg text-white hover:-top-1 transition-all ">
                    <Calendar size={20}/> Eventos
                </a>
                <a href="#" className="relative text-lg bg-white text-green-700 px-1 py-1 shadow hover:-top-1 transition-all ">Participar</a>
            </nav>

            <div className="cursor-pointer lg:hidden" onClick={()=>setShowMenu(true)}>
                <List size={40}/>
            </div>

            {showMenu &&
            
            <HomeMenu closeAction={()=>setShowMenu(false)}/>}
            

        </nav>

    )
}