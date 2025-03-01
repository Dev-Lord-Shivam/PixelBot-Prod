import React from 'react';
import './PageLoaderStyle.css'
import { Box } from '@chakra-ui/react';

const PageLoader = () => {
    return (
        <Box w={'full'} bg={{base:'purple.400',_dark:'gray.800'}} h={'100vh'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <div className="loader">
            <span>l</span>
            <span>o</span>
            <span>a</span>
            <span>d</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
        </div>
        </Box>
    );
};

export default PageLoader;

