import React, { useState, useEffect } from "react";

interface DiscoveryItem {
  id: number;
  name: string;
  location: string;
  discoveryMethod: string;
  software: string;
}

const discoveryData: DiscoveryItem[] = [
  {
    id: 1,
    name: "Siemens S7-1200 PLC",
    location: "Located in a segmented control network.",
    discoveryMethod: "Passive protocol fingerprinting.",
    software: "TIA Portal project with firmware v4.x."
  },
  {
    id: 2,
    name: "GE D20 RTU",
    location: "Operating within a dedicated control subnet.",
    discoveryMethod: "Deep packet inspection of fieldbus communications.",
    software: "Embedded D20MX application environment."
  },
  {
    id: 3,
    name: "Schneider Modicon M580",
    location: "Hidden behind legacy firewall configuration.",
    discoveryMethod: "Modbus TCP traffic analysis.",
    software: "Unity Pro XL with EcoStruxure Machine Expert."
  },
  {
    id: 4,
    name: "Rockwell ControlLogix 5580",
    location: "Isolated in production floor VLAN.",
    discoveryMethod: "EtherNet/IP protocol monitoring.",
    software: "Studio 5000 Logix Designer v32+."
  },
  {
    id: 5,
    name: "ABB AC800M Controller",
    location: "Connected via redundant network paths.",
    discoveryMethod: "IEC 61850 GOOSE message analysis.",
    software: "Control Builder M Professional v6.1."
  },
  {
    id: 6,
    name: "Honeywell Experion PKS",
    location: "Behind enterprise security gateway.",
    discoveryMethod: "OPC UA endpoint discovery.",
    software: "Experion PKS R410.9 with C300 controllers."
  }
];

export const RecentDiscoveries = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentDiscoveries, setCurrentDiscoveries] = useState<DiscoveryItem[]>([]);

  useEffect(() => {
    // Initialize with first two discoveries
    setCurrentDiscoveries(discoveryData.slice(0, 2));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % discoveryData.length;
        const nextDiscoveries = [
          discoveryData[nextIndex],
          discoveryData[(nextIndex + 1) % discoveryData.length]
        ];
        setCurrentDiscoveries(nextDiscoveries);
        return nextIndex;
      });
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-lg p-4 shadow-lg border border-gray-200 max-w-sm w-80">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        </div>
        <div>
          <h3 className="text-base font-bold text-gray-900">Recent Discoveries</h3>
          <p className="text-xs text-gray-500">Assets found where other tools couldn't look</p>
        </div>
      </div>

      {/* Discovery Items */}
      <div className="space-y-3">
        {currentDiscoveries.map((discovery, index) => (
          <div key={`${discovery.id}-${index}`} className="border-l-4 border-blue-500 pl-3 py-1.5">
            <div className="flex items-start gap-2 mb-1.5">
              <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z" />
                  <path d="M6 8h8v2H6V8zm0 3h6v1H6v-1z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-gray-900">{discovery.name}</h4>
                <p className="text-xs text-gray-600">{discovery.location}</p>
              </div>
            </div>
            
            <div className="ml-7 space-y-1">
              <div className="flex items-center gap-1.5">
                <svg className="w-3 h-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span className="text-xs text-gray-500">Discovery Method:</span>
              </div>
              <p className="text-xs text-blue-600 underline ml-4.5">{discovery.discoveryMethod}</p>
              
              <div className="flex items-start gap-1.5">
                <span className="text-xs text-gray-500">Software:</span>
                <span className="text-xs text-gray-700">{discovery.software}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
