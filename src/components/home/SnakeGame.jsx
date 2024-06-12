// "use client"
// import { useState, useEffect, useRef } from "react";

// const SnakeGame = () => {
//   const canvasRef = useRef(null);
//   const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
//   const [food, setFood] = useState({ x: 15, y: 15 });
//   const [direction, setDirection] = useState({ x: 1, y: 0 });
//   const [foodLeft, setFoodLeft] = useState(10);
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       switch (e.key) {
//         case "ArrowUp":
//           if (direction.y === 0) setDirection({ x: 0, y: -1 });
//           break;
//         case "ArrowDown":
//           if (direction.y === 0) setDirection({ x: 0, y: 1 });
//           break;
//         case "ArrowLeft":
//           if (direction.x === 0) setDirection({ x: -1, y: 0 });
//           break;
//         case "ArrowRight":
//           if (direction.x === 0) setDirection({ x: 1, y: 0 });
//           break;
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [direction]);

//   useEffect(() => {
//     if (isRunning) {
//       const context = canvasRef.current.getContext("2d");
//       context.clearRect(0, 0, 400, 400);

//       context.fillStyle = "green";
//       snake.forEach(({ x, y }) => context.fillRect(x * 20, y * 20, 20, 20));

//       context.fillStyle = "red";
//       context.fillRect(food.x * 20, food.y * 20, 20, 20);

//       const intervalId = setInterval(() => {
//         setSnake((prevSnake) => {
//           const newSnake = [...prevSnake];
//           const head = {
//             x: newSnake[0].x + direction.x,
//             y: newSnake[0].y + direction.y,
//           };

//           if (head.x === food.x && head.y === food.y) {
//             setFood({
//               x: Math.floor(Math.random() * 20),
//               y: Math.floor(Math.random() * 20),
//             });
//             setFoodLeft((prev) => prev - 1);
//           } else {
//             newSnake.pop();
//           }

//           if (
//             head.x < 0 ||
//             head.x >= 20 ||
//             head.y < 0 ||
//             head.y >= 20 ||
//             newSnake.some(
//               (segment) => segment.x === head.x && segment.y === head.y
//             )
//           ) {
//             setIsRunning(false);
//             return prevSnake;
//           }

//           newSnake.unshift(head);
//           return newSnake;
//         });
//       }, 200);

//       return () => clearInterval(intervalId);
//     }
//   }, [snake, food, direction, isRunning]);

//   const startGame = () => {
//     setSnake([{ x: 10, y: 10 }]);
//     setFood({ x: 15, y: 15 });
//     setDirection({ x: 1, y: 0 });
//     setFoodLeft(10);
//     setIsRunning(true);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-800">
//       <div className="flex flex-col items-center bg-gray-900 p-4 rounded-lg shadow-lg">
//         <canvas
//           ref={canvasRef}
//           width="400"
//           height="400"
//           className="border border-gray-600"
//         ></canvas>
//         <div className="mt-4 text-gray-400">
//           <p>// use keyboard</p>
//           <p>// arrows to play</p>
//         </div>
//         <div className="grid grid-cols-3 gap-2 mt-4">
//           <div className="col-span-3 text-center text-gray-400">// arrows</div>
//           <button
//             className="bg-gray-700 p-2 rounded"
//             onClick={() => setDirection({ x: 0, y: -1 })}
//           >
//             ↑
//           </button>
//           <button
//             className="bg-gray-700 p-2 rounded"
//             onClick={() => setDirection({ x: -1, y: 0 })}
//           >
//             ←
//           </button>
//           <button
//             className="bg-gray-700 p-2 rounded"
//             onClick={() => setDirection({ x: 1, y: 0 })}
//           >
//             →
//           </button>
//           <button
//             className="bg-gray-700 p-2 rounded"
//             onClick={() => setDirection({ x: 0, y: 1 })}
//           >
//             ↓
//           </button>
//         </div>
//         <div className="mt-4 text-gray-400">// food left: {foodLeft}</div>
//         <button
//           className="mt-4 bg-orange-500 text-white py-2 px-4 rounded"
//           onClick={startGame}
//         >
//           start-game
//         </button>
//         <button
//           className="mt-2 bg-gray-600 text-white py-2 px-4 rounded"
//           onClick={() => setIsRunning(false)}
//         >
//           skip
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SnakeGame;
