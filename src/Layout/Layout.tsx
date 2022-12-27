import { Box } from '@mui/material';
import React, { ReactNode } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

type Props = {
    children: ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <Box>
            <Header />
            <Box>{children}</Box>
            <Footer />
        </Box>
    );
}
