import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);


const ScatterChart = () => {
    const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };
      
      const data = {
        datasets: [
          {
            label: 'A dataset',
            data: Array.from({ length: 100 }, () => ({
              x: faker.datatype.number({ min: -100, max: 100 }),
              y: faker.datatype.number({ min: -100, max: 100 }),
            })),
            backgroundColor: 'rgba(255, 99, 132, 1)',
          },
        ],
      };
      
  return (
        <div className="bg-white rounded-lg shadow p-4">
            <Scatter options={options} data={data} />
        </div>
  )
}

export default ScatterChart