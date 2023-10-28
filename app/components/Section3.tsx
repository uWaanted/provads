export default function Section3() {
    return (
      <div className="wrapper md:flex items-center flex-row-reverse">
        <div className="md:flex-1 text-right">
          <img src="/img/spotlight02.svg" alt="Spotlight02" className="w-full" />
        </div>
        <div className="md:flex-1 flex flex-col justify-center">
          <h2 className="text-3xl text-center">Tempus adipiscing</h2>
          <p className="text-lg text-center mb-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. 
          Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum dolor sit amet.
          </p>
          <div className="text-center mt-4">
            <a
              href="#"
              className="border-2 border-black text-black px-4 py-2 rounded hover:border-cyan-500 hover:text-cyan-500 hover:bg-transparent inline-block"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    );
  }
  