import { Box, Heading, Text } from "@chakra-ui/react";
import { BiRightArrow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import userAtom from "@/atom/userAtom";

const MenuCards = ({ menuicon, menuname, description, bgcolor, setAuthOpen, path, id }) => {

  const navigate = useNavigate();
  const userinfo = useRecoilValue(userAtom);

  const handleClick = () => {
    if (userinfo) {
      navigate(`${path}/${id}`); // Navigate with dynamic ID
    } else {
      setAuthOpen(true); // Open SigninModel if user is not logged in
    }
  };
    return (
      <Box
        display="flex"
        flexDir="column"
        gap={3}
        alignItems="start"
        p={5}
        borderRadius="lg"
        border="1px solid"
        borderColor="gray.200"
        boxShadow="lg"
        bg={bgcolor}
        color="white"
        cursor="pointer"
        transition="0.3s"
        _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
        w="full"
        h="auto"
        onClick={handleClick} // Add click event
      >
        {/* Icon Box */}
        <Box w="44px" h="44px" fontSize="2rem" display="flex" alignItems="center" justifyContent="center">
          {menuicon}
        </Box>
  
        {/* Text Content */}
        <Box w="full">
          <Heading as="h5" size="md" display="flex" alignItems="center" justifyContent="space-between" gap={2}>
            <Box as="span">{menuname}</Box>
            <Box as="span">
              <BiRightArrow />
            </Box>
          </Heading>
          <Text fontSize="sm" opacity={0.9}>
            {description}
          </Text>
        </Box>
      </Box>
    );
  };
  
export default MenuCards
