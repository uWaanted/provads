import Image from 'next/image';

export default function Home() {
  return (
    <>
      <header>
        <h1 className="text-white">Teste em branco</h1>
      </header>
      <div>
        <Image
          src="images/image.png"
          alt="Descrição da imagem"
          width={300} // Defina a largura desejada
          height={200} // Defina a altura desejada
        />
      </div>
    </>
  );
}
