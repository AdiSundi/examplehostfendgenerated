import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import getRoutes from './app_files/Routes';
import '@mantine/core/styles.css';

export default function App() {
    return (
        <main>
            <MantineProvider
                theme={
                    {
                        colors: {
                            'brandPrimary': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
                            'links': ['#f2f3f2', '#dadada', '#c1c1c1', '#a8a8a8', '#8f8f8f', '#757575', '#5c5c5c', '#424242', '#272727', '#0c0d0d']
                        },
                        primaryColor: 'brandPrimary',
                    }
                }>
                <BrowserRouter>
                    <Routes>
                        {getRoutes().map((route, index) => (
                            <Route path={route.path} element={route.element} />
                        ))}
                    </Routes>
                </BrowserRouter>
            </MantineProvider>
        </main>
    )
}