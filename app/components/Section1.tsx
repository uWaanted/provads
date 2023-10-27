export default function Section1() {
  return (
    <div className="wrapper md:flex items-center flex-row-reverse">
      <div className="flex-1 text-right">
        <img src="/img/banner.svg" alt="Descrição da Imagem" />
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-3xl text-center">UTFPR</h2>
        <p className="text-lg text-center">
          A (modular, highly tweakable) responsive one-page template designed by UTFPR and released for free under the Creative Commons.
        </p>
        <a
          href="#"
          className="border-2 border-transparent text-white bg-transparent px-4 py-2 rounded hover:border-cyan-500 hover:text-cyan-500 hover:bg-transparent mt-4"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}
