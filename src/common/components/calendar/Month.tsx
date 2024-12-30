import { format, subYears, addYears, isSameMonth } from 'date-fns';
import CaretLeftIcon from '@/common/assets/icon/icon-calender-arrow-left.svg';
import CaretRightIcon from '@/common/assets/icon/icon-calender-arrow-right.svg';
import styled from 'styled-components';
import useCalender from '@/common/hooks/useCalender/useCalender';
import { DatePickerProps } from '.';

export default function Month({ setPickerType, selectedDate, setSelectedDate }: DatePickerProps) {
  const { allMonth } = useCalender(selectedDate);
  const onNextYear = () => {
    setSelectedDate(addYears(selectedDate, 1));
  };

  const onPrevYear = () => {
    setSelectedDate(subYears(selectedDate, 1));
  };

  const onChangeMonth = (month: Date) => {
    setSelectedDate(month);
  };

  return (
    <Container>
      <Header>
        <YearDisplay>
          {format(selectedDate, 'MMM yyyy')}
          <button
            type="button"
            onClick={() => {
              setPickerType('date');
            }}
          >
            <span>...</span>
          </button>
        </YearDisplay>
        <ButtonGroup>
          <button type="button" onClick={onPrevYear}>
            <img height={10} src={CaretLeftIcon} alt="" />
          </button>
          <button type="button" onClick={onNextYear}>
            <img height={10} src={CaretRightIcon} alt="" />
          </button>
        </ButtonGroup>
      </Header>
      <MonthGrid>
        {allMonth.map((month, index) => (
          <MonthButton
            type="button"
            key={index}
            isSelected={isSameMonth(selectedDate, month)}
            onClick={() => onChangeMonth(month)}
          >
            {format(month, 'MMM')}
          </MonthButton>
        ))}
      </MonthGrid>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 216px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem;
`;

const YearDisplay = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 12px;
  font-weight: 500;
  button {
    background: none;
    border: none;
    text-align: center;
  }
`;

const ButtonGroup = styled.div`
  button {
    width: 1.5rem;
    height: 1rem;
    background: none;
    border: none;
  }
`;

const MonthGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const MonthButton = styled.button<{ isSelected: boolean }>`
  border-radius: 9999px;
  border: none;
  padding: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  background-color: ${({ isSelected }) => (isSelected ? '#f5ebd9' : 'transparent')};
  color: ${({ isSelected }) => (isSelected ? '#FFFFFF' : '#333333')};

  &:hover {
    background-color: ${({ isSelected }) => (isSelected ? '#d1d5db' : '#f5ebd9')};
    color: ${({ isSelected }) => (isSelected ? '#333333' : '#d1d5db')};
  }
`;
