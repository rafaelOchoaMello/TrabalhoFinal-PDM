import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import './Graph.css'

ChartJS.register(ArcElement, Tooltip, Legend);

const GraphScreen = () => {
    const Graph = {
        labels: ['Gen1', 'Gen2', 'Gen3', 'Gen4', 'Gen5', 'Gen6', 'Gen7', 'Gen8'],
        datasets: [
            {
                label: '# of Votes',
                data: [151, 100, 135, 107, 156, 72, 88, 92],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <>
            <div className='chartStyle'>
                <p>Pokémons lançados por geração</p>
                <br />
                <div className='chartContainer'>
                    <Pie style={{ height: '200px' }} data={Graph}></Pie>
                </div>
            </div>

        </>
    );
}

export default GraphScreen;