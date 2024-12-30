import styled from 'styled-components';
import { format, addMonths, subMonths, isSameMonth, isSameDay, isWithinInterval } from 'date-fns';
import CaretLeftIcon from '@/common/assets/icon/icon-calender-arrow-left.svg';
import CaretRightIcon from '@/common/assets/icon/icon-calender-arrow-right.svg';
import useCalender from '@/common/hooks/useCalender/useCalender';
import { useState } from 'react';
import { useCalendarStore } from '@/common/stores/useCalendarStore';

export interface DatePickerProps {
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
}

interface DateButtonProps {
  isCurrentMonth: boolean;
  isSelectedDay: boolean;
  isInRange: boolean;
  disabled: boolean;
}

export default function DateCol({ selectedDate, setSelectedDate }: DatePickerProps) {
  const [currentMonth, setCurrentMonth] = useState(selectedDate || new Date());
  const { currentMonthAllDates, weekDays } = useCalender(currentMonth);
  const { startDate, endDate, setStartDate, setEndDate } = useCalendarStore();

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const onChangeDate = (date: Date) => {
    if (startDate && endDate) {
      setStartDate(null);
      setEndDate(null);
    }
    setSelectedDate(date);
  };

  const isDateDisabled = (date: Date) => {
    if (startDate && !endDate) {
      return date < startDate;
    }
    if (endDate && !startDate) {
      return date > endDate;
    }
    return false;
  };

  const isInRange = (date: Date) => {
    if (!startDate || !endDate) return false;
    return isWithinInterval(date, { start: startDate, end: endDate });
  };

  return (
    <Container>
      <Header>
        <Navigation>
          <button type="button" onClick={prevMonth}>
            <img height={10} src={CaretLeftIcon} alt="" />
          </button>
          <MonthPicker>
            <span>{format(currentMonth, 'MMM yyyy')}</span>
          </MonthPicker>
          <button type="button" onClick={nextMonth}>
            <img height={10} src={CaretRightIcon} alt="" />
          </button>
        </Navigation>
      </Header>
      <WeekdaysGrid>
        {weekDays.map((days, index) => (
          <div key={index}>{days}</div>
        ))}
      </WeekdaysGrid>
      <DatesGrid>
        {currentMonthAllDates.map((date, index) => {
          const disabled = !isSameMonth(currentMonth, date) || isDateDisabled(date);
          return (
            <DateButton
              key={index}
              onClick={() => !disabled && onChangeDate(date)}
              isCurrentMonth={isSameMonth(currentMonth, date)}
              isSelectedDay={selectedDate ? isSameDay(selectedDate, date) : false}
              isInRange={isInRange(date)}
              disabled={disabled}
            >
              {date.getDate()}
            </DateButton>
          );
        })}
      </DatesGrid>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
`;

const MonthPicker = styled.div`
  display: flex;
  font-size: 0.875rem;
  align-items: center;
`;

const Navigation = styled.div`
  display: flex;
  gap: 4rem;

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

const WeekdaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  place-items: center;
`;

const DatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const DateButton = styled.button<DateButtonProps>`
  padding: 0.5rem;
  border-radius: ${({ isSelectedDay }) => (isSelectedDay ? '9999px' : '0')};
  border: none;
  background-color: ${({ isSelectedDay, isInRange, theme }: DateButtonProps & { theme: any }) =>
    isSelectedDay ? theme.colors.orange : isInRange ? '#f5ebd9' : 'transparent'};
  color: ${({ isCurrentMonth, disabled }) => (disabled ? '#d1d5db' : isCurrentMonth ? '#000000' : '#d1d5db')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;
