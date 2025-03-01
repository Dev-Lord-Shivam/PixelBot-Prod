import { useState } from "react";
import FeatureSection from "@/components/CustomComponents/FeatureSection";
import Footer from "@/components/CustomComponents/Footer";
import MenuCards from "@/components/CustomComponents/MenuCards";
import ProfessionSection from "@/components/CustomComponents/ProfessionSection";
import { Box, Heading, Text, Image, Flex, Link, Button, VStack, HStack, Span, Grid } from "@chakra-ui/react";
import { menuData } from "@/data/menuData";
import { useAuthModal } from "@/context/AuthContext";
import { useRecoilValue } from "recoil";
import userAtom from "@/atom/userAtom";
import WelcomeSection from "@/components/CustomComponents/WelcomeSection";
const LandingPage = () => {

  //const [isAuthOpen, setAuthOpen] = useState(false);
  const { setAuthOpen } = useAuthModal()
  const userinfo = useRecoilValue(userAtom)

  return (
    <Box p={8} maxW="container.lg" mx="auto" bg={{ base: "white", _dark: 'gray.800' }}>
      {userinfo &&
        <WelcomeSection />
      }
      {!userinfo &&

        <Flex justify={"space-between"} pt={'60px'}>

          <Box w={'50%'}>
            <Heading
              as="h1"
              fontSize="3rem"
              fontWeight="bold"
              fontFamily="system-ui"
              lineHeight="1.3" // Adjust as needed
            >
              <Box as="span">Where Intelligence,</Box> <br />
              <Box as="span" textDecor={"underline"} color="purple.600">Meets Creativity</Box>
            </Heading>

            <Text fontSize="xl" color={'gray.600'} mt={4}>
              Strengthen your writing and productivity with AI, keeping your genuine voice intact
            </Text>

            {/* Google extension rating section */}
            <Flex mt={6} gap={4} align="center">
              <HStack spacing={2} align="center">
                <Image src="https://assets.quillbot.com/images/theme/commonImages/extensionUpsell/feather-left-v2.svg" alt="left feather" h={6} w={3} />
                <Text fontSize="md" fontWeight="medium">Support Us</Text>
                <Image src="https://assets.quillbot.com/images/theme/commonImages/extensionUpsell/feather-right-v2.svg" alt="right feather" h={6} w={3} />
              </HStack>

              <HStack align="center">
                <Flex align="center" gap={2}>
                  <Image src="https://assets.quillbot.com/images/theme/commonImages/extensionUpsell/rating-stars.svg" alt="rating stars" h={4} w={20} />
                  <Text fontSize="md">4.4/5 rating</Text>
                </Flex>
              </HStack>
            </Flex>

            {/* Chrome Extension Button */}

            <Button onClick={() => setAuthOpen(true)} bg="purple.600" size={'xl'} _hover={{ bg: "purple.800" }} mt={6} alt="chrome icon">
              Sign Up, It's free!
            </Button>

          </Box>

          <Box w={'50%'}>
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            >
              <source src={"/appintro.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
        </Flex>
      }
      <Box mt={20} textAlign={"center"} w={"full"}>
        <Heading fontSize={'2rem'} fontWeight={'bold'} fontFamily="system-ui" as={"h1"}>Eight tools.{' '}
          <Box textDecor={"underline"} color={'purple.600'} as={"span"}>One Platform</Box>
        </Heading>
      </Box>

      <Box w="full" mt={10}>
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
          gap={6}
        >

          {menuData.map((item, index) => (
            <MenuCards
              key={index}
              menuicon={item.menuicon}
              menuname={item.menuname}
              description={item.description}
              bgcolor={item.bgcolor}
              path={item.path}
              id={item.id} // Pass ID for dynamic routing
              setAuthOpen={setAuthOpen}
              userinfo={userinfo}
            />
          ))}
        </Grid>
      </Box>
      <Box textAlign={"center"} mt={20} display={"flex"} flexDir={'column'} gap={8}>
        <Heading fontSize={'30px'} fontFamily={'cursive'} fontWeight={'bold'} color={{ base: "gray.800", _dark: 'white' }} as={"h1"}>
          Your AI Partner For Peak Productivity
        </Heading>
        <Heading fontSize={'1rem'} fontFamily={'cursive'} color={{ base: "gray.700", _dark: 'white' }} as={"h4"}>
          ArtiFex works with you to help you create clear, polished, and professional writing in a fraction of the time <br /> it normally takes. Welcome to the future of writing.
        </Heading>
      </Box>

      <Box w={"full"} mt={20}>
        <FeatureSection />
      </Box>
      <Box w={"full"} mt={20}>
        <ProfessionSection />
      </Box>

      <Box w={"full"} mt={20}>
        <Footer />
      </Box>
      {/* <SigninModel isOpen={isAuthOpen} onClose={() => setAuthOpen(false)} /> */}
    </Box>
  )
}

export default LandingPage
