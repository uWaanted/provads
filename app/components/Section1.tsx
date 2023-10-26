export default function Section1() {
  return (
    <div className="flex">
      <div className="flex-1 flex flex-col ">
        <h3 className="text-3xl font-bold justify-center">UTFPR</h3>
        <h1 className="text-lg">
          A (modular, highly tweakable) responsive one-page template designed by UTFPR and released for free under the Creative Commons.
        </h1>
        <a
                        className=" bg-white b-2 rounded hover:bg-cyan hover:text-white justify-center"
                        href="#"
                    >
                        Get Started
                    </a>
      </div>
      <div className="flex-1 text-right">
        <img src="/img/banner.svg" alt="Descrição da Imagem" />
      </div>
    </div>
  );
}
