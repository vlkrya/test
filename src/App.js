import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./App.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const App = () => {
  const [selectedRow, setSelectedRow] = useState(null);


  const data = [
    { id: 1, name: "Выручка, руб", current: 500521, previous: 480521, weekly: 4805121 },
    { id: 2, name: "Наличные", current: 300000, previous: 300000, weekly: 300000 },
    { id: 3, name: "Безналичный расчет", current: 100000, previous: 100000, weekly: 100000 },
    { id: 4, name: "Кредитные карты", current: 100521, previous: 100521, weekly: 100521 },
    { id: 5, name: "Средний чек, руб", current: 1300, previous: 900, weekly: 900 },
  ];


  const chartData = selectedRow
    ? {
        labels: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница"],
        datasets: [
          {
            label: selectedRow.name,
            data: [selectedRow.current, selectedRow.previous, selectedRow.weekly],
            borderColor: "rgba(75,192,192,1)",
            backgroundColor: "rgba(75,192,192,0.2)",
            borderWidth: 2,
          },
        ],
      }
    : null;

  return (
    <div className="App">
      <h1>Таблица и График</h1>
      <table>
        <thead>
          <tr>
            <th>Показатель</th>
            <th>Текущий день</th>
            <th>Вчера</th>
            <th>Эта неделя</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              onClick={() => setSelectedRow(row)}
              style={{
                background: selectedRow?.id === row.id ? "#f0f8ff" : "transparent",
              }}
            >
              <td>{row.name}</td>
              <td>{row.current}</td>
              <td>{row.previous}</td>
              <td>{row.weekly}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="chart-container">
        {chartData ? (
          <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
        ) : (
          <p>Выберите строку для отображения графика</p>
        )}
      </div>
    </div>
  );
};

export default App;
