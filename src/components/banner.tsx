import { Button } from "./button";

export function Banner(){
    return (
        <div className="min-h-60 bg-[url('/banner.jpg')] bg-cover bg-no-repeat w-full relative flex justify-center items-center md:h-72 md:first:bg-contain">
            <div className="flex flex-col items-center justify-center">
                <h2 className="font-extrabold text-white">JUNTOS, PODEMOS LIMPAR O MUNDO!</h2>
                <Button title="Descubra como" normal={true}/>
            </div>
        </div>
    )
}