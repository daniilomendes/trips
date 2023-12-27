"use client"

import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";

const TripSearch = () => {
  return (
    <div className="container mx-auto p-5">
      <h1 className=" text-center text-2xl font-semibold text-primaryDarker">
        Encontre sua próxima <span className="text-primary">viagem!</span>
      </h1>

      <div className="mt-5 flex flex-col gap-4">
        <Input placeholder="Onde você quer ir?" />

        <div className="flex gap-4">
          <DatePicker placeholderText="Data de ida" onChange={() => {}} className="w-full"/>
          <Input placeholder="Orçamento" />
        </div>
      </div>
    </div>
  );
};

export default TripSearch;
