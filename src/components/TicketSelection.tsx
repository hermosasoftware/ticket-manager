import {
  Box, Button, Heading, Radio, RadioGroup, Spacer, Stack, Text,
  Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer,
} from '@chakra-ui/react'
import { useState } from 'react'
import { titleTextSize, subtitleTextSize, nomralTextSize } from "../utils/ResponsiveStyles";
import useEvents from '../hooks/useEvents'
import TicketRowInfo from './TicketRowInfo';

const TicketSelection = () => {
  const eventsContext = useEvents();
  const [radioValue, setRadioValue] = useState<string>('0')
  const { aquiredTickets } = eventsContext;
  const [currentTypeOfTicket, setCurrentTypeOfTicket] = useState<boolean>(false)

  const handleOnChangeRB = (e: any) => {
    setRadioValue(e.valueOf())
  }

  const newTicket = (ticketName: string) => {
    let tempTicket;
    eventsContext.currentEvent?.ticketTypes?.forEach((ticket: any) => {
      if (ticket.name === ticketName) {
        tempTicket = { ...ticket, quantity: 1 }
        delete tempTicket.quantityLeft;
      }
    });
    return tempTicket;
  }

  const findIndexedTicket = (ticketName: string) =>
    eventsContext.aquiredTickets?.findIndex((ticket: any) => ticket.name === ticketName)

  const handleOnChange = (ticketName: string, value: number) => {
    let aquiredTicketsCopy = eventsContext.aquiredTickets?.slice() || [];
    const tktIndex = findIndexedTicket(ticketName);
    aquiredTicketsCopy[tktIndex].quantity = value;
    aquiredTicketsCopy[tktIndex].quantity > 9 ? setCurrentTypeOfTicket(true) : setCurrentTypeOfTicket(false)
    eventsContext.setAquiredTickets(aquiredTicketsCopy);
  }


  const handleAdd = (ticketName: string) => {
    const tktIndex = findIndexedTicket(ticketName);
    let aquiredTicketsCopy = eventsContext.aquiredTickets?.slice() || [];
    if (tktIndex >= 0) {
      aquiredTicketsCopy[tktIndex].quantity++;
      aquiredTickets[tktIndex].quantity > 9 ? setCurrentTypeOfTicket(true) : setCurrentTypeOfTicket(false)
    } else {
      aquiredTicketsCopy.push(newTicket(ticketName));
    }
    eventsContext.setAquiredTickets(aquiredTicketsCopy);
  }
  
  return (
    <>
      <Box minWidth='50%' gap='2' mt={"50px"}>
        <Heading size='lg' as='h2' >
          Ticket Configuration
        </Heading >
        <RadioGroup colorScheme='teal' size='lg' onChange={(e) => handleOnChangeRB(e)} value={radioValue}>
          <Stack direction={['column', 'column', 'row', 'row']} marginTop={4} gap={[2, 2, 4, 6]} spacing={[2, 2, 4, 6]} >
            <Text fontSize={subtitleTextSize} fontWeight={'bold'}>
              Available options:</Text>
            <Stack direction={'row'} justifyContent={'flex-start'} gap={6} spacing={[4, 4, 4, 6]} >
              {eventsContext.currentEvent?.ticketTypes?.map((ticket: any, i: number) => {
                return <>
                  <Radio value={`${ticket?.name}`}>
                    <Text fontSize={nomralTextSize} fontWeight={'bold'}>
                      {ticket?.name}</Text>
                    <Spacer />
                    <Text as='sub' fontSize={nomralTextSize} color='gray.400' wordBreak={'keep-all'}>
                      {ticket?.quantityLeft !== 0 ? ticket?.quantityLeft + ' Left' : 'SoldOut'} </Text>
                  </Radio>
                </>
              })}
              <Button disabled={radioValue === '0' || currentTypeOfTicket} colorScheme={'teal'} onClick={() => handleAdd(radioValue)} >Add</Button>
            </Stack>
          </Stack>
        </RadioGroup>
        {/* Table */}
        <TableContainer marginTop={4}>
          <Table variant='simple' fontSize={nomralTextSize}>
            <Thead>
              <Tr>
                <Th>Ticket name</Th>
                <Th>Price</Th>
                <Th>quantity</Th>
                <Th>Total</Th>
              </Tr>
            </Thead>
            <Tbody>
              {aquiredTickets?.map((ticket: any) => <TicketRowInfo ticket={ticket} handleOnChange={handleOnChange} /> )}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th></Th>
                <Th></Th>
                <Th></Th>
                <Th isNumeric>0</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Box>
    </>
  )
}
export default TicketSelection