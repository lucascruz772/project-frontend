import ActiveProjectsCard from "./ActiveProjectsCard";
import EarningsCard from './EarningsCard';
import ProfessionalsCard from './ProfessionalsCard';
import HighlightsCard from './HighlightsCard';
import WhatsUpTodayCard from './WhatsUpTodayCard';
import NineDegreeCard from './NineDegreeCard';
import UpgradeCard from "./UpgradeCard";
import AgentEarningsCard from "./AgentCard";
import ProjectsStatsCard from "./ProjectsStats";
import CardInvoiceManager from "./InvoiceCard";
import ActiveTasksCard from "./ActiveTasks";

export default function DashboardCards() {
    return (
        <>
            <div className="grid grid-cols-2 gap-4 bg-[#0F1014] px-4 -mt-5">
                {/* Coluna Esquerda: Grupo de Cartões */}
                <div className="grid grid-cols-2 py-5 gap-4">
                    <ActiveProjectsCard />
                    <EarningsCard />
                    <ProfessionalsCard />
                    <HighlightsCard />
                </div>
                {/* Coluna Direita: What's up Today */}
                <div className="w-full mt-5 mb-4.5 bg-[#0F1014] ">
                    <WhatsUpTodayCard />
                </div>
            </div>
            <div className="bg-[#0F1014] px-4 pb-4 grid grid-cols-1 md:grid-cols-2 gap-4 h-80 ">
                {/* Cartões: NineDegreeCard e UpgradeCard */}
                <NineDegreeCard />
                <UpgradeCard />
            </div>
            <div className=" bg-[#0F1014] px-4 pb-4">
                <div className="flex py-5 gap-5">
                    <div className="w-2/7">
                        <AgentEarningsCard />
                    </div>
                    <div className="w-full">
                        <ProjectsStatsCard />
                    </div>
                </div>
            </div>
            <div className="bg-[#0F1014] -mt-6 -mb-20 px-4 ">
                <div className="flex py-5 gap-5">
                    <div className="w-2/7">
                        <CardInvoiceManager />
                    </div>
                    <div className="w-full">
                        <ActiveTasksCard />
                    </div>
                </div>
            </div>
        </>
    );
}