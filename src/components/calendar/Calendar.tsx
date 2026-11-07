import { Calendar as MantineCalendar } from '@mantine/dates';
import dayjs from 'dayjs';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import classes from './Calendar.module.css';

type CalendarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type CalendarProps = {
  value?: string | null;
  onChange?: (date: string) => void;
  defaultDate?: Date;
  size?: CalendarSize;
  fullWidth?: boolean;
};

export function Calendar({
  value,
  onChange,
  defaultDate,
  size = 'md',
  fullWidth = true,
}: CalendarProps) {
  return (
    <MantineCalendar
      size={size}
      fullWidth={fullWidth}
      defaultDate={defaultDate}
      previousIcon={<ChevronLeft />}
      nextIcon={<ChevronRight />}
      getDayProps={date => ({
        selected: value ? dayjs(date).isSame(value, 'date') : false,
        onClick: () => onChange?.(date),
      })}
      classNames={{
        calendarHeader: classes.calendarHeader,
        calendarHeaderControl: classes.calendarHeaderControl,
        calendarHeaderControlIcon: classes.calendarHeaderControlIcon,
        calendarHeaderLevel: classes.calendarHeaderLevel,
        weekday: classes.weekday,
        month: classes.month,
        day: classes.day,
      }}
    />
  );
}
