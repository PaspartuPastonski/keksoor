import { memo, useState, useMemo, useEffect } from "react";

import Slider from "./Slider";
import Graph, { GraphProps } from "./Graph";
import Options from "./Options";

type graphColumnSetValues = {
   wagiebot: number;
   competition: number;
};

type Tear = 0 | 1 | 2 | 3 | 4;

const dataByTear: Record<
   Tear,
   {
      fee: number;
      copyTrades: number;
      trackedTrades: number;
      activeSnips: number;
      trackingTime: number;
   }
> = {
   0: { fee: 0.8, copyTrades: 4, trackedTrades: 3, activeSnips: 1, trackingTime: 1 },
   1: { fee: 0.7, copyTrades: 5, trackedTrades: 4, activeSnips: 2, trackingTime: 2 },
   2: { fee: 0.6, copyTrades: 6, trackedTrades: 5, activeSnips: 3, trackingTime: 3 },
   3: { fee: 0.5, copyTrades: 7, trackedTrades: 6, activeSnips: 3, trackingTime: 4 },
   4: { fee: 0.4, copyTrades: 8, trackedTrades: 7, activeSnips: 3, trackingTime: 5 },
};

const initialValue: Tear = 1;

function DeFiCalculator() {
   const [tradingVolume, setTradingVolume] = useState(100);
   const [tear, setTear] = useState<Tear>(initialValue);

   const [fee, setFee] = useState<graphColumnSetValues>({
      wagiebot: dataByTear[initialValue].fee,
      competition: 1,
   });
   const [copyTrades, setCopyTrades] = useState<graphColumnSetValues>({
      wagiebot: dataByTear[initialValue].copyTrades,
      competition: 3,
   });
   const [trackedTrades, setTrackedTrades] = useState<graphColumnSetValues>({
      wagiebot: dataByTear[initialValue].trackedTrades,
      competition: 1,
   });
   const [activeSnips, setActiveSnips] = useState<graphColumnSetValues>({
      wagiebot: dataByTear[initialValue].activeSnips,
      competition: 1,
   });
   const [trackingTime, settTrackingTime] = useState<graphColumnSetValues>({
      wagiebot: dataByTear[initialValue].trackingTime,
      competition: 1,
   });

   const optionsValues = useMemo(
      () => [
         {
            text: "$100",
            value: 100,
         },
         {
            text: "$1 000",
            value: 1000,
         },
         {
            text: "$10 000",
            value: 10000,
         },
      ],
      [],
   );
   const sliderSteps = useMemo(
      () => [
         {
            aboveText: "Free",
            bellowText: "0 Tokens",
         },
         {
            aboveText: "Tier 1",
            bellowText: "500 Tokens",
         },
         {
            aboveText: "Tier 2",
            bellowText: "1000 Tokens",
         },
         {
            aboveText: "Tier 3",
            bellowText: "1500 Tokens",
         },
         {
            aboveText: "Tier 4",
            bellowText: "2000 Tokens",
         },
      ],
      [],
   );
   const graphValues = useMemo(
      (): GraphProps["values"] => [
         {
            name: "Fee",
            columns: [
               {
                  value: fee.wagiebot,
                  unit: "$",
                  unitPosition: "front",
               },
               {
                  value: fee.competition,
                  unit: "$",
                  unitPosition: "front",
               },
            ],
         },
         {
            name: "Copy Trades",
            columns: [
               {
                  value: copyTrades.wagiebot,
               },
               {
                  value: copyTrades.competition,
               },
            ],
         },
         {
            name: "Tracked Trades",
            columns: [
               {
                  value: trackedTrades.wagiebot,
               },
               {
                  value: trackedTrades.competition,
               },
            ],
         },
         {
            name: "Active Snipes",
            columns: [
               {
                  value: activeSnips.wagiebot,
               },
               {
                  value: activeSnips.competition,
               },
            ],
         },
         {
            name: "Tracking Time",
            columns: [
               {
                  value: trackingTime.wagiebot,
                  unit: " Days",
               },
               {
                  value: trackingTime.competition,
                  unit: " Day",
               },
            ],
         },
      ],
      [fee, copyTrades, trackedTrades, activeSnips, trackingTime],
   );

   useEffect(() => {
      setFee((oldValue) => ({
         wagiebot: (tradingVolume * dataByTear[tear].fee) / 100,
         competition: (tradingVolume * 1) / 100,
      }));
      setCopyTrades((oldValue) => ({
         ...oldValue,
         wagiebot: dataByTear[tear].copyTrades,
      }));
      setTrackedTrades((oldValue) => ({
         ...oldValue,
         wagiebot: dataByTear[tear].trackedTrades,
      }));
      setActiveSnips((oldValue) => ({
         ...oldValue,
         wagiebot: dataByTear[tear].activeSnips,
      }));
      settTrackingTime((oldValue) => ({
         ...oldValue,
         wagiebot: dataByTear[tear].trackingTime,
      }));
   }, [tear, tradingVolume]);

   return (
      <div className="flexHolder x2">
         <div style={{ width: "100%", margin: "auto 0px" }}>
            <h2 className="mainText">Trading Volume</h2>
            <Options options={optionsValues} onChange={setTradingVolume} />

            <h2 className="mainText">Bot Tier</h2>
            <Slider
               min={0}
               max={4}
               defaultValue={initialValue}
               options={sliderSteps}
               onChange={setTear as any}
            />
         </div>
         <Graph values={graphValues} columnLabels={["WagieBot", "Competition"]} />
      </div>
   );
}

export default memo(DeFiCalculator);
