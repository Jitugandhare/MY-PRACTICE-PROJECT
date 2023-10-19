import {
  Image,
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Button,
  Flex,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiRedux,
} from "react-icons/si";
// import  "*"  from "../Assests/"*".png";
// import OutFit from "../Assests/Outfit.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Projects() {
  useEffect(() => {
    AOS.init({ delay: 300 });
  }, []);
  return (
    <Box id="projects" pt={"70px"}>
      <Heading
        mt={10}
        display={"inline-block"}
        padding="10px"
        bgGradient="linear(to-r, #25cefd, #f14d9f)"
        borderRadius={"15px"}
        className="tech-skill-heading"
        data-aos="fade-right"
      >
        MY PROJECTS
      </Heading>
      <Center py={50}>
        <Box
          data-aos="fade-up"
          display={"grid"}
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(2,1fr)",
          }}
          justifyContent="center"
          gap={10}
        >
          <Box
            data-aos="fade-right"
            boxShadow={"#618690 0px 19px 38px"}
            maxW={"445px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.900")}
            bgGradient="linear(to-r, rgb(34, 148, 148), rgb(31, 182, 228))"
            rounded={"md"}
            p={6}
            overflow={"hidden"}
            className="project-card"
          >
            <Box h={"210px"} mt={-6} mx={-6} mb={6} pos={"relative"}>
              <Image
                height={"250px"}
                width={"100%"}
                p={4}
                borderRadius="40px"
                // src={}
                layout={"fill"}
                className="project-image"
              />
            </Box>
            <Stack>
              <Text
                mt={5}
                color={"pink"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"2xl"}
                letterSpacing={1.1}
                className="project-title"
              >
                LifeStyle (Clone)
              </Text>
              <Heading
                color={useColorModeValue("black", "white")}
                fontSize={"2xl"}
                fontFamily={"body"}
              >
                An E-Commerce Website
              </Heading>
              <Text fontWeight={"bold"} className="project-description">
                Lifestyle is India's leading fashion destination for the latest
                trends.Lifestyle brings multiple categories including men, women
                and kids’ apparel, footwear, handbags, fashion accessories and
                beauty under the convenience of a single roof.
              </Text>
            </Stack>

            <Center>
              <HStack
                mt={{ lg: 5, md: 5, sm: 5 }}
                spacing={3}
                px={5}
                alignItems="flex-start"
                className="project-tech-stack"
              >
                <IconButton
                  data-aos="zoom-in"
                  variant="ghost"
                  size="lg"
                  bg="linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)"
                  color="white"
                  isRound={true}
                  _hover={{ bg: "black" }}
                  icon={<SiCss3 size="28px" />}
                />
                <IconButton
                  data-aos="zoom-in"
                  variant="ghost"
                  size="lg"
                  bg="linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)"
                  color="white"
                  isRound={true}
                  _hover={{ bg: "black" }}
                  icon={<SiHtml5 size="28px" />}
                />
                <IconButton
                  data-aos="zoom-in"
                  variant="ghost"
                  size="lg"
                  bg="linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)"
                  color="white"
                  isRound={true}
                  _hover={{ bg: "black" }}
                  icon={<SiJavascript size="28px" />}
                />
                <IconButton
                  data-aos="zoom-in"
                  variant="ghost"
                  size="lg"
                  bg="linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)"
                  color="white"
                  isRound={true}
                  _hover={{ bg: "black" }}
                  icon={<SiReact size="28px" />}
                />
              </HStack>
            </Center>
            <Center>
              <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                <Button
                  data-aos="fade-right"
                  rounded={"full"}
                  size={"lg"}
                  fontWeight={"normal"}
                  px={5}
                  colorScheme={"red"}
                  bgGradient="linear(to-r, #101212, #1c1a1b)"
                  _hover={{
                    bg: "linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)",
                  }}
                  className="project-github-link"
                >
                  CODE
                </Button>
                <Link to="*">
                  <Button
                    data-aos="fade-left"
                    rounded={"full"}
                    size={"lg"}
                    fontWeight={"normal"}
                    px={5}
                    colorScheme={"red"}
                    bgGradient="linear(to-r, #101212, #1c1a1b)"
                    _hover={{
                      bg: "linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)",
                    }}
                    className="project-deployed-link"
                  >
                    LIVE
                  </Button>
                </Link>
              </Stack>
            </Center>
          </Box>
          <Box
            data-aos="fade-left"
            boxShadow={"#618690 0px 19px 38px"}
            maxW={"445px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.900")}
            bgGradient="linear(to-r, rgb(34, 148, 148), rgb(31, 182, 228))"
            rounded={"md"}
            p={6}
            overflow={"hidden"}
            className="project-card"
          >
            <Box h={"210px"} mt={-6} mx={-6} mb={6} pos={"relative"}>
              <Image
                height={"250px"}
                width={"100%"}
                p={4}
                borderRadius="40px"
                src={"*"}
                layout={"fill"}
                className="project-image"
              />
            </Box>
            <Stack>
              <Text
                mt={5}
                color={"pink"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"2xl"}
                letterSpacing={1.1}
                className="project-title"
              >
                (Clone)
              </Text>
              <Heading
                color={useColorModeValue("black", "white")}
                fontSize={"2xl"}
                fontFamily={"body"}
              >
                An E-Commerce Website
              </Heading>
              <Text fontWeight={"bold"} className="project-description">
                is an E-commerce site. This is a shopping website of
                cosmetic products belongs to women such as makeup product,
                lipstick, eyeliner, sunscreen ans many more.
              </Text>
            </Stack>

            <Center>
              <HStack
                mt={{ lg: 5, md: 5, sm: 5 }}
                spacing={3}
                px={5}
                alignItems="flex-start"
                className="project-tech-stack"
              >
                <IconButton
                  data-aos="zoom-in"
                  variant="ghost"
                  size="lg"
                  bg="linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)"
                  color="white"
                  isRound={true}
                  _hover={{ bg: "black" }}
                  icon={<SiCss3 size="28px" />}
                />
                <IconButton
                  data-aos="zoom-in"
                  variant="ghost"
                  size="lg"
                  bg="linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)"
                  color="white"
                  isRound={true}
                  _hover={{ bg: "black" }}
                  icon={<SiHtml5 size="28px" />}
                />
                <IconButton
                  data-aos="zoom-in"
                  variant="ghost"
                  size="lg"
                  bg="linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)"
                  color="white"
                  isRound={true}
                  _hover={{ bg: "black" }}
                  icon={<SiJavascript size="28px" />}
                />
                <IconButton
                  data-aos="zoom-in"
                  variant="ghost"
                  size="lg"
                  bg="linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)"
                  color="white"
                  isRound={true}
                  _hover={{ bg: "black" }}
                  icon={<SiReact size="28px" />}
                />
              </HStack>
            </Center>
            <Center>
              <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                <Link
                  to={"*"}
                >
                  <Button
                    data-aos="fade-right"
                    rounded={"full"}
                    size={"lg"}
                    fontWeight={"normal"}
                    px={5}
                    colorScheme={"red"}
                    bgGradient="linear(to-r, #101212, #1c1a1b)"
                    _hover={{
                      bg: "linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)",
                    }}
                    className="project-github-link"
                  >
                    CODE
                  </Button>
                </Link>
                <Link to="*">
                  <Button
                    data-aos="fade-left"
                    rounded={"full"}
                    size={"lg"}
                    fontWeight={"normal"}
                    px={5}
                    colorScheme={"red"}
                    bgGradient="linear(to-r, #101212, #1c1a1b)"
                    _hover={{
                      bg: "linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)",
                    }}
                    className="project-deployed-link"
                  >
                    LIVE
                  </Button>
                </Link>
              </Stack>
            </Center>
          </Box>
          <Box
            data-aos="fade-right"
            boxShadow={"#618690 0px 19px 38px"}
            maxW={"445px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.900")}
            bgGradient="linear(to-r, rgb(34, 148, 148), rgb(31, 182, 228))"
            rounded={"md"}
            p={6}
            overflow={"hidden"}
            className="project-card"
          >
            <Box h={"210px"} mt={-6} mx={-6} mb={6} pos={"relative"}>
              <Image
                height={"250px"}
                width={"100%"}
                p={4}
                borderRadius="40px"
                src={"*"}
                layout={"fill"}
                className="project-image"
              />
            </Box>
            <Stack>
              <Text
                mt={5}
                color={"pink"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"2xl"}
                letterSpacing={1.1}
                className="project-title"
              >
                (Clone)
              </Text>
              <Heading
                color={useColorModeValue("black", "white")}
                fontSize={"2xl"}
                fontFamily={"body"}
              >
                An E-Commerce Website
              </Heading>
              <Text fontWeight={"bold"} className="project-description">
                is an E-commerce site. This is a shopping website of
                cosmetic products belongs to women such as makeup product,
                lipstick, eyeliner, sunscreen ans many more.
              </Text>
            </Stack>

            <Center>
              <HStack
                mt={{ lg: 5, md: 5, sm: 5 }}
                spacing={3}
                px={5}
                alignItems="flex-start"
                className="project-tech-stack"
              >
                <IconButton
                  data-aos="zoom-in"
                  variant="ghost"
                  size="lg"
                  bg="linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)"
                  color="white"
                  isRound={true}
                  _hover={{ bg: "black" }}
                  icon={<SiCss3 size="28px" />}
                />
                <IconButton
                  data-aos="zoom-in"
                  variant="ghost"
                  size="lg"
                  bg="linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)"
                  color="white"
                  isRound={true}
                  _hover={{ bg: "black" }}
                  icon={<SiHtml5 size="28px" />}
                />
                <IconButton
                  data-aos="zoom-in"
                  variant="ghost"
                  size="lg"
                  bg="linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)"
                  color="white"
                  isRound={true}
                  _hover={{ bg: "black" }}
                  icon={<SiJavascript size="28px" />}
                />
                <IconButton
                  data-aos="zoom-in"
                  variant="ghost"
                  size="lg"
                  bg="linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)"
                  color="white"
                  isRound={true}
                  _hover={{ bg: "black" }}
                  icon={<SiReact size="28px" />}
                />
              </HStack>
            </Center>
            <Center>
              <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                <Button
                  data-aos="fade-right"
                  rounded={"full"}
                  size={"lg"}
                  fontWeight={"normal"}
                  px={5}
                  colorScheme={"red"}
                  bgGradient="linear(to-r, #101212, #1c1a1b)"
                  _hover={{
                    bg: "linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)",
                  }}
                  className="project-github-link"
                >
                  CODE
                </Button>
                <Button
                  data-aos="fade-left"
                  rounded={"full"}
                  size={"lg"}
                  fontWeight={"normal"}
                  px={5}
                  colorScheme={"red"}
                  bgGradient="linear(to-r, #101212, #1c1a1b)"
                  _hover={{
                    bg: "linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)",
                  }}
                  className="project-deployed-link"
                >
                  LIVE
                </Button>
              </Stack>
            </Center>
          </Box>
          <Box
            data-aos="fade-left"
            boxShadow={"#618690 0px 19px 38px"}
            maxW={"445px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.900")}
            bgGradient="linear(to-r, rgb(34, 148, 148), rgb(31, 182, 228))"
            rounded={"md"}
            p={6}
            overflow={"hidden"}
            className="project-card"
          >
            <Box h={"210px"} mt={-6} mx={-6} mb={6} pos={"relative"}>
              <Image
                height={"250px"}
                width={"100%"}
                p={4}
                borderRadius="40px"
                src={"*"}
                layout={"fill"}
                className="project-image"
              />
            </Box>
            <Stack>
              <Text
                mt={5}
                color={"pink"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"2xl"}
                letterSpacing={1.1}
                className="project-title"
              >
                Shepora (Clone)
              </Text>
              <Heading
                color={useColorModeValue("black", "white")}
                fontSize={"2xl"}
                fontFamily={"body"}
              >
                An E-Commerce Website
              </Heading>
              <Text fontWeight={"bold"} className="project-description">
                MikkuShepora is an E-commerce site. This is a shopping website of
                cosmetic products belongs to women such as makeup product,
                lipstick, eyeliner, sunscreen ans many more.
              </Text>
            </Stack>

            <Center>
              <HStack
                mt={{ lg: 5, md: 5, sm: 5 }}
                spacing={3}
                px={5}
                alignItems="flex-start"
                className="project-tech-stack"
              >
                <IconButton
                  data-aos="zoom-in"
                  variant="ghost"
                  size="lg"
                  bg="linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)"
                  color="white"
                  isRound={true}
                  _hover={{ bg: "black" }}
                  icon={<SiCss3 size="28px" />}
                />
                <IconButton
                  data-aos="zoom-in"
                  variant="ghost"
                  size="lg"
                  bg="linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)"
                  color="white"
                  isRound={true}
                  _hover={{ bg: "black" }}
                  icon={<SiHtml5 size="28px" />}
                />
                <IconButton
                  data-aos="zoom-in"
                  variant="ghost"
                  size="lg"
                  bg="linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)"
                  color="white"
                  isRound={true}
                  _hover={{ bg: "black" }}
                  icon={<SiJavascript size="28px" />}
                />
                <IconButton
                  data-aos="zoom-in"
                  variant="ghost"
                  size="lg"
                  bg="linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)"
                  color="white"
                  isRound={true}
                  _hover={{ bg: "black" }}
                  icon={<SiReact size="28px" />}
                />
              </HStack>
            </Center>
            <Center>
              <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                <Button
                  data-aos="fade-right"
                  rounded={"full"}
                  size={"lg"}
                  fontWeight={"normal"}
                  px={5}
                  colorScheme={"red"}
                  bgGradient="linear(to-r, #101212, #1c1a1b)"
                  _hover={{
                    bg: "linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)",
                  }}
                  className="project-github-link"
                >
                  CODE
                </Button>
                <Button
                  data-aos="fade-left"
                  rounded={"full"}
                  size={"lg"}
                  fontWeight={"normal"}
                  px={5}
                  colorScheme={"red"}
                  bgGradient="linear(to-r, #101212, #1c1a1b)"
                  _hover={{
                    bg: "linear-gradient(90deg, rgb(56, 56, 57) 0%, rgb(31, 182, 228) 100%)",
                  }}
                  className="project-deployed-link"
                >
                  LIVE
                </Button>
              </Stack>
            </Center>
          </Box>
        </Box>
      </Center>

      <Box className="react-activity-calendar">
        <Box>
          <Heading
            display={"inline-block"}
            padding="10px"
            bgGradient="linear(to-r, #25cefd, #f14d9f)"
            borderRadius={"15px"}
            className="tech-skill-heading"
            data-aos="fade-right"
            marginBottom={{ base: "30px", sm: "50px" }}
          >
            GITHUB STATISTICS & CALENDER
          </Heading>
        </Box>

        <Flex
          id="git-stat"
          flexDirection={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
          }}
          width="80%"
          margin="auto"
          gap={10}
        >
          <Box margin={"auto"} data-aos="fade-right">
            <Image
              id="github-streak-stats"
              src=""
              alt="streak-stat"
            />
          </Box>
          <Box margin={"auto"} data-aos="zoom-in">
            <Image
              id="github-stats-card"
              src=""
              alt="stat-card"
            />
          </Box>

          <Box margin={"auto"} data-aos="fade-left">
            <Image
              id="github-top-langs"
              src=""
              alt="top_languages"
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
