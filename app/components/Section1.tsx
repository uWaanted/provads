export default function Section1() {
  return (
    <div className="flex">
      <div className="flex-1 flex flex-col justify-center">
        <h3 className="text-3xl font-bold">UTFPR</h3>
        <h1 className="text-lg">
          A (modular, highly tweakable) responsive one-page template designed by UTFPR and released for free under the Creative Commons.
        </h1>
        <a
                        className="text-[#3d3d3d] bg-white px-2 py-[4px] rounded hover:bg-[#00e77f] hover:text-white"
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
