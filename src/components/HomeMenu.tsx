"use client"

import { Calendar, House, Info,X } from "@phosphor-icons/react/dist/ssr";
import { NavItem } from "./nav-item";


type Props = {
    closeAction:() => void;
}

export const HomeMenu = ({closeAction}:Props) => {

    return (
        <div className="lg:hidden fixed inset-0 p-4 bg-green-800">
            <div className="flex justify-between items-center">
                <img src="/logo2.jpg" width="16%" className="bg-white"/>
                <div onClick={closeAction} className="cursor-pointer flex justify-center items-center size-12 rounded-full border-2 border-gray-900">
                    <X />
                </div>
            </div>


            <div className="text-gray-100">
                <NavItem
                    label="Início"
                    icon={<House size={20}/>}
                    href="/"
                />

                <NavItem
                    label="Sobre"
                    icon={<Info size={20}/>}
                    href="/sobre"
                />

                <NavItem
                    label="Eventos"
                    icon={<Calendar size={20}/>}
                    href="/eventos"
                />

              
            </div>
        </div>
    )
}