export default function Section1() {
  return (
    <div className="flex">
      <div className="flex-1 flex flex-col ">
        <h3 className="text-3xl font-bold justify-center">UTFPR</h3>
        <h1 className="text-lg">
          A (modular, highly tweakable) responsive one-page template designed by UTFPR and released for free under the Creative Commons.
        </h1>
        <a
      href="#"
      className="bg-[#00e77f] text-white px-4 py-2 rounded hover:bg-[#3d3d3d] hover:text-white transition duration-300 ease-in-out"
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
