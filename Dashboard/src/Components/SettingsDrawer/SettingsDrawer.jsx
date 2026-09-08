import React, { useState } from 'react';
import { Settings, X, Check, Sun, Moon, Layout } from 'lucide-react';

const SettingsDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [presetColor, setPresetColor] = useState('indigo');
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      {/* Floating Gear Button on Right Side */}
      <div className="fixed right-0 top-1/3 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-indigo-600 text-white p-3 rounded-l-2xl shadow-xl hover:bg-indigo-700 transition-all duration-300 group flex items-center justify-center"
          aria-label="Open Settings"
        >
          {/* Spin effect on gear icon */}
          <Settings className="w-6 h-6 animate-spin-slow group-hover:rotate-180 transition-transform duration-700" />
        </button>
      </div>

      {/* Settings Overlay Drawer */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Right Drawer Panel */}
      <div className={`fixed top-0 right-0 h-full w-80 sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100">
          <div>
            <h3 className="text-lg font-bold text-slate-800">Theme Customization</h3>
            <p className="text-xs text-slate-400">Customize your dashboard look</p>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content Body */}
        <div className="p-6 space-y-6 overflow-y-auto h-[calc(100vh-80px)]">
          
          {/* Mode Option */}
          <div>
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
              Display Mode
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setIsDarkMode(false)}
                className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-sm font-medium transition-all ${
                  !isDarkMode 
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-600' 
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Sun className="w-4 h-4" /> Light
              </button>
              <button
                onClick={() => setIsDarkMode(true)}
                className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-sm font-medium transition-all ${
                  isDarkMode 
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-600' 
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Moon className="w-4 h-4" /> Dark
              </button>
            </div>
          </div>

          {/* Color Schemes */}
          <div>
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
              Preset Color Schemes
            </label>
            <div className="grid grid-cols-4 gap-3">
              {[
                { id: 'indigo', bg: 'bg-indigo-600' },
                { id: 'sky', bg: 'bg-sky-500' },
                { id: 'emerald', bg: 'bg-emerald-500' },
                { id: 'rose', bg: 'bg-rose-500' },
              ].map((color) => (
                <button
                  key={color.id}
                  onClick={() => setPresetColor(color.id)}
                  className={`h-12 rounded-xl ${color.bg} flex items-center justify-center text-white transition-transform active:scale-95`}
                >
                  {presetColor === color.id && <Check className="w-5 h-5" />}
                </button>
              ))}
            </div>
          </div>

          {/* Layout Container Option */}
          <div>
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
              Layout Width
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 p-3 rounded-xl border border-indigo-600 bg-indigo-50 text-indigo-600 text-sm font-medium">
                <Layout className="w-4 h-4" /> Fluid
              </button>
              <button className="flex items-center justify-center gap-2 p-3 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-sm font-medium">
                Container
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default SettingsDrawer;