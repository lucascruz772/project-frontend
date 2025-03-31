import { Card, CardContent } from '../ui/card';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useRef } from 'react';

// Registrar os elementos do Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

// Dados para o gráfico de pizza
const pieData = {
    labels: ['Leaf CRM', 'Mivy App', 'Others'],
    datasets: [
        {
            data: [7860, 2820, 45257],
            backgroundColor: ['#f06445', '#00c5dc', '#565674'],
            borderWidth: 0,
        },
    ],
};

const pieOptions = {
    plugins: {
        legend: {
            display: false,
        },
    },
};

// Dados para o gráfico de pizza
const earningsData = [
    { label: "Leaf CRM", value: '7860', color: "#f06445" },
    { label: "Mivy App", value: '2820', color: "#00c5dc" },
    { label: "Others", value: '45257', color: "#565674" },
];

export default function EarningsCard() {
    const chartRef = useRef<ChartJS<'pie'> | null>(null);

    useEffect(() => {
        // Limpar o gráfico anterior ao desmontar o componente
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []);

    return (
        <Card className="order-2 min-h-40 sm:min-h-48 md:min-h-64 bg-[#1e1e2d] rounded-xl p-3 sm:p-4 md:p-7 h-full">
            <CardContent className="p-0 flex flex-col h-full">
                <div className="flex items-baseline gap-0.5 sm:gap-1 font-semibold text-white text-2xl sm:text-3xl md:text-5xl tracking-tight leading-tight">
                    <span className="text-xl sm:text-2xl md:text-3xl relative -top-1 sm:-top-2">$</span>
                    <span>69,700</span>
                </div>
                <div className="mt-0.5 sm:mt-1 font-medium text-gray-400 text-[10px] sm:text-xs md:text-sm">
                    Projects Earnings in April
                </div>
                <div className="mt-auto flex flex-col sm:flex-row items-center gap-1 sm:gap-2 md:gap-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
                        <Pie
                            ref={chartRef}
                            data={pieData}
                            options={pieOptions}
                        />
                    </div>
                    <div className="flex flex-col gap-0.5 sm:gap-1 md:gap-2 w-full">
                        {earningsData.map((item, index) => (
                            <div key={index} className="flex justify-between items-center">
                                <div className="flex items-center gap-0.5 sm:gap-1 md:gap-2">
                                    <span
                                        className="w-1.5 h-0.5 sm:w-2 sm:h-1 md:w-3 md:h-1 rounded-full"
                                        style={{ backgroundColor: item.color }}
                                    />
                                    <span className="text-gray-400 text-[10px] sm:text-xs md:text-sm">{item.label}</span>
                                </div>
                                <span className="text-white text-[10px] sm:text-xs md:text-sm font-semibold">
                                    ${item.value.toLocaleString()}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>

    );
}