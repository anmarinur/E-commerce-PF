import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { useEffect } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'weekly yield',
    },
  },
};

const labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export let data = {
  labels,
  datasets: [
    {
      label: 'VISITS',
      data: labels.map(() => 1000 * Math.random()),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      tension: 0.5,
      fill: true,
      pointBorderWidth: 5
    },
    {
      label: 'SALES',
      data: [],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      fill: true,
      tension: 0.5,
      pointBorderWidth: 5

    },
  ],
};

export default function LineChart() {

    const [ stats, setStats ] = useState();
    const { getAccessTokenSilently } = useAuth0();

    async function getData() {
        try {
            const token = await getAccessTokenSilently();
            const result = await axios.get(`/stats/order`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            let Monday=0, Tuesday=0, Wednesday=0, Thursday=0, Friday=0, Saturday=0, Sunday = 0;
            result.data.map(o=>{
                const day = new Date(o.day).getDay()
                switch(day){
                    case(0):
                        Sunday+=Number(o.total);
                        break;
                    case(1):
                        Monday+=Number(o.total);
                        break;
                    case(2):
                        Tuesday+=Number(o.total);
                        break;
                    case(3):
                        Wednesday+=Number(o.total);
                        break;
                    case(4):
                        Thursday+=Number(o.total);
                        break;
                    case(5):
                        Friday+=Number(o.total);
                        break;
                    default:
                        Saturday+=Number(o.total);
                        break;
                }
            });
            
            const resultData = [Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday];
            data.datasets[1].data = resultData;
            setStats(data);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(()=>{
        getData();
    }, [stats]);

  return (
    <div style={{margin: "5em 0"}} className=' column col-12'>
        <h3 style={{fontSize: "1rem", fontWeight: "bold", textAlign: "center"}}>PERFORMANCE</h3>
        { stats && <Line options={options} data={stats} />}
    </div>
    )
}
