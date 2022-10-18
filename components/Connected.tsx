import { Container, Text, Heading, VStack, Button, HStack, Image} from '@chakra-ui/react'
import { FC } from 'react'

const Connected: FC = () => {

   
    
    return (
       <VStack spacing={20}>
            <Container>
                <VStack spacing={8}>
                    <Heading color="white" as="h1" size="2xl" noOfLines={1} textAlign="center">
                        Welcome friend.
                    </Heading>
                    <Text color="white" fontSize="xl" textAlign="center">
                        Each toy is randomly generated and can be staked to receive
                        <Text as="b"> $FUN</Text>. Use your <Text as="b"> $FUN</Text> to upgrade your toy and receive perks within the community!
                    </Text>
                </VStack>
            </Container>
            <HStack spacing={10}>
                <Image src="toy1.png" alt="" width="100px"/>
                <Image src="toy2.png" alt="" width="100px"/>
                <Image src="toy3.png" alt="" width="100px"/>
                <Image src="toy4.png" alt="" width="100px"/>
                <Image src="toy5.png" alt="" width="100px"/>
            </HStack>

            <Button bgColor="accent" color="white" maxW="380px">
                <Text>mint toy</Text>
            </Button>
       </VStack> 
    )
}

export default Connected