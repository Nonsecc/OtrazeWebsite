"use client";

import { Switch } from "@ark-ui/react/switch";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function SwitchWithDualIcons() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex items-center gap-1.5">
      <Switch.Root 
        className="flex items-center gap-1.5"
        checked={isChecked}
        onCheckedChange={(details) => {
          setIsChecked(details.checked);
          console.log('Switch toggled:', details.checked);
        }}
      >
        <Sun
          className={`w-3.5 h-3.5 transition-colors duration-200 ${
            isChecked ? 'text-gray-400' : 'text-gray-900'
          }`}
        />
        <Switch.Control className="relative inline-flex w-8 p-0.5 items-center rounded-full bg-gray-300 transition-colors duration-200 ease-in-out data-[state=checked]:bg-blue-500 data-focus-visible:ring-2 data-focus-visible:ring-gray-300/50 data-[state=checked]:data-focus-visible:ring-blue-500/50 dark:bg-gray-600 dark:data-[state=checked]:bg-blue-500">
          <Switch.Thumb className="w-3.5 h-3.5 rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out data-[state=checked]:translate-x-full" />
        </Switch.Control>
        <Moon
          className={`w-3.5 h-3.5 transition-colors duration-200 ${
            isChecked ? 'text-gray-900' : 'text-gray-400'
          }`}
        />
        <Switch.HiddenInput />
      </Switch.Root>
    </div>
  );
}
