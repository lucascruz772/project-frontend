import { Card, CardContent } from '../ui/card';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from 'chart.js';

// Registrar os elementos do Chart.js
ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

// Dados para o gráfico de linha
const data = {
    labels: ['2:30 PM', '3:10 PM', '3:55 PM'], // Horários
    datasets: [
        {
            label: 'Avg. Agent Earnings',
            data: [2756.26, 3207.03, 3274.94], // Valores
            borderColor: '#00c5dc', // Cor da linha
            backgroundColor: (context: { chart: ChartJS }) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                gradient.addColorStop(0, 'rgba(0, 197, 220, 0.3)'); // Cor inicial do gradiente
                gradient.addColorStop(1, 'rgba(0, 197, 220, 0)'); // Cor final do gradiente
                return gradient;
            },
            fill: true, // Preenchimento abaixo da linha
            tension: 0.4, // Suavidade da linha
            pointRadius: 0, // Remove os pontos na linha
        },
    ],
};

// Opções do gráfico
const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false, // Esconde a legenda
        },
        tooltip: {
            enabled: true, // Habilita o tooltip
        },
    },
    scales: {
        x: {
            display: false, // Esconde o eixo X
        },
        y: {
            display: false, // Esconde o eixo Y
        },
    },
};

// Dados dos pontos de dados
const earningsData = [
    { time: "2:30 PM", value: 2756.26, change: -139.34 },
    { time: "3:10 PM", value: 3207.03, change: 576.24 },
    { time: "3:55 PM", value: 3274.94, change: 124.03 },
];

export default function AgentEarningsCard() {
    return (
        <Card className="bg-[#1e1e2d] rounded-xl overflow-hidden h-full md-h-64">
            <CardContent className="p-7 flex flex-col h-full">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="text-white text-2xl font-bold">$3,274.94</div>
                        <div className="text-green-500 text-sm font-bold">+9.2%</div>
                    </div>
                    <div className="text-gray-400 text-sm">Avg. Agent Earnings</div>
                </div>
                <div className="flex gap-2 mt-2">
                    <button className="bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                        1d
                    </button>
                    <button className="text-gray-400 text-xs font-semibold px-2 py-1 rounded-full hover:bg-gray-700">
                        5d
                    </button>
                    <button className="text-gray-400 text-xs font-semibold px-2 py-1 rounded-full hover:bg-gray-700">
                        1m
                    </button>
                    <button className="text-gray-400 text-xs font-semibold px-2 py-1 rounded-full hover:bg-gray-700">
                        6m
                    </button>
                    <button className="text-gray-400 text-xs font-semibold px-2 py-1 rounded-full hover:bg-gray-700">
                        1y
                    </button>
                </div>
                <div className="flex-1 mt-4">
                    <div className="h-32">
                        <Line data={data} options={options} />
                    </div>
                </div>
                <div className="flex justify-between mt-4">
                    {earningsData.map((item, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="text-gray-400 text-sm">{item.time}</div>
                            <div className="text-white text-sm font-bold">${item.value.toLocaleString()}</div>
                            <div className={`text-sm ${item.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                {item.change >= 0 ? '+' : ''}{item.change.toLocaleString()}
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}