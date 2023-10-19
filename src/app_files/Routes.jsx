import React from 'react';
import Challenges from './Challenges';
import Submit_my_solution from './Submit_my_solution';
import Solutions from './Solutions';
import Rate_peers from './Rate_peers';

function getRoutes() {
    return [
        {
            path: '/',
            element: <Challenges />,
        },
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