"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props} />
  );
}

function TabsList({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "inline-flex h-auto rounded-md p-1 text-primary",
        className
      )}
      {...props} />
  );
}

function TabsTrigger({ className, children, ...props }) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn("group relative inline-flex items-center justify-center w-full rounded-lg p-0 border-none bg-transparent", className)}
      {...props}
    >
<div
  className="
    relative z-10 inline-flex h-12 w-full items-center justify-center
    overflow-hidden rounded-lg border-3 border-gray-800
    px-6 font-medium text-white bg-gray-800
    transition-all duration-300 cursor-pointer
    group-hover:-translate-x-3 group-hover:-translate-y-3
    hover:bg-gray-800 hover:text-white
    group-data-[state=active]:border-cyan-400
    group-data-[state=active]:font-bold
    group-data-[state=active]:shadow-[0px_0px_10px_rgb(34_211_238)]
  "
>
  {children}
</div>

      <div className="
        absolute inset-0 z-0 h-full w-full rounded-lg
        transition-all duration-300
        group-hover:-translate-x-3 group-hover:-translate-y-3
        group-hover:[box-shadow:5px_5px_#22d3ee,10px_10px_#67e8f9,15px_15px_#a5f3fc]
      "></div>
    </TabsPrimitive.Trigger>

  );
}

function TabsContent({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none min-h-[480px]", className)}
      {...props} />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
