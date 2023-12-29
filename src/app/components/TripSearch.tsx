"use client";

import Button from "@/components/Button";
import CurrencyInput from "@/components/CurrencyInput";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";

interface TripSearchForm {
  text: string;
  startDate: Date | null;
  budget: number;
}

const TripSearch = () => {
  const router = useRouter()

  const {
    control,
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<TripSearchForm>();

  const onSubmit = (data: TripSearchForm) => {
    router.push(`/trips/search?text=${data.text}&startDate=${data.startDate?.toISOString()}&budget=${data.budget}`);
  };

  return (
    <div className="container mx-auto bg-search-background bg-cover bg-no-repeat p-5">
      <h1 className=" text-center text-2xl font-semibold text-primaryDarker">
        Encontre sua próxima <span className="text-primary">viagem!</span>
      </h1>

      <div className="mt-5 flex flex-col gap-4">
        <Input
          placeholder="Onde você quer ir?"
          error={!!errors.text}
          errorMessage={errors.text?.message}
          {...register("text", {
            required: {
              value: true,
              message: "Texto é obrigatório!",
            },
          })}
        />

        <div className="flex gap-4">
          <Controller
            name="startDate"
            control={control}
            render={({ field }) => (
              <DatePicker
                onChange={field.onChange}
                selected={field.value}
                placeholderText="Data final"
                className="w-full"
                minDate={new Date()}
              />
            )}
          />

          <Controller
            name="budget"
            control={control}
            render={({ field }) => (
              <CurrencyInput
                allowDecimals={false}
                placeholder="Orçamento"
                onValueChange={field.onChange as any}
                value={field.value}
                onBlur={field.onBlur}
              />
            )}
          />
        </div>

        <Button onClick={() => handleSubmit(onSubmit)()}>Buscar</Button>
      </div>
    </div>
  );
};

export default TripSearch;
