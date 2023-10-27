export default function Section1() {
  return (
    <div className="wrapper md:flex items-center flex-row-reverse">
      <div className="md:flex-1 text-right">
        <img src="/img/banner.svg" alt="Banner" className="w-full" />
      </div>
      <div className="md:flex-1 flex flex-col justify-center">
        <h2 className="text-3xl text-center">UTFPR</h2>
        <p className="text-lg text-center">
          A (modular, highly tweakable) responsive one-page template designed by UTFPR and released for free under the Creative Commons.
        </p>
        <div className="text-center mt-4">
          <a
            href="#"
            className="border-2 border-black text-black px-4 py-2 rounded hover:border-cyan-500 hover:text-cyan-500 hover:bg-transparent inline-block"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}
