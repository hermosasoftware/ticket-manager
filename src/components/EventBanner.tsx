import { Box, Stack, Text, Heading, Spacer, } from "@chakra-ui/react";
import dayjs from 'dayjs';
import useEvents from '../hooks/useEvents';
import { titleTextSize, subtitleTextSize, nomralTextSize } from "../utils/ResponsiveStyles";
const EventBanner = () => {
  const eventsContext = useEvents();
  const { currentEvent } = eventsContext;

  return (
    <Box minWidth='max-content' alignItems='center' gap='2'>
      <Heading size={titleTextSize} as='h2' marginTop={0} >{currentEvent?.name}</Heading>
      {Object.keys(currentEvent).length ?
        <Stack direction={['column', 'column', 'row', 'row']} marginTop={4}  >
          <Stack direction='row' spacing={2} marginBottom={6}>
            <Text as='sub' fontSize={subtitleTextSize} fontWeight={'bold'} wordBreak={'keep-all'}>
              Location: </Text>
            <Text as='sub' fontSize={subtitleTextSize} color='gray.200'>{currentEvent?.location.toString()}</Text>
          </Stack>
          <Spacer />
          <Stack spacing={3} >
            <Stack direction='row' spacing={2} flexWrap='nowrap'>
              <Text as='sub' fontSize={nomralTextSize} fontWeight={'bold'} wordBreak={'keep-all'}>
                {'Start Day:'} </Text>
              <Spacer />
              <Text as='sub' fontSize={nomralTextSize} color='gray.400' wordBreak={'keep-all'}>
                {dayjs(currentEvent?.dates[0]).format('DD MMMM YYYY')}</Text>
            </Stack>
            <Spacer />
            <Stack width={'100%'} direction='row' spacing={2} flexWrap='nowrap'>
              <Text as='sub' fontSize={nomralTextSize} fontWeight={'bold'} wordBreak={'keep-all'}>
                {'End Day:'} </Text>
              <Spacer />
              <Text as='sub' fontSize={nomralTextSize} color='gray.400' wordBreak={'keep-all'} textAlign='right'>
                {dayjs(currentEvent?.dates[currentEvent?.dates?.length - 1]).format('DD MMMM YYYY')}
              </Text>
            </Stack>
          </Stack>
        </Stack>
        :
        <Stack>
          <Heading size={titleTextSize} as='h2' >No event selected</Heading>
        </Stack>}
    </Box>
  )
}

export default EventBanner