import { Header } from "@/components/Header";




export default function Page(){

  //Parte do javascriptCliente

 

  //Parte do HTML
  return (
    <>
    
      {/* Inicio da HEADER */}
      <Header/>
      {/* Fim da HEADER */}

      {/* Eventos Recentes */}

      <div>
        <div className="bg-[url('/l1_novo.jpeg')] bg-cover bg-no-repeat h-60 md:h-[30rem] bg-center flex items-center justify-start px-4">
          <div>
            <em className="font-thin text-white text-xl md:text-4xl">12 de SETEMBRO</em>
            <br />
            <br />
            <strong className="text-white text-xl md:text-4xl">LIMPEZA DA PRAIA <br />EM LUANDA</strong>
            <br />
            <br />
            <button className="bg-green-600 text-gray-100 rounded-2xl px-14 py-2 transition  hover:bg-gray-100 hover:text-green-600 hover:font-bold">Inscrever-se</button>
          </div>
          
        </div>
      </div>

      {/* Fim Eventos Recentes */}
    
    </>
  )
}