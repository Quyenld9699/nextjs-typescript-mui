import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { imagePath } from 'src/constants/imagePath';

type Props = {};

export default function Header({}: Props) {
    return (
        <Box>
            <Image src={imagePath.LOGO_FULL_HORIZONTAL_BLACK} alt="logo orchai" title="logo orchai" width={150} />
        </Box>
    );
}
