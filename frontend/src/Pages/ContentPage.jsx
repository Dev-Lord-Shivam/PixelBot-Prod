import { Box, Button, Container, Text, Flex, Heading, Image, Textarea, Input, HStack, Spinner } from "@chakra-ui/react"
import '@toast-ui/editor/dist/toastui-editor.css';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Editor } from '@toast-ui/react-editor';
import { FaCheck, FaRegCopy } from "react-icons/fa";
import { userInput } from "@/data/userInput";
import useShowToast from "@/customhooks/useShowToast";
import { chatSession } from "@/Gemini/AiModle";
import { useRecoilValue } from "recoil";
import userAtom from "@/atom/userAtom";
import axios from "axios";

const ContentPage = () => {

    const { id } = useParams();
    const editorRef = useRef(null)
    const [formData, setFormData] = useState({});
    const [isloading, setIsLoading] = useState(false)
    const [isSyncing, setIsSyncing] = useState(false)
    const [copied, setCopied] = useState(false);
    const showToast = useShowToast();
    const userinfo = useRecoilValue(userAtom);
    const tool = userInput.find(item => item.slug === id); // Find matching tool by `slug`
    if (!tool) {
        return <Heading mt={10} textAlign="center">Stay Tuned, Available Soon</Heading>;
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const copyToClipboard = async () => {
        if (editorRef.current) {
            const editorInstance = editorRef.current.getInstance();
            const textToCopy = editorInstance.getMarkdown(); // Extract Markdown content
            try {
                await navigator.clipboard.writeText(textToCopy);
                setCopied(true);
                showToast("Output Copied To Clipboard", "info")
                setTimeout(() => setCopied(false), 1000);
            } catch (error) {
                console.error("Failed to copy:", error);
            }
        }
    }

    const sendPromptToGemini = async () => {
        try {
            setIsLoading(true);
            const prompt = tool?.aiPrompt
            const finalInput = `${JSON.stringify(formData)}, ${prompt}`;
            const res = await chatSession.sendMessage(finalInput);
            if (editorRef.current) {
                editorRef.current.getInstance().setMarkdown(res.response.text());
            }
            await saveToHistory(res.response.text());
        } catch (error) {
            showToast(
                error.response?.data?.message || "Something went wrong",
                "error"
            );
        } finally {
            setIsLoading(false);
        }
    }

    const saveToHistory = async (aiRes) => {
        try {
            setIsSyncing(true)
            const payLoad = {
                UserId: userinfo._id,
                template: tool.name,
                prompt: (() => {
                    const entries = Object.entries(formData);
                    if (entries.length === 0) return null; // Handle empty object case
                    const [lastKey, lastValue] = entries[entries.length - 1];
                    return lastValue;
                })(), // Immediately Invoked Function Expression (IIFE)
                aiResponse: aiRes,
            };            
            console.log(payLoad)
            const url = `${window.location.origin}/api/user/synchistory`
            const response = await axios.post(url, payLoad, { withCredentials: true });
            console.log(response)
            if (response.status == 200) {
                console.log(response.data)
            } else {
                showToast(
                    "Failed to Sync with History",
                    "error"
                );
            }

        } catch (error) {
            showToast(
                error.response?.data?.message || "Failed to Sync with History",
                "error"
            );
        } finally {
            setTimeout(() => setIsSyncing(false),3000)
        }
    };

    return (
        <Container maxW="full" p={6} bg={{base:"gray.100", _dark:"gray.800"}}>
            <Flex w="full" gap={6} align="start" flexDir={{base: 'column', md: 'row'}}>
                {/* Left User Input Section */}
                <Box bg={{base:"white", _dark:"gray.700"}} w={{base: "100%", md:"30%"}} p={6} borderRadius="lg" boxShadow="md">
                    <Flex direction="column" align="center" gap={2}>
                        <Image boxSize="80px" src={tool.icon} alt={tool.name} />
                        <Heading as="h1" fontWeight="bold" size="lg" color={{base:"blue.700", _dark:"white"}}>{tool.name}</Heading>
                        <Heading as="p" size="sm" fontWeight="medium" color={{base:"gray.600", _dark:"white"}} textAlign="center">
                            {tool.desc}
                        </Heading>
                    </Flex>

                    <Box mt={2}>
                        {tool.form.map((field, index) => (
                            <Box key={index} mt={4}>
                                <Heading as="label" size="sm" fontWeight="bold" color={{base:"gray.700",_dark:'white'}}>
                                    {field.label}
                                </Heading>
                                {field.field === "input" ? (
                                    <Input
                                        name={field.name}
                                        onChange={handleChange}
                                        isRequired={field.required}
                                        border="2px solid" 
                                        borderColor="gray.400"
                                        placeholder={field.placeholder}
                                        mt={2}
                                    />
                                ) : (
                                    <Textarea
                                        name={field.name}
                                        onChange={handleChange}
                                        isRequired={field.required}
                                        h="120px" border="2px solid" borderColor="gray.400"
                                        mt={2}
                                       // _placeholder={field.length > 1 && field[1].placeholder ? field[1].placeholder : field[0].placeholder}
                                       placeholder={field.placeholder}
                                    />
                                )}
                            </Box>
                        ))}
                        <Button
                            onClick={() => sendPromptToGemini()}
                            mt={4} 
                            bg={{base:"blue.500",_dark:'white'}}
                            width="full"
                            loading={isloading}
                            disabled={isloading}
                            loadingText={'Thinking..'}
                        >
                            Generate
                        </Button>
                    </Box>
                </Box>

                {/* Right Output Section */}
                <Box w={{base: "100%", md:"70%"}} bg={{base:"white",_dark:'gray.700'}} p={4} borderRadius="lg" boxShadow="md">
                    <Flex justify={"space-between"} align={"center"} p={2}>
                        <Text fontWeight={"bold"}>Your Result</Text>
                        <Box display={"flex"} gap={4}>
                            {isSyncing &&
                                <HStack>
                                    <Text fontWeight={"bold"} color={{base:"purple.500",_dark:'white'}}>Syncing</Text>
                                    <Spinner size="sm" color={{base:"purple.500",_dark:'white'}}
                                        css={{ "--spinner-track-color": "colors.gray.200" }} />
                                </HStack>
                            }
                            <Button size={'xs'} bg={{base:"purple.600",_dark:'white'}} onClick={copyToClipboard}>
                                {copied ? <FaCheck /> : <FaRegCopy />}
                                {copied ? '' : 'copy'}
                            </Button>
                        </Box>
                    </Flex>

                    <Editor
                        ref={editorRef}
                        initialValue="👋😀 Hello User, I am here to help"
                        previewStyle="vertical"
                        height="400px"
                        initialEditType="wysiwyg"
                        useCommandShortcut={true}
                    />
                </Box>
            </Flex>
        </Container>
    )
}

export default ContentPage
