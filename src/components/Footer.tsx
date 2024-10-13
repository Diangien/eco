import { Circle } from "@phosphor-icons/react/dist/ssr"
import { Button } from "./button"
import Input from "./Input"


export const Footer = () => {
    return (
        <footer className="bg-[#008C04] px-2 py-4 flex justify-between text-white ">
            <div className="flex flex-col justify-between gap-4">
                <h2 className="font-bold text-2xl" style={{fontFamily:'Times New Roman, serif'}}>Ecoação</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptatem adipisci alias consectetur perspiciatis recusandae, enim sunt tenetur maxime, incidunt magni ullam provident quis officia repellendus accusantium nisi voluptatum facilis.

                </p>

                <div className="bolinhas flex">
                    <Circle size={22} weight="fill"/>
                    <Circle size={22} weight="fill"/>
                    <Circle size={22} weight="fill"/>
                </div>

            </div>

            <div>
            <h2 className="font-bold text-2xl" style={{fontFamily:'Times New Roman, serif'}}>Seja um doador</h2>
                <div>
                    <label htmlFor="">Email:</label>
                    <Input/>
                </div>
                <div>
                    <label htmlFor="">Mensagem:</label>
                    <textarea name="" id="" className="rounded-2xl">

                    </textarea>
                    <Button title="Enviar"/>
                </div>
            </div>
        </footer>
    )
}