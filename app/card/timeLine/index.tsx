import { Timeline, TimelineContent, TimelineItem, TimelinePoint } from 'keep-react';
import { timelineComponent } from '@/data';

export const TimelineComponent = () => {
  return (
    <Timeline>
      {timelineComponent.map((item) => (
        <TimelineItem key={item.id} className="my-2">
          <TimelinePoint />
          <TimelineContent className="cursor-default p-2 transition delay-75 rounded-xl hover:bg-gray-700">
            <p className="text-white">{item.time}</p>
            <p className="text-white mb-1">{item.title}</p>
            <TimelineContent className="text-white !mb-0 text-justify md:pr-10">
              {item.texto} <br />
            </TimelineContent>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};