import Image from "next/image";
import Link from "next/link";

const QuickSearch = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <div className="h-[1px] w-full bg-grayLighter"></div>
        <h2 className="whitespace-nowrap px-5 font-medium text-grayPrimary">
          Tente pesquisar por
        </h2>
        <div className="h-[1px] w-full bg-grayLighter"></div>
      </div>

      <div className="mt-5 flex w-full justify-between">
        <div className="flex flex-col items-center gap-1">
          <Link
            href={`/trips/search?text=hotel`}
            className="flex flex-col items-center transition-all hover:text-primary"
          >
            <Image width={35} height={35} src="/hotel-icon.png" alt="Hotel" />
          </Link>
          <p className="text-sm text-grayPrimary">Hotel</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Link
            href={`/trips/search?text=fazenda`}
            className="flex flex-col items-center transition-all hover:text-primary"
          >
            <Image width={35} height={35} src="/farm-icon.png" alt="Fazenda" />
          </Link>
          <p className="text-sm text-grayPrimary">Fazenda</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Link
            href={`/trips/search?text=Chalé`}
            className="flex flex-col items-center transition-all hover:text-primary"
          >
            <Image width={35} height={35} src="/cottage-icon.png" alt="Chalé" />
          </Link>
          <p className="text-sm text-grayPrimary">Chalé</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Link
            href={`/trips/search?text=pousada`}
            className="flex flex-col items-center transition-all hover:text-primary"
          >
            <Image width={35} height={35} src="/inn-icon.png" alt="Pousada" />
          </Link>
          <p className="text-sm text-grayPrimary">Pousada</p>
        </div>
      </div>
    </div>
  );
};

export default QuickSearch;
