import Image from "next/image";

const Footer = () => {
  return (
    <div className=" flex flex-col items-center justify-center bg-walterWhite p-5">
      <Image src="/logo.png" width={133} height={23} alt="Rodapé" />
      <p className="mt-1 text-sm font-medium text-primaryDarker">
        Todos os direitos reservados.
      </p>
    </div>
  );
};

export default Footer;
