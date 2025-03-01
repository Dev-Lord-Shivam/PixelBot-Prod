
import {
    Box,
    Container,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
} from '@chakra-ui/react'


export default function Footer() {
    return (
        <Box
            bg={{base: "gray.50", _dark: 'gray.800'}}
            color={{base: "gray.700", _dark: 'white'}}>
            <Box py="10">
                <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
                    <Stack align={'flex-start'}>
                        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
                            Product
                        </Text>
                        <Box as="a" href={'#'}>
                            Overview
                        </Box>
                        <Stack direction={'row'} align={'center'} spacing={2}>
                            <Box as="a" href={'#'}>
                                Features
                            </Box>
                            <Tag.Root
                                size={'sm'}
                                bg={'green.300'}
                                ml={2}
                                color={'white'}>
                                New
                            </Tag.Root>
                        </Stack>
                        <Box as="a" href={'#'}>
                            Tutorials
                        </Box>
                        <Box as="a" href={'#'}>
                            Pricing
                        </Box>
                        <Box as="a" href={'#'}>
                            Releases
                        </Box>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
                            Company
                        </Text>
                        <Box as="a" href={'#'}>
                            About Us
                        </Box>
                        <Box as="a" href={'#'}>
                            Press
                        </Box>
                        <Box as="a" href={'#'}>
                            Careers
                        </Box>
                        <Box as="a" href={'#'}>
                            Contact Us
                        </Box>
                        <Box as="a" href={'#'}>
                            Partners
                        </Box>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
                            Legal
                        </Text>
                        <Box as="a" href={'#'}>
                            Cookies Policy
                        </Box>
                        <Box as="a" href={'#'}>
                            Privacy Policy
                        </Box>
                        <Box as="a" href={'#'}>
                            Terms of Service
                        </Box>
                        <Box as="a" href={'#'}>
                            Law Enforcement
                        </Box>
                        <Box as="a" href={'#'}>
                            Status
                        </Box>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
                            Follow Us
                        </Text>
                        <Box as="a" href={'#'}>
                            Facebook
                        </Box>
                        <Box as="a" href={'#'}>
                            Twitter
                        </Box>
                        <Box as="a" href={'#'}>
                            Dribbble
                        </Box>
                        <Box as="a" href={'#'}>
                            Instagram
                        </Box>
                        <Box as="a" href={'#'}>
                            LinkedIn
                        </Box>
                    </Stack>
                </SimpleGrid>
            </Box>
            <Box py={10}>

                <Text pt={6} fontSize={'sm'} textAlign={'center'}>
                    © 2025 PixelBot. All rights reserved
                </Text>
            </Box>
        </Box>
    )
}