import { useEffect, useState } from "react"
import { Button, Input, Td, Tr, Text, useNumberInput } from "@chakra-ui/react"
import { EHandlerIncDec } from "../types/ticket"

interface ITicketRowInfoProps {
  ticket: any
  handleOnChange:Function
}

const TicketRowInfo = ({ ticket, handleOnChange }: ITicketRowInfoProps) => {

  // ticket quantity like a counter & ticket.quantity as default value
  const [ticketQuantity, setTicketQuantity] = useState<number>(ticket.quantity || 0)

  useEffect(() => {
    // updates the state from add button
    if (ticket?.quantity !== ticketQuantity) setTicketQuantity(ticketQuantity + 1)
  }, [ticket?.quantity])


  // updates the state regarding the onchange action
  const handleQuantityEntries = ({target : { value }}: React.ChangeEvent<HTMLInputElement>) => () => {
    const valueToNumber = +value 
    if ((valueToNumber >= 0) && (valueToNumber <= 10)) {
      setTicketQuantity(valueToNumber)
    }
    return;
   }

  // generic function to handle both actions [increment, decrement]
  const ticketsQuantityHandler = (key: string) => () => {
    if (key === EHandlerIncDec.dec) {
      setTicketQuantity(+ticketQuantity - 1) // UI counter
      handleOnChange(ticket?.name, +ticketQuantity - 1) // value that will be sended to the service
    } else {
      setTicketQuantity(+ticketQuantity + 1)
      handleOnChange(ticket?.name, +ticketQuantity + 1)
    }
  }

  return (
    <Tr>
      <Td>{ticket?.name}</Td>
      <Td>{ticket?.price}</Td>
      <Td >
        <Button onClick={ticketsQuantityHandler(EHandlerIncDec.dec)} disabled={ticketQuantity <= 1} marginRight={2} fontSize={'xl'} w={'8'} h={'8'}  fontWeight={'bold'} colorScheme={'red'} textAlign={'center'} >-</Button>
        <Input type={'number'} value={ticketQuantity} width={'25%'} onChange={handleQuantityEntries} />
        <Button onClick={ticketsQuantityHandler(EHandlerIncDec.inc)} marginLeft={2} fontSize={'xl'} w={'8'} h={'8'} disabled={ticketQuantity >= 10} fontWeight={'bold'} colorScheme={'teal'} textAlign={'center'} >+</Button>
      </Td>
      <Td >{(ticket?.price * ticketQuantity).toString()}</Td>
    </Tr>
  )
}

export default TicketRowInfo;