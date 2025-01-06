import styled from 'styled-components';
import Logo from '../Logo';
import ArrowLeft from './ArrowLeft';
import Heart from './Heart';
import GoHome from './GoHome';
import CompleteButton from './CompleteButton';

interface AppBarProps {
  leftContent?: React.ReactNode;
  text?: string;
  rightContent?: React.ReactNode;
}

const AppBar = ({ leftContent, text, rightContent }: AppBarProps) => {
  return (
    <Container>
      <Left>
        {leftContent}
        <span>{text}</span>
      </Left>
      <Right>
        <Icon>{rightContent}</Icon>
      </Right>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: auto;
  right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  padding: 16px;
  width: 100%;
  height: 72px;
  max-width: var(--max-width);
  min-width: var(--min-width);
`;

const Left = styled.div`
  display: flex;
  align-items: top;
  gap: 1rem;
  span {
    ${({ theme }) => theme.typography.title3.bold}
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  cursor: pointer;
`;

export default AppBar;

AppBar.logo = Logo;
AppBar.ArrowLeft = ArrowLeft;
AppBar.Heart = Heart;
AppBar.GoHome = GoHome;
AppBar.CompleteButton = CompleteButton;
