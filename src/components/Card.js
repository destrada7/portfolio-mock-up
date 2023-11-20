import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
   return (
   <HStack
   bg="white"
   p="4"
   rounded="md"
   shadow="md"
   borderWidth="1px"
   borderColor="gray"
   spacing={4}
   justify="space-between"
   >
    <VStack align="start" spacing={2} flex="1">
      <Image src={imageSrc} alt={title} boxSize="21 rem" objectFit="cover" rounded="md" />
      <Heading as="h3" size="md" color="black">{title}</Heading>
      <Text color="black">{description}</Text>
      <Text as="h3" color="black">See more<FontAwesomeIcon icon={faArrowRight} size="1x" color="black" style={{ marginLeft: '0.5rem' }} /></Text>
    </VStack>
    
  </HStack>
  );
};

export default Card;