import { Box, Button, Text, Flex, Heading, Input, Textarea, VStack, Container, Image } from "@chakra-ui/react";
import {
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogRoot,
} from "@/components/ui/dialog";
import { useRef, useState } from "react";
import useShowToast from "@/customhooks/useShowToast";
import emailjs from '@emailjs/browser';

const ContactUs = ({ isOpen, onClose }) => {

    const form = useRef()
    const showToast = useShowToast()
    const [isSending, setIsSending] = useState(false)

    const sendEmail = (e) => {
        setIsSending(true)
        e.preventDefault()

        emailjs.sendForm('service_dhvapfe', 'template_ykdqbdy', form.current, 'mTstNQPnNog0fGp3I')
            .then((result) => {
                console.log(result.text)
                document.getElementById('name').value = ''
                document.getElementById('email').value = ''
                document.getElementById('msg').value = ''
                setIsSending(false)
                showToast('Message Sent Successfully', 'success')
            }, (error) => {
                setIsSending(false)
                showToast('Message Send Failed!', 'error')
            })
    }

    return (
        <DialogRoot open={isOpen} onOpenChange={onClose} scrollBehavior="inside" size="full">
            <DialogContent
                bgGradient="to-r"
                gradientFrom={{ base: "purple.500", _dark: "gray.500" }}
                gradientTo="white"
                position="relative"
                minH="100vh"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <DialogCloseTrigger color="black" />
                <DialogBody display="flex" alignItems="center" justifyContent="center" w="full">
                    <Container maxW="container.md" py={10}>
                        <Flex align="center" justify="space-between" minH="100vh">
                            <Box
                                bg="white"
                                p={8}
                                rounded="lg"
                                boxShadow="lg"
                                w="50%"
                                border="1px solid"
                                borderColor="gray.200"
                            >
                                <Heading as="h2" size="lg" textAlign="center" mb={6} color="purple.600">
                                    Contact Us
                                </Heading>
                                <form ref={form} style={{width: '100%'}} onSubmit={sendEmail}>
                                <VStack spacing={4}>
                                    <Text fontSize="md" fontWeight="semibold" alignSelf="start">
                                        Name
                                    </Text>
                                    <Input id="name" placeholder="Enter your name" size="lg" focusBorderColor="purple.500" name='from_name' />

                                    <Text fontSize="md" fontWeight="semibold" alignSelf="start">
                                        Email
                                    </Text>
                                    <Input id="email" type="email" placeholder="Enter your email" size="lg" focusBorderColor="purple.500" name='your_email' />

                                    <Text fontSize="md" fontWeight="semibold" alignSelf="start">
                                        Message
                                    </Text>
                                    <Textarea id="msg" placeholder="Your message" size="lg" focusBorderColor="purple.500" rows={5}  name='message' />

                                    <Button loading={isSending} loadingText={'Sending...'} type="submit" colorScheme="purple" size="lg" w="full">
                                        Send Message
                                    </Button>
                                    
                                </VStack>
                                </form>
                            </Box>
                            <Box w={'50%'} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                                <Image h={'33rem'} src="/WelcomePage.png" />
                            </Box>
                        </Flex>
                    </Container>
                </DialogBody>
            </DialogContent>
        </DialogRoot>
    )
}

export default ContactUs
