import { Seasons } from "../../models/Season";
import { CheckIcon} from '@heroicons/react/24/outline'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { selectSeasonSchema } from '../../schema/SelectSeasonSchema'

// ✅ Tipo de los datos del formulario
type FormData = z.infer<typeof selectSeasonSchema>;

// ✅ Función reutilizable del formulario
export function AnimeSelectSeason({ seasons, years, onSubmit }: { 
  seasons: Record<string, string>; 
  years: Record<string, string>; 
  onSubmit: (data: FormData) => void;
}) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(selectSeasonSchema),
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold gap-9 text-white">Selecciona la temporada y el año</h2>
      <form className="flex items-center justify-center space-x-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center justify-center space-x-4">
          {/* 🔹 Temporada */}
          <label htmlFor="season" className="text-white">Temporada:</label>
          <select id="season" className="border p-2 rounded text-white" {...register("season")}>
          {(Object.keys(seasons) as Array<keyof typeof Seasons>).map((key) => (
                            <option key={key} value={key} className="bg-gray-950" >
                                {Seasons[key]}
                            </option>
                        ))}
          </select>
          {errors.season && <p className="text-red-500 text-sm">{errors.season.message}</p>}

          {/* 🔹 Año */}
          <label htmlFor="seasonYear" className="text-white">Año:</label>
          <select id="seasonYear" className="border p-2 rounded text-white" {...register("seasonYear")}>
          {Object.entries(years)
                            .sort((a, b) => Number(b[0]) - Number(a[0])) // Ordenar de mayor a menor
                            .map(([key, value]) => (
                                <option key={key} value={key} className="bg-gray-950">
                                    {value}
                                </option>
                            ))}
          </select>
          {errors.seasonYear && <p className="text-red-500 text-sm">{errors.seasonYear.message}</p>}
        </div>

        {/* 🔹 Botón de envío */}
        <div className="flex flex-col items-center justify-center">
          <button 
            type="submit" 
            className="bg-emerald-700 rounded-full w-8 h-8 text-white hover:text-gray-800 text-lg py-3 flex items-center justify-center"
          >
            <CheckIcon className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
}
