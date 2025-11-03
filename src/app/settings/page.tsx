'use client'

import SettingsLeft from "./SettingsLeft";
import SettingsRight from "./SettingsRight";
import { useState, useEffect } from "react";

export interface VitalProps {
  users: {
    _id: string;
    email: string;
    first_name: string;
    last_name: string;
    image: string;
  }[];
}

export type SettingsLeftProps = {
  activeTab: 'profile' | 'account';
  onTabChange: (tab: 'profile' | 'account') => void;
};

export default function Settings() {
  const [, setUsers] = useState<VitalProps["users"]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'profile' | 'account'>('profile');

  const changeTab = (tabValue: 'profile' | 'account') => {
    setActiveTab(tabValue);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/users');
      const data = await response.json() as VitalProps["users"];
      const mappedData = data.map((user: VitalProps["users"][number], index: number) => ({
        ...user,
        id: index + 1,
        _id: user._id
      }));
      setUsers(mappedData);
    } catch (err) {
      console.error('Failed to fetch users:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <main className="h-full xl:px-14 xl:py-8 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#228be6]/20 border-t-[#228be6]"></div>
          <p className="mt-4 text-[#A1A3AB]">Loading settings...</p>
        </div>
      </main>
    );
  }



  return (
    <main className="h-full xl:px-14 xl:py-8">
      <div className="grid xl:grid-cols-3 grid-cols-1 gap-4 h-full">
        <SettingsLeft onTabChange={changeTab} activeTab={activeTab} />
        <SettingsRight 
            tab={activeTab} 
            getTab={changeTab}
        />
      </div>
    </main>
  );
}