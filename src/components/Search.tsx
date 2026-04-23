"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  CalendarDays,
  ChevronDown,
  Building2,
  MapPin,
  Flag,
  Search,
  Users,
} from "lucide-react";

type SearchMode = "tours" | "hotels";

function TabButton({
  label,
  icon: Icon,
  active,
  onClick,
}: {
  label: string;
  icon: LucideIcon;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
        active ? "bg-[#FCA311] text-white" : "text-slate-500 hover:bg-slate-50"
      }`}
    >
      <Icon className="h-4.5 w-4.5" />
      {label}
    </button>
  );
}

export function SearchPanel() {
  const [mode, setMode] = useState<SearchMode>("hotels");

  return (
    <div className="w-full max-w-5xl mx-auto rounded-3xl bg-white p-6 shadow-xl border border-slate-100 md:-mt-45 -mt-60 mb-11.75">
      {/* Top Header Section */}
      <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between px-2">
        <div className="flex items-center gap-2">
          <TabButton
            label="Tours"
            icon={Flag}
            active={mode === "tours"}
            onClick={() => setMode("tours")}
          />
          <TabButton
            label="Hotels"
            icon={Building2}
            active={mode === "hotels"}
            onClick={() => setMode("hotels")}
          />
        </div>
        <button className="text-sm font-medium text-slate-400 transition hover:text-slate-600">
          Need some help?
        </button>
      </div>

      {/* Horizontal Input Section */}
      <div className="flex flex-col lg:flex-row items-center w-full border border-slate-200 rounded-[20px] p-2 gap-4 lg:gap-0">
        {/* Location */}
        <div className="flex-1 flex flex-col justify-center px-6 py-2 w-full cursor-pointer hover:bg-slate-50 rounded-xl transition-colors">
          <span className="text-[13px] font-medium text-slate-500 mb-1">
            Location
          </span>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-slate-300" />
            <span className="text-sm font-semibold text-slate-800">
              New York, USA
            </span>
            <ChevronDown className="h-4 w-4 text-slate-400 ml-auto lg:ml-1" />
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px h-10 bg-slate-200"></div>

        {/* Check In & Check Out */}
        <div className="flex-1 flex flex-col justify-center px-6 py-2 w-full cursor-pointer hover:bg-slate-50 rounded-xl transition-colors">
          <span className="text-[13px] font-medium text-slate-500 mb-1">
            Check In & Check Out
          </span>
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-slate-300" />
            <span className="text-sm font-semibold text-slate-800">
              02 January 2026
            </span>
            <ChevronDown className="h-4 w-4 text-slate-400 ml-auto lg:ml-1" />
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px h-10 bg-slate-200"></div>

        {/* Guest */}
        <div className="flex-1 flex flex-col justify-center px-6 py-2 w-full cursor-pointer hover:bg-slate-50 rounded-xl transition-colors">
          <span className="text-[13px] font-medium text-slate-500 mb-1">
            Guest
          </span>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-slate-300" />
            <span className="text-sm font-semibold text-slate-800">
              2 adults, 2 children
            </span>
            <ChevronDown className="h-4 w-4 text-slate-400 ml-auto lg:ml-1" />
          </div>
        </div>

        {/* Search Button */}
        <div className="w-full lg:w-auto px-2 pb-2 lg:pb-0">
          <button className="w-full lg:w-auto bg-[#1344E5] hover:bg-blue-800 text-white px-8 py-3.5 rounded-full flex items-center justify-center gap-2 text-sm font-semibold transition-colors">
            <Search className="h-4.5 w-4.5" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
