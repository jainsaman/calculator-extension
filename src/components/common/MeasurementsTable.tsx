import { useState } from "react";
import { StaticDetail } from "../elements";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MeasurementsTable() {
  const [measurementSystem, setMeasurementSystem] = useState("imperial");

  return (
    <div className="w-1/2 flex flex-col grow gap-y-3 justify-between">
      <div className="w-full flex justify-between items-center">
        <div className="w-1/2 text-slate-900 font-semibold text-xs">
          Measurement System
        </div>
        <Tabs defaultValue="imperial" className="w-28">
          <TabsList>
            <TabsTrigger
              value="imperial"
              id="imperialBtn"
              onClick={() => {
                setMeasurementSystem("imperial");
              }}
            >
              inch-lb
            </TabsTrigger>
            <TabsTrigger
              value="metric"
              id="metricBtn"
              onClick={() => {
                setMeasurementSystem("metric");
              }}
            >
              cm-kg
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <StaticDetail
        id="ProductWeight"
        title="Product Weight"
        unit={measurementSystem === "imperial" ? "pounds" : "gm"}
        value="100"
      />
      <StaticDetail
        id="ProductSize"
        title="Product Size"
        unit={measurementSystem === "imperial" ? "inch" : "cm"}
      />
      <StaticDetail
        id="PackageWeight"
        title="Package Weight"
        unit={measurementSystem === "imperial" ? "pounds" : "gm"}
      />
      <StaticDetail
        id="PackageSize"
        title="Package Size"
        unit={measurementSystem === "imperial" ? "inch" : "cm"}
      />
      <StaticDetail id="FirstDate" title="Date First available" />
    </div>
  );
}
