"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { TENANTS, type Tenant } from "@/constants";

const CYCLE_MS = 4600;

interface Ctx {
  tenant: Tenant;
  index: number;
  select: (i: number) => void;
  pause: () => void;
}

const TenantCtx = createContext<Ctx | null>(null);

/**
 * One cycling tenant, shared by the whole page — so the hero's accent and the
 * specimen below it are always showing the same storefront. The site quietly
 * re-skins itself, which is the thing both products actually do.
 */
export const TenantProvider = ({ children }: { children: React.ReactNode }) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced.current) setPaused(true);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % TENANTS.length),
      CYCLE_MS
    );
    return () => window.clearInterval(id);
  }, [paused]);

  const value = useMemo<Ctx>(
    () => ({
      tenant: TENANTS[index],
      index,
      select: (i: number) => {
        setIndex(i);
        setPaused(true);
      },
      pause: () => setPaused(true),
    }),
    [index]
  );

  return <TenantCtx.Provider value={value}>{children}</TenantCtx.Provider>;
};

export const useTenant = () => {
  const ctx = useContext(TenantCtx);
  if (!ctx) throw new Error("useTenant must be used inside <TenantProvider>");
  return ctx;
};
