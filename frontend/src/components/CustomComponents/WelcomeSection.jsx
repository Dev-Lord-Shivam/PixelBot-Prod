import { Box, Text, Input, Button, Image, Stack, VStack, HStack } from '@chakra-ui/react';
import customerlogo from '/customers-logo.png';
import design from '/design-illustration.svg';
import { useRecoilValue } from 'recoil';
import userAtom from '@/atom/userAtom';
import { MdMailOutline } from 'react-icons/md';
import { useContactModal } from '@/context/AuthContext';

const WelcomeSection = () => {
    const user = useRecoilValue(userAtom)
    const {isContactOpen, setContactOpen} = useContactModal();
    return (
        <Box>
            <HStack spacing={8} align="center" justify="space-between" flexDir={{base: 'column', md: 'row'}}>
                <VStack align="flex-start" spacing={4} maxW="lg">
                    <Text fontSize="4xl" fontWeight="bold">
                        Hello, <Text as="span" color="purple.600">{user.name} 👋</Text> welcome to{' '}
                        <Text as="span" color="purple.600">
                           PixelBot
                        </Text>
                    </Text>
                    <Text fontSize="lg" color={{base:"gray.500",_dark:"gray.200"}}>
                         Let us help you bring your ideas to life with high-quality, tailored content crafted just for you.
                         Start creating effortlessly today and elevate your content game!
                    </Text>
                    <Button size={'sm'} 
                            mt={6} 
                            bg={{base:'purple.500',_dark:'white'}} 
                            _hover={{bg:'purple.700'}}
                            onClick={() => setContactOpen(true)}
                    ><MdMailOutline /> Contact Us</Button>
                </VStack>
                <Box maxW="lg" flex="1">
                    <Image
                        src={design}
                        alt="Design Illustration"
                        boxSize="100%"
                        objectFit="cover"
                    />
                </Box>
            </HStack>
        </Box>
    );
}

export default WelcomeSection
