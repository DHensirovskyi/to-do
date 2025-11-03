'use client'

import { SettingsLeftProps } from "./page";

export default function SettingsLeft({ activeTab, onTabChange }: SettingsLeftProps) {
  return (
    <section className="w-full flex flex-col gap-4 border rounded-[8px] border-black/20 bg-white xl:p-5 p-2.5">
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-[1rem] font-semibold">Settings</h1>
          <div className="border-b-2 border-[#228be6] w-20" />
        </div>
      </div>
      <div className="px-2 flex flex-col gap-5">
        <button 
          onClick={() => onTabChange("profile")} 
          className={`text-left cursor-pointer rounded-[8px] border p-3 flex flex-col gap-4 
            ${activeTab === 'profile' 
              ? "bg-[#fafbfd] border-[#228be6] shadow-md" 
              : "bg-white border-black/20"} 
            transition-colors duration-200`}
        >
          <h1 className="select-none">Profile</h1>
        </button>
        
        <button 
          onClick={() => onTabChange("account")} 
          className={`text-left cursor-pointer rounded-[8px] border p-3 flex flex-col gap-4 
            ${activeTab === 'account' 
              ? "bg-[#fafbfd] border-[#228be6] shadow-md" 
              : "bg-white border-black/20"} 
            transition-colors duration-200`}
        >
          <h1 className="select-none">Account</h1>
        </button>
      </div>
    </section>
  );
}
