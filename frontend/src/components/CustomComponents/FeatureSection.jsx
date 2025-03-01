import { Box, Grid, Heading, Image, Text } from "@chakra-ui/react";

const FeatureSection = () => {
  const features = [
    {
      title: "Perfect words, every time",
      description:
        "Make your writing stand out. From spicing up sentences to stepping up style, our tools help your ideas shine. We enhance your ideas—we don’t replace them.",
      imgSrc:
        "https://assets.quillbot.com/images/theme/light/homePage/feature-1_v3.png",
      alt: "perfect",
    },
    {
      title: "Speed without sacrifice",
      description:
        "Say goodbye to all-nighters and nail-biters. QuillBot helps you conquer deadlines without reducing quality. It’s like giving your writing process rocket fuel.",
      imgSrc:
        "https://assets.quillbot.com/images/theme/light/homePage/feature-2_v3.png",
      alt: "speed",
    },
    {
      title: "Clear, confident communication",
      description:
        "Stop stressing over pressing send. Instead, feel confident every message hits the mark. We straighten messy emails, erase embarrassing typos, and more.",
      imgSrc:
        "https://assets.quillbot.com/images/theme/light/homePage/feature-3_v3.png",
      alt: "confident",
    },
  ];

  return (
    <Grid templateColumns={{ base: "1fr", md: "1fr" }} gap={8} pl={20} pr={20}>
      {features.map((feature, index) => (
        <Box key={index} display={{ md: "flex" }} gap={8} alignItems="center">
          <Box flex={1}>
            <Heading size="lg" mb={2}>
              {feature.title}
            </Heading>
            <Text fontSize="md">{feature.description}</Text>
          </Box>
          <Box flex={1}>
            <Image src={feature.imgSrc} alt={feature.alt} width="100%" />
          </Box>
        </Box>
      ))}
    </Grid>
  );
};

export default FeatureSection;
