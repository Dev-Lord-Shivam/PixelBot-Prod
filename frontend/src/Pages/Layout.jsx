
import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  Text,
  VStack,
  Link,
  Image,
  useBreakpointValue
} from "@chakra-ui/react";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger, Button } from "@chakra-ui/react";
import { FaBars, FaRegUser, FaAngleDoubleLeft, FaRobot } from "react-icons/fa";
import { MdLogin, MdHome, MdHistory, MdMailOutline, MdDarkMode, MdLogout, MdLightMode } from "react-icons/md";
import bot from '../assets/bot.gif';
import SigninModel from "@/components/CustomComponents/SigninModel";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userAtom from "@/atom/userAtom.js";
import { useAuthModal, useContactModal } from "@/context/AuthContext.jsx";
import axios from "axios";
import Cookies from "js-cookie";
import useShowToast from "@/customhooks/useShowToast";
import { menuData } from "@/data/menuData";
import { useColorMode } from "@/components/ui/color-mode";
import PageLoader from "@/components/CustomComponents/PageLoader";
import ContactUs from "@/components/CustomComponents/ContactUs";

export default function Layout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { isAuthOpen, setAuthOpen } = useAuthModal();
  const { isContactOpen, setContactOpen } = useContactModal();
  const [isPageLoading, setIsPageLoading] = useState(true)
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  const userinfo = useRecoilValue(userAtom);
  const showToast = useShowToast();
  const setUser = useSetRecoilState(userAtom);
  const isMobile = useBreakpointValue({ base: true, md: false });
  useEffect(() => {
    setTimeout(() => setIsPageLoading(false), 2000)
  })

  const handleNavigation = (url) => {
    if (!userinfo) {
      setAuthOpen(true); // Show SigninModel if not logged in
    } else {
      navigate(url);
    }
  }

  const logOutUser = async () => {
    setIsPageLoading(true)
    try {
      const res = await axios.get(`${window.location.origin}/api/user/logout`);
      if (res.status == 200) {
        Cookies.remove("pixelpen-user");

        setTimeout(() => {
          setIsPageLoading(false); // Reset the loading state
          showToast(
            "Logout Successfully",
            "warning"
          );
        }, 2000);
        setUser(null)
      }
    } catch (error) {
      showToast(
        error.message || "something is wrong",
        "error"
      );
    }
  }

  return isPageLoading ? (
    <PageLoader />
  ) : (
    <>
      <Flex h="100vh">
        {/* Sidebar */}
        {!isMobile && (
          <Box
            w={isCollapsed ? "50px" : "220px"}
            bg={{ base: "white", _dark: 'gray.900' }}
            //color="white"
            h="100vh"
            borderRight="1px solid"
            borderColor="gray.200"
            transition="width 0.3s ease"
            position="fixed"
            top={0}
            left={0}
            zIndex={10}

          >
            {/* Sidebar Header */}
            <Flex justify={isCollapsed ? "center" : "space-between"} align="center" p={2}>
              {!isCollapsed && <Image src={bot} alt="Bot Animation" width="50px" height="50px" />}
              <IconButton
                aria-label="Toggle Sidebar"
                onClick={() => setIsCollapsed(!isCollapsed)}
                variant="ghost"
                color={{ base: "black", _dark: 'white' }}
              >
                {isCollapsed ? <FaBars /> : <FaAngleDoubleLeft />}
              </IconButton>
            </Flex>

            {/* Sidebar Navigation */}
            <VStack align="stretch" spacing={2} p={4}>
              {menuData.map((item, index) => (
                <Link key={index} display="flex" alignItems="center" py={2} onClick={() => handleNavigation(`${item.path}/${item.id}`)}>
                  {item.sideBarIcon}
                  {!isCollapsed && <Text fontWeight="bold" fontSize="sm" ml={2}>{item.menuname}</Text>}
                </Link>
              ))}
            </VStack>
          </Box>
        )}
        {/* Main Content Area */}
        <Box flex="1" ml={!isMobile ? (isCollapsed ? "50px" : "220px") : "0"} h="100vh" display="flex" flexDirection="column">
          {/* Navbar */}
          <Box
            borderBottom="1px solid"
            borderColor="gray.200"
            position="fixed"
            top={0}
            left={!isMobile ? (isCollapsed ? "50px" : "220px") : "0"}
            right={0}
            zIndex={9}
            bg={{ base: "white", _dark: 'gray.900' }}
            px={4}
            py={2}
            shadow="sm"
          >
            <Flex align="center" justify="space-between">
              <Flex align="center" gap={2}>
                <Text fontSize="xl" color={{ base: "purple.600", _dark: 'white' }} fontWeight="bold"><FaRobot /></Text>
                <Text fontSize="xl" color={{ base: "purple.600", _dark: 'white' }} fontWeight="bold">PixelBot</Text>
              </Flex>
              <Flex align="center" gap={4}>
                {/* Home Button */}
                <Button onClick={() => navigate('/')} bg={{ base: "purple.600", _dark: 'white' }} size={'xs'} variant="solid">
                  <MdHome /> Home
                </Button>
                {userinfo &&
                  <Button onClick={() => navigate(`/history/${userinfo._id}`)} bg={{ base: "purple.600", _dark: 'white' }} size={'xs'} variant="solid">
                    <MdHistory /> History
                  </Button>
                }
                {/* User Menu */}
                <Box position="relative">
                  <MenuRoot>
                    <MenuTrigger asChild>
                      <IconButton bg={{ base: "white", _dark: 'gray.900' }} rounded={8} color={{ base: "gray.600", _dark: 'white' }} fontWeight="bolder">
                        <FaRegUser />
                      </IconButton>
                    </MenuTrigger>
                    <MenuContent
                      position="absolute"
                      top="100%"
                      right="0"
                      zIndex="10"
                      bg={{ base: "white", _dark: 'black' }}
                      border="1px solid"
                      borderColor="gray.200"
                      boxShadow="md"
                      w={40}
                      p={2}
                    >
                      {!userinfo &&
                        <MenuItem value="login" onClick={() => setAuthOpen(true)}>
                          <Flex align="center">
                            <MdLogin />
                            <Text ml={2} fontWeight="bold" fontSize="xs">Login/Sign up</Text>
                          </Flex>
                        </MenuItem>
                      }
                      {userinfo && <MenuItem value="login" onClick={() => logOutUser()}>
                        <Flex align="center">
                          <MdLogout />
                          <Text ml={2} fontWeight="bold" fontSize="xs">Log out</Text>
                        </Flex>
                      </MenuItem>
                      }
                      <MenuItem value="dark-mode" onClick={toggleColorMode}>
                        <Flex align="center">
                          {colorMode === "light" ? <MdDarkMode /> : <MdLightMode />}
                          <Text ml={2} fontWeight="bold" fontSize="xs">
                            {colorMode === "light" ? "Dark Mode" : "Light Mode"}
                          </Text>
                        </Flex>
                      </MenuItem>

                      <MenuItem value="contact" onClick={() => setContactOpen(true)}>
                        <Link>
                          <Flex align="center">
                            <MdMailOutline />
                            <Text ml={2} fontWeight="bold" fontSize="xs">Contact Us</Text>
                          </Flex>
                        </Link>
                      </MenuItem>
                    </MenuContent>
                  </MenuRoot>
                </Box>
              </Flex>
            </Flex>
            {isMobile &&
              <Flex w={'full'} gap={10} borderTop={'2px solid'} borderColor="gray.200">
                {menuData.map((item, index) => (
                  <Link key={index} display="flex" alignItems="center" py={2} onClick={() => handleNavigation(`${item.path}/${item.id}`)}>
                    {item.sideBarIcon}
                  </Link>
                ))}
              </Flex>
            }
          </Box>

          {/* Page Content - Scrollable */}
          <Box flex="1" bg={{ base: "white", _dark: 'gray.900' }} h={'100vh'} mt="56px">
            {children}
          </Box>

          {isAuthOpen && <SigninModel setIsPageLoading={setIsPageLoading} isOpen={isAuthOpen} onClose={() => setAuthOpen(false)} />}
          {isContactOpen && <ContactUs isOpen={isContactOpen} onClose={() => setContactOpen(false)} />}
        </Box>
      </Flex>
    </>
  );

}

