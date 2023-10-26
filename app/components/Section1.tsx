export default function Section1() {
  return (
    <div className="flex">
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-3xl font-bold">UTFPR</h2>
        <h1 className="text-lg">
          A (modular, highly tweakable) responsive one-page template designed by UTFPR and released for free under the Creative Commons.
        </h1>
        <a
          href="#"
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-light-blue-500 hover:text-white mt-4 inline-block"
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