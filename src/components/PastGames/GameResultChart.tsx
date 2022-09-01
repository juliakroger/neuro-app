// import { useMemo, useState } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
// } from "recharts";
// import { TrialAnalysisProps } from "@/components/Game/PlayGame";

// interface Props {
//   gameResults?: TrialAnalysisProps[];
//   timeToRespond: number;
//   background?: string;
// }

// interface ResponseProps {
//   currentCountDown: number;
//   pressedKey: string;
// }

// const CustomizedDot = ({
//   cx,
//   cy,
//   payload,
// }: {
//   cx?: number;
//   cy?: number;
//   payload?: { result: string };
// }) => {
//   const isWrong = payload?.result === "wrong";

//   return (
//     <circle
//       r="5"
//       stroke={isWrong ? "#E0230D" : "#4a9a16"}
//       strokeWidth="1"
//       fill={isWrong ? "#FF5440" : "#A5EB78"}
//       cx={cx}
//       cy={cy}
//     />
//   );
// };

// const GameResultChart = ({ gameResults, timeToRespond, background }: Props) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const data = useMemo(
//     () =>
//       gameResults?.map(({ round, gameLetter, responses }: any) => {
//         let isAnswerRight = false;
//         let timeCountDown = timeToRespond / 1000;

//         responses?.map(({ pressedKey, currentCountDown }: ResponseProps) => {
//           if (pressedKey === gameLetter && currentCountDown <= timeToRespond) {
//             isAnswerRight = true;
//           }

//           timeCountDown = currentCountDown / 1000;
//         });

//         return {
//           round,
//           result: isAnswerRight ? "right" : "wrong",
//           timeCountDown,
//         };
//       }),
//     [gameResults, timeToRespond]
//   );

//   return (
//     <div className={`p-4 rounded-xl ${background}`}>
//       <div className="flex justify-between">
//         <div>Chart Data</div>
//         <button
//           type="button"
//           className="text-sm underline"
//           onClick={(e) => {
//             e.preventDefault();
//             setIsOpen(!isOpen);
//           }}
//         >
//           {isOpen ? "Hide details" : "Show details"}
//         </button>
//       </div>
//       {isOpen ? (
//         <div className="pr-8 pt-8 game-chart--body">
//           <LineChart width={800} height={350} data={data}>
//             <CartesianGrid strokeDasharray="1 10" horizontal={false} />
//             <XAxis type="category" dataKey="round" />
//             <YAxis
//               padding={{
//                 top: 20,
//                 bottom: 20,
//               }}
//             />
//             <Tooltip />
//             <Line
//               type="monotone"
//               dataKey="timeCountDown"
//               stroke="#81d4fa"
//               isAnimationActive={false}
//               dot={<CustomizedDot />}
//             />
//           </LineChart>
//         </div>
//       ) : null}
//     </div>
//   );
// };

const GameResultChart = () => {};
export default GameResultChart;
