import { useState } from "react";
import {
    Box,
    VStack,
    Heading,
    Button,
    Input,
    Link,
    Flex,
    Text
} from "@chakra-ui/react";
import axios from "axios";
import {
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogRoot,
} from "@/components/ui/dialog";
import Cookies from "js-cookie";
import useShowToast from "@/customhooks/useShowToast";
import userAtom from "@/atom/userAtom";
import { useSetRecoilState } from "recoil";

const SigninModel = ({ setIsPageLoading ,isOpen, onClose }) => {

    const [isRegister, setIsRegister] = useState(false); // Toggle between Sign In & Sign Up
    const [loading, setLoading] = useState(false);
    const showtToast = useShowToast();
    const setUser = useSetRecoilState(userAtom)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        profession: "",
    });
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    // Handle form submission for Sign In & Sign Up
    const handleSubmit = async () => {
        if (!formData.email || !formData.password || (isRegister && (!formData.name || !formData.profession))) {
            showtToast("Please fill in all required fields", "error");
            return;
        }
        setLoading(true);
        try {
            const url = isRegister ? `${window.location.origin}/api/user/register` : `${import.meta.env.VITE_API_BASE_URL}/api/user/signin`; // Adjust API routes
            const response = await axios.post(url, formData );
            if (response.status == 200) {
                setUser(response.data);
                setIsPageLoading(true)
                onClose(); // Close modal after success
                // User will be signed in for 7 days
                Cookies.set("pixelpen-user", JSON.stringify(response.data), { expires: 7 });
                setTimeout(() => {
                    setIsPageLoading(false); // Reset the loading state
                    showtToast(
                        isRegister ? "Registered Successfully" : "Login Successfully",
                        "success"
                    );
                }, 2000);
            }
        } catch (error) {
            console.log(error)
            showtToast(
                error.response?.data?.error || "Something went wrong",
                "error"
            );
        } finally {
            setLoading(false);
        }
        
    };

    return (
        <DialogRoot open={isOpen} onOpenChange={onClose} scrollBehavior="inside" size="full">
            <DialogContent bgGradient="to-r" gradientFrom={{base:"purple.500",_dark:"gray.500"}} gradientTo="white">
                <DialogCloseTrigger color={'black'} />
                <DialogBody display="flex" alignItems="center" justifyContent="center">
                    <Flex minH="100%" align="center" w="100%" justify="center">
                        <Flex
                            h={'450px'} 
                            bg="white"
                            boxShadow="lg"
                            borderRadius="md"
                            overflow="hidden"
                            maxW="800px"
                            w="100%"
                            flexDirection={{ base: "column", md: "row" }}
                        >
                            {/* Left Side */}
                            <Box flex="1" bg={{base:"purple.600",_dark:"gray.600"}} p={10} color="white" display="flex" alignItems="center" justifyContent="center">
                                <VStack spacing={4} w="full" textAlign="center">
                                    <Heading size="lg">Welcome To PixelPen!</Heading>
                                    <Text>{isRegister ? "Already have an account?" : "Create your account for Free!"}</Text>
                                    <Button
                                        variant="outline"
                                        borderColor="white"
                                        color="white"
                                        _hover={{ bg: "white", color: "#2aa15f" }}
                                        mt={10}
                                        onClick={() => setIsRegister(!isRegister)}
                                    >
                                        {isRegister ? "Sign In" : "Sign Up"}
                                    </Button>
                                </VStack>
                            </Box>

                            {/* Right Side - Login/Register Form */}
                            <Box flex="1" p={10}>
                                <VStack spacing={5} align="stretch">
                                    <Heading color={{base:"white",_dark:'black'}} size="md" textAlign="center">
                                        {isRegister ? "Register" : "Login"}
                                    </Heading>

                                    {isRegister && (
                                        <>
                                            <Box >
                                                <Text color={"black"} mb={1}>Name</Text>
                                                <Input
                                                    color={"black"}
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    border="2px solid"
                                                    borderColor="gray.400"
                                                    placeholder="Enter Name"
                                                    required
                                                />
                                            </Box>
                                            <Box>
                                                <Text color={"black"} mb={1}>Profession</Text>
                                                <Input
                                                    color={"black"}
                                                    type="text"
                                                    name="profession"
                                                    value={formData.profession}
                                                    onChange={handleChange}
                                                    border="2px solid"
                                                    borderColor="gray.400"
                                                    placeholder="Enter Profession"
                                                />
                                            </Box>
                                        </>
                                    )}

                                    <Box>
                                        <Text color={"black"} mb={1}>Email address</Text>
                                        <Input
                                            color={"black"}
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            border="2px solid"
                                            borderColor="gray.400"
                                            placeholder="Enter Email"
                                            required
                                        />
                                    </Box>
                                    <Box>
                                        <Text color={"black"} mb={1}>Password</Text>
                                        <Input
                                            color={"black"}
                                            type="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            border="2px solid"
                                            borderColor="gray.400"
                                            placeholder="Password"
                                            required
                                        />
                                    </Box>

                                    <Button
                                        color={'white'}
                                        w="full"
                                        bg={{base:"green.500",_dark:'gray.500'}}
                                        _hover={{ bg: "#228B56" }}
                                        onClick={handleSubmit}
                                        loading={loading}
                                    >
                                        {isRegister ? "Register" : "Sign In"}
                                    </Button>

                                    {!isRegister && (
                                        <Link href="#" color="blue.500" textAlign="center" fontSize="sm">
                                            Forgot password?
                                        </Link>
                                    )}
                                </VStack>
                            </Box>
                        </Flex>
                    </Flex>
                </DialogBody>
            </DialogContent>
        </DialogRoot>
    );
};

export default SigninModel;
