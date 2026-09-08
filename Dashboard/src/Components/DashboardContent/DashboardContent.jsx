import React from 'react';
import './DashboardContent.css';
import { 
  ShoppingBag, 
  DollarSign, 
  TrendingUp, 
  Clock, 
  MoreHorizontal, 
  ArrowUpRight, 
  ArrowDownRight 
} from 'lucide-react';

const DashboardContent = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-slate-50 min-h-screen">
      {/* Top Stat Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
        
        {/* Card 1: Total Earning */}
        <div className="bg-indigo-600 rounded-2xl p-5 text-white shadow-lg shadow-indigo-100 relative overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-indigo-500/40 rounded-xl">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <button className="p-1 hover:bg-indigo-500/30 rounded-lg transition-colors">
              <MoreHorizontal className="w-5 h-5 text-indigo-200" />
            </button>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-1">$500.00</h3>
            <p className="text-indigo-200 text-sm font-medium">Total Earning</p>
          </div>
        </div>

        {/* Card 2: Total Order */}
        <div className="bg-sky-500 rounded-2xl p-5 text-white shadow-lg shadow-sky-100 relative overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-sky-400/40 rounded-xl">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <button className="p-1 hover:bg-sky-400/30 rounded-lg transition-colors">
              <MoreHorizontal className="w-5 h-5 text-sky-100" />
            </button>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-1">961</h3>
            <p className="text-sky-100 text-sm font-medium">Total Order</p>
          </div>
        </div>

        {/* Card 3: Total Growth */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-amber-50 rounded-xl">
              <TrendingUp className="w-6 h-6 text-amber-500" />
            </div>
            <span className="flex items-center text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
              <ArrowUpRight className="w-3 h-3 mr-0.5" /> +16.2%
            </span>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-1">$2,324</h3>
            <p className="text-slate-400 text-sm font-medium">Total Income</p>
          </div>
        </div>

        {/* Card 4: Pending Tasks */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-rose-50 rounded-xl">
              <Clock className="w-6 h-6 text-rose-500" />
            </div>
            <span className="flex items-center text-xs font-semibold text-rose-600 bg-rose-50 px-2 py-1 rounded-full">
              <ArrowDownRight className="w-3 h-3 mr-0.5" /> -4.5%
            </span>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-1">28</h3>
            <p className="text-slate-400 text-sm font-medium">Pending Orders</p>
          </div>
        </div>

      </div>

      {/* Middle Section: Main Chart & Analytics Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        
        {/* Growth Bar Chart Box */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Overview</p>
              <h2 className="text-xl font-bold text-slate-800">Total Growth Analysis</h2>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 text-xs font-medium bg-indigo-50 text-indigo-600 rounded-lg">Today</button>
              <button className="px-3 py-1.5 text-xs font-medium text-slate-500 hover:bg-slate-50 rounded-lg">Month</button>
              <button className="px-3 py-1.5 text-xs font-medium text-slate-500 hover:bg-slate-50 rounded-lg">Year</button>
            </div>
          </div>
          
          {/* Chart Placeholder Area */}
          <div className="h-64 sm:h-80 bg-slate-50 rounded-xl border border-dashed border-slate-200 flex flex-col items-center justify-center p-4">
            <div className="w-full h-full flex items-end justify-between gap-2 sm:gap-4 px-4 pb-2">
              {[40, 65, 30, 85, 55, 95, 70, 45, 60, 75, 90, 50].map((height, i) => (
                <div key={i} className="w-full bg-indigo-100 rounded-t-md hover:bg-indigo-600 transition-all duration-300 relative group" style={{ height: `${height}%` }}>
                  <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-1.5 rounded pointer-events-none">
                    ${height}k
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full flex justify-between text-[11px] text-slate-400 mt-2 px-1">
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
              <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
            </div>
          </div>
        </div>

        {/* Popular Stocks / Side List */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-800">Popular Stocks</h2>
            <button className="text-xs font-semibold text-indigo-600 hover:underline">View All</button>
          </div>

          <div className="space-y-4">
            {[
              { name: 'Bajaj Finance', price: '$1839.00', status: '10% Profit', isUp: true },
              { name: 'TTML', price: '$100.00', status: '10% Loss', isUp: false },
              { name: 'Reliance', price: '$200.00', status: '15% Profit', isUp: true },
              { name: 'Adani Green', price: '$189.00', status: '5% Loss', isUp: false },
              { name: 'Tata Steel', price: '$340.00', status: '12% Profit', isUp: true },
            ].map((stock, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors">
                <div>
                  <h4 className="text-sm font-semibold text-slate-700">{stock.name}</h4>
                  <p className={`text-xs ${stock.isUp ? 'text-emerald-500' : 'text-rose-500'}`}>{stock.status}</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-slate-800">{stock.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardContent;