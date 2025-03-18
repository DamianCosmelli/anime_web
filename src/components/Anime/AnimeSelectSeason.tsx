import { useState } from "react";
import { Seasons } from "../../pages/AnimeSeason";

function getSeasonYear() {
    const date = new Date();
    const year = date.getFullYear();
    const seasonYears = [year, year - 1, year - 2, year - 3];
    return seasonYears.reduce((acc, curr) => {
        acc[curr] = curr;
        return acc;
    }, {} as Record<number, number>);
}

export function AnimeSelectSeason() {
    const [season, setSeason] = useState("fall");
    const [seasonYear, setSeasonYear] = useState(String(new Date().getFullYear())); // Estado como cadena
    const years = getSeasonYear(); // Obtener el objeto de años

    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold">Selecciona la temporada y el año</h2>
            <div className="flex items-center justify-center space-x-4">
                <label htmlFor="season">Temporada:</label>
                <select
                    name="season"
                    id="season"
                    value={season}
                    onChange={(e) => setSeason(e.target.value)}
                >
                    {(Object.keys(Seasons) as Array<keyof typeof Seasons>).map((key) => (
                        <option key={key} value={key}>
                            {Seasons[key]}
                        </option>
                    ))}
                </select>

                <label htmlFor="seasonYear">Año:</label>
                <select
                    name="seasonYear"
                    id="seasonYear"
                    value={seasonYear}
                    onChange={(e) => setSeasonYear(e.target.value)} // Mantener como cadena
                >
                   {Object.entries(years)
                        .sort((a, b) => Number(b[0]) - Number(a[0])) // Ordenar de mayor a menor
                        .map(([key, value]) => (
                            <option key={key} value={key}>
                                {value}
                            </option>
                        ))}
                </select>
            </div>
        </div>
    );
}
