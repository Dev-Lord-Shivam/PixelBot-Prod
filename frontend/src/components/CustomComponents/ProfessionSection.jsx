import { Box, Flex, Heading, Text, Grid, GridItem, Tabs, Image, Link } from "@chakra-ui/react";
import { useState } from "react";

const ProfessionSection = () => {
  const [bgCol, setBgCol] = useState('blue.100')
  return (
    <Box w={"full"} rounded={20} shadow={'md'} bg={bgCol} p={20} display={"flex"} alignItems={"center"} flexDir={'column'} justifyContent={"center"}>
      <Heading fontSize={'2rem'} fontWeight={"bold"} color={'black'} mb={6}>Perfect any project with ArtiFex</Heading>
      <Tabs.Root variant="line" defaultValue="Students">
        <Flex justifyContent={"center"}>
          <Tabs.List>
            <Tabs.Trigger color={'black'} onClick={() => setBgCol('blue.100')} value="Students">Students</Tabs.Trigger>
            <Tabs.Trigger color={'black'} onClick={() => setBgCol('green.100')} value="Business">Business Analyst</Tabs.Trigger>
            <Tabs.Trigger color={'black'} onClick={() => setBgCol('yellow.100')} value="creators">Content creators</Tabs.Trigger>
            <Tabs.Trigger color={'black'} onClick={() => setBgCol('orange.100')} value="language">English language learners</Tabs.Trigger>
            <Tabs.Trigger color={'black'} onClick={() => setBgCol('purple.100')} value="academics">Advanced academics</Tabs.Trigger>
          </Tabs.List>
        </Flex>
        <Tabs.Content value="Students">
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
            <Box p={20}>
              <Heading color={'gray.800'} fontSize={'1.5rem'}>Ace your essays</Heading>
              <br />
              <Text color={'gray.700'}>
                Stressing over a paper? No worries. QuillBot can help you draft an essay
                you’re proud of—and finish before the due date. Your professors will be impressed.
              </Text>
            </Box>
            <Image src="https://assets.quillbot.com/images/theme/light/homePage/user-students_v3.png" alt="Students" width="100%" />
          </Grid>
        </Tabs.Content>
        <Tabs.Content value="Business">
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
            <Box p={20}>
              <Heading color={'gray.800'} fontSize={'1.5rem'}>Write like a boss</Heading>
              <br />
              <Text color={'gray.700'}>
                Whether you’re drafting an important email or planning a big project,
                QuillBot infuses your writing with power, confidence, and professionalism.
              </Text>
            </Box>
            <Image src="https://assets.quillbot.com/images/theme/light/homePage/user-professionals_v3.png" alt="Working professionals" width="100%" />
          </Grid>
        </Tabs.Content>
        <Tabs.Content value="creators">
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
            <Box p={20}>
              <Heading color={'gray.800'} fontSize={'1.5rem'}>Ignite your content flow</Heading>
              <br />
              <Text color={'gray.700'}>
                Create content that wows your audience in record time. Our features are specially designed
                for brainstorming, rewriting, and research.
              </Text>
            </Box>
            <Image src="https://assets.quillbot.com/images/theme/light/homePage/user-creators_v4.png" alt="Content creators" width="100%" />
          </Grid>
        </Tabs.Content>
        <Tabs.Content value="language">
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
            <Box p={20}>
              <Heading color={'gray.800'} fontSize={'1.5rem'}>Communicate clearly and fluently</Heading>
              <br />
              <Text color={'gray.700'}>
                Start sounding like a native speaker. Effortlessly transform your thoughts into natural, polished English.
              </Text>
            </Box>
            <Image src="https://assets.quillbot.com/images/theme/light/homePage/user-learners_v3.png" alt="English language learners" width="100%" />
          </Grid>
        </Tabs.Content>
        <Tabs.Content value="academics">
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
            <Box p={20}>
              <Heading color={'gray.800'} fontSize={'1.5rem'}>Craft stellar research papers</Heading>
              <br />
              <Text color={'gray.700'}>
                Elevate your research and writing process.
                Detect AI-generated content,
                scan for plagiarism,
                generate and organize citations, and much more.
              </Text>
            </Box>
            <Image src="https://assets.quillbot.com/images/theme/light/homePage/user-academics_v3.png" alt="Advanced academics" width="100%" />
          </Grid>
        </Tabs.Content>
      </Tabs.Root>
    </Box>
  )
}

export default ProfessionSection
