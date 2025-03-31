import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import './index.css';
import DashboardCards from './components/DashboardCards/Dashboard';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen ">
      {/* Sidebar */}
      <Sidebar />

      {/* Conteúdo Principal */}
      <div className="flex-1 flex flex-col pl-16 sm:pl-48 md:pl-56 lg:pl-64">
        <div className='mr-5'>
          <Header />
        </div>
        <main className="flex-1 p-4">
          <DashboardCards />
        </main>
      </div>
    </div>
  );
};

export default App;