import { Button, MenuButton, MenuList, MenuItem, Menu, Flex, Center } from "@chakra-ui/react";
import { ChevronDownIcon } from '@chakra-ui/icons';
import useEvents from "../hooks/useEvents";
import { IconCalendarEvent } from '@tabler/icons'

const EventSelector = () => {
  const eventsContext = useEvents();
  const handleOnChange = (indexOf: number) => {
    eventsContext.setCurrentEvent(eventsContext.events[indexOf]);
  }

  return (
    <Menu >
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        <Flex>
          <Center gap={2}>
          <IconCalendarEvent />{eventsContext.currentEvent?.name || 'Select Event'}
          </Center>
        </Flex>
      </MenuButton>
      <MenuList>
        {eventsContext.events?.map((event: any, i: any) => (<MenuItem onClick={() => { handleOnChange(i) }}>{event?.name}</MenuItem>))}
      </MenuList>
    </Menu>
  )
}

export default EventSelector