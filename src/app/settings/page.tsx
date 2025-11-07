// src/app/settings/page.tsx
'use client'

import SettingsLeft from "./SettingsLeft";
import SettingsRight from "./SettingsRight";
import { useState } from "react";
import type { ComponentType } from "react";
import { useQuery } from "@apollo/client/react";
import { GET_USERS } from '../lib/graphql/operations';

export interface VitalProps {
  users: {
    _id: string;
    email: string;
    first_name: string;
    last_name: string;
    image: string;
  }[];
}

type SettingsRightProps = {
  tab: 'profile' | 'account';
  getTab: (tab: 'profile' | 'account') => void;
  users: {
    _id: string;
    email: string;
    first_name: string;
    last_name: string;
    image: string;
  }[];
};

export type SettingsLeftProps = {
  activeTab: 'profile' | 'account';
  onTabChange: (tab: 'profile' | 'account') => void;
};
export default function Settings() {
  const [activeTab, setActiveTab] = useState<'profile' | 'account'>('profile');
  
  const { data, loading, error } = useQuery<{ users: VitalProps['users'] }>(GET_USERS);

  const SettingsRightTyped = SettingsRight as ComponentType<SettingsRightProps>;

  const changeTab = (tabValue: 'profile' | 'account') => {
    setActiveTab(tabValue);
  };

  if (loading) {
    return (
      <section className="h-full xl:px-14 xl:py-8 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#228be6]/20 border-t-[#228be6]"></div>
          <p className="mt-4 text-[#A1A3AB]">Loading settings...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="h-full xl:px-14 xl:py-8 flex items-center justify-center">
        <div className="text-center text-red-500">
          <p>Error loading settings: {error.message}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="h-full xl:px-14 xl:py-8">
      <div className="grid xl:grid-cols-3 grid-cols-1 gap-4 h-full">
        <SettingsLeft onTabChange={changeTab} activeTab={activeTab} />
        <SettingsRightTyped
          tab={activeTab}
          getTab={changeTab}
          users={data?.users || []}
        />
      </div>
    </section>
  );
}