import { Banner } from "@/components/banner";
import { Button } from "@/components/button";
import Input from "@/components/Input";
import { Circle, Heart } from "@phosphor-icons/react/dist/ssr";

export default function Home(){
  return (
    <>
      <Banner/>
      <br />
      <section className="px-2">
        <h2 className="text-base font-extrabold text-xl">O AMBIENTE</h2>
        <br />
        <div className="flex gap-4 w-full">
          <div className="primeiro flex-1">
              <div className="h-36 bg-[url('/post1.jpg')] bg-cover">

              </div>
              <div className="bg-[#53A16E] flex flex-col gap-10">
                <div className="conteudo text-center text-white">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero et earum fugiat sapiente possimus, vitae voluptas dolorum adipisci recusandae culpa sunt praesentium vero delectus cumque itaque autem labore consequatur veritatis.
                </div>
                <div className="footer flex justify-between px-4 text-white">
                  <div className="bolinhas flex">
                    <Circle size={15} weight="fill"/>
                    <Circle size={15} weight="fill"/>
                    <Circle size={15} weight="fill"/>
                  </div>
                  <div className="coracao">
                    <Heart size={15} weight="fill"/>
                  </div>
                </div>
              </div>
          </div>

          <div className="segundo w-32 flex flex-col gap-2">
            {/* COmeco */}

            <div className="primeiro">
              <div className="h-24 bg-[url('/post2.jpg')] bg-cover">

              </div>
              <div className=" flex flex-col ">
                <strong className="conteudo text-center text-black font-bold">
                  O impacto da poluição Marinha na vida Aquática
                </strong>
                <div className="footer flex justify-between px-4 text-base">
                  <div className="bolinhas flex">
                    <Circle size={15} weight="fill"/>
                    <Circle size={15} weight="fill"/>
                    <Circle size={15} weight="fill"/>
                  </div>
                  <div className="coracao">
                    <Heart size={15} weight="fill"/>
                  </div>
                </div>
              </div>
            </div>

            <div className="primeiro">
              <div className="h-24 bg-[url('/post3.jpg')] bg-cover">

              </div>
              <div className=" flex flex-col ">
                <strong className="conteudo text-center text-black font-bold">
                  Cuidando da Nossa Cidade: Menos Lixo, Mais Vida
                </strong>
                <div className="footer flex justify-between px-4 text-base">
                  <div className="bolinhas flex">
                    <Circle size={15} weight="fill"/>
                    <Circle size={15} weight="fill"/>
                    <Circle size={15} weight="fill"/>
                  </div>
                  <div className="coracao">
                    <Heart size={15} weight="fill"/>
                  </div>
                </div>
              </div>
            </div>

            {/* FIM */}
          </div>
        </div>
      </section>

      {/* Outra section */}
      <br />
      <section className="bg-white flex justify-center items-center h-40">
        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-base font-extrabold text-xl">NEWSLETTER</h2>
          <div className="bg-base p-4 flex flex-col items-center gap-2 rounded-2xl">
            <p>Email: <Input/></p>
            <Button title="Enviar"/>
          </div>
        </div>
      </section>
    </>
  )
}