
import { Card, CardContent } from "../ui/card"; // Supondo um componente Card genérico
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faChartLine } from "@fortawesome/free-solid-svg-icons";

// Dados dos projetos conforme a Imagem 22
const projects = [
    {
        name: "Mivy App",
        responsible: "Jane Cooper",
        budget: "$32,400",
        progress: "+9.2%",
        progressColor: "text-green-500",
        status: "In Process",
        statusColor: "bg-blue-500",
        chartColor: "#ECC94B", // Amarelo
    },
    {
        name: "Avionica",
        responsible: "Esther Howard",
        budget: "$256,910",
        progress: "-0.4%",
        progressColor: "text-red-500",
        status: "On Hold",
        statusColor: "bg-orange-500",
        chartColor: "#E53E3E", // Vermelho
    },
    {
        name: "Charto CRM",
        responsible: "Jenny Wilson",
        budget: "$8,220",
        progress: "+9.2%",
        progressColor: "text-green-500",
        status: "In Process",
        statusColor: "bg-blue-500",
        chartColor: "#48BB78", // Verde
    },
    {
        name: "Tower Hill",
        responsible: "Cody Fisher",
        budget: "$74,000",
        progress: "+9.2%",
        progressColor: "text-green-500",
        status: "Completed",
        statusColor: "bg-green-500",
        chartColor: "#48BB78", // Verde
    },
    {
        name: "9 Degree",
        responsible: "Savannah Nguyen",
        budget: "$183,300",
        progress: "-0.4%",
        progressColor: "text-red-500",
        status: "In Process",
        statusColor: "bg-blue-500",
        chartColor: "#E53E3E", // Vermelho
    },
];

export default function ProjectsStatsCard() {
    return (
        <Card className="bg-[#1e1e2d] rounded-xl p-7 w-full">
            <CardContent className="p-0 flex flex-col h-full">
                {/* Título e Subtítulo */}
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <div className="font-semibold text-white text-xl tracking-tight leading-tight">
                            Projects Stats
                        </div>
                        <div className="text-gray-400 text-sm">Updated 37 minutes ago</div>
                    </div>
                    <div className="text-gray-400 text-sm">History</div>
                </div>

                {/* Cabeçalhos das Colunas */}
                <div className="grid grid-cols-6 gap-4 mb-2 text-gray-400 text-sm">
                    <div className="col-span-2">ITEM</div>
                    <div>BUDGET</div>
                    <div>PROGRESS</div>
                    <div>STATUS</div>
                    <div>CHART</div>
                    <div>VIEW</div>
                </div>

                {/* Lista de Projetos */}
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-6 gap-4 py-2 items-center"
                    >
                        {/* ITEM */}
                        <div className="col-span-2 flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gray-600" /> {/* Placeholder para ícone */}
                            <div>
                                <div className="text-white font-semibold">{project.name}</div>
                                <div className="text-gray-400 text-sm">
                                    {project.responsible}
                                </div>
                            </div>
                        </div>
                        {/* BUDGET */}
                        <div className="text-white">{project.budget}</div>
                        {/* PROGRESS */}
                        <div className={project.progressColor}>{project.progress}</div>
                        {/* STATUS */}
                        <div>
                            <span
                                className={`px-2 py-1 rounded-full text-xs text-white ${project.statusColor}`}
                            >
                                {project.status}
                            </span>
                        </div>
                        {/* CHART */}
                        <div>
                            <FontAwesomeIcon
                                icon={faChartLine}
                                className="text-gray-400"
                                style={{ color: project.chartColor }}
                            />
                        </div>
                        {/* VIEW */}
                        <div>
                            <FontAwesomeIcon icon={faArrowRight} className="text-gray-400" />
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}