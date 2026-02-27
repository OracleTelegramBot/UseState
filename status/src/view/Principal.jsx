import React, { useState } from 'react';

const Principal = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div 
      className={`flex h-screen w-full flex-col items-center justify-center transition-colors duration-700 ease-in-out ${
        enabled ? 'bg-amber-400' : 'bg-slate-900'
      }`}
    >
      <h1 className={`mb-8 text-3xl font-bold tracking-tight transition-colors duration-500 ${
        enabled ? 'text-slate-900' : 'text-white'
      }`}>
        {enabled ? 'MODO CLARO' : 'MODO OSCURO'}
      </h1>

      <button
        onClick={() => setEnabled(!enabled)}
        className={`relative inline-flex h-12 w-24 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 ${
          enabled ? 'bg-white' : 'bg-slate-700'
        }`}
      >
        <span className="sr-only">Cambiar modo</span>
        
        <span
          className={`inline-block h-10 w-10 transform rounded-full bg-slate-800 transition-transform duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${
            enabled ? 'translate-x-[52px] bg-amber-500' : 'translate-x-1'
          }`}
        />
      </button>

      <p className={`mt-4 text-sm font-medium ${enabled ? 'text-slate-800' : 'text-slate-400'}`}>
        Haz clic para cambiar el estado
      </p>
    </div>
  );
};

export default Principal;
