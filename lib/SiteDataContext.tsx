"use client";

import React, { createContext, useContext } from "react";

export type SiteData = {
  contactEmail?: string;
  whatsappNumber?: string;
  price40?: string;
  price60?: string;
};

const SiteDataContext = createContext<SiteData | null>(null);

export function SiteDataProvider({
  initialData,
  children,
}: {
  initialData: SiteData | null;
  children: React.ReactNode;
}) {
  return (
    <SiteDataContext.Provider value={initialData}>{children}</SiteDataContext.Provider>
  );
}

export function useSiteData() {
  return useContext(SiteDataContext);
}

export default SiteDataContext;
