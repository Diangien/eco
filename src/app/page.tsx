import { Header } from "@/components/Header";
export default function Page(){

  //Parte do javascriptCliente


  //Parte do HTML
  return (
    <>
      <Header/>
   
      {/* Eventos Recentes */}

      <div>
        <div className="banner h-80  bg-center flex items-center justify-start px-4">
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

      {/* NOTICIAS AMBIENTAIS */}

      <div className="pt-4 px-2 flex flex-col items-center">
        <h1 className="text-center font-extrabold text-green-600 text-xl pb-2">NOTÍCIAS AMBIENTAIS</h1>
        <div className="noticia_container flex gap-6 flex-wrap">
          <div className="noticia w-96">
            <img src="/post1.jpg" alt="" />
            <h2 className="font-bold pt-2">O impacto da Poluição Marinha na Vida Aquática</h2>
          </div>

          <div className="noticia w-96">
            <img src="/post2.jpg" alt="" />
            <h2 className="font-bold pt-2">O impacto da Poluição Marinha na Vida Aquática</h2>
          </div>

          <div className="noticia w-96">
            <img src="/post3.jpg" alt="" />
            <h2 className="font-bold pt-2">O impacto da Poluição Marinha na Vida Aquática</h2>
          </div>
        </div>
        <button className="px-6 py-1 border-[3px] border-green-700 rounded-2xl text-center">VER MAIS</button>
      </div>

      {/* FIM NOTICIAS */}
    
    </>
  )
}