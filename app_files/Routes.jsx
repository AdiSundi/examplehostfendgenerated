import React from 'react';
import Challenges from './components/Challenges';
import Submit_my_solution from './components/Submit_my_solution';
import Solutions from './components/Solutions';
import Rate_peers from './components/Rate_peers';

function getRoutes() {
    return [
        {
            path: '/challenges',
            element: <Challenges />,
        },
        {
            path: '/submit_my_solution',
            element: <Submit_my_solution />,
        },
        {
            path: '/solutions',
            element: <Solutions />,
        },
        {
            path: '/rate_peers',
            element: <Rate_peers />,
        }
    ]
}

export default getRoutes;