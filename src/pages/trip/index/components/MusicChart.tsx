import styled from 'styled-components';
import { musicSummary } from '../types';
import { DEFAULT_IMAGE } from './data';
import ArrowRight from '@/common/assets/icon/icon-arrow-right.svg';
import useMusic from '../hooks/useMusic';
import LoadingSpinner from '@/common/components/spinner';

interface MusicChartProps {
  calendarId: string;
}

const MusicChart = ({ calendarId }: MusicChartProps) => {
  const { data: musicData, isLoading, isError } = useMusic(calendarId);

  if (isLoading) {
    // TODO: 추후 로딩 페이지 추가
    return <LoadingSpinner />;
  }

  if (isError || !musicData.songSummaries) {
    // TODO: 추후 에러 컴포넌트 추가
    return <div>노래 데이터를 가져오는 중 문제가 발생했습니다.</div>;
  }

  return (
    <Section>
      <SectionHeader>노래 TOP 5</SectionHeader>
      <ItemList>
        {musicData.songSummaries.map((item: musicSummary) => (
          <Item key={item.songId}>
            <Image
              src={item.imgUrl}
              alt={`music-${item.songId}`}
              // TODO: 임시 기본 이미지
              onError={(e) => {
                e.currentTarget.src = DEFAULT_IMAGE;
              }}
            />
            <ContentWrapper>
              <ContentTitle>
                {item.ranking}. {item.title}
              </ContentTitle>
              <ContentSubTitle>{item.artists}</ContentSubTitle>
            </ContentWrapper>
            <Icon src={ArrowRight} alt="arrow-right" />
          </Item>
        ))}
      </ItemList>
    </Section>
  );
};

const Section = styled.section`
  padding: 0 16px;
`;

const SectionHeader = styled.h2`
  padding: 20px 0 12px;
  ${({ theme }) => theme.typography.title2.bold};
`;

const ItemList = styled.ul``;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
`;

const Image = styled.img`
  margin-right: 16px;
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 4px;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const ContentTitle = styled.span`
  ${({ theme }) => theme.typography.body1.medium};
`;

const ContentSubTitle = styled.p`
  ${({ theme }) => theme.typography.body2.regular};
  color: ${({ theme }) => theme.themeColors.textSecondary};
`;

const Icon = styled.img`
  width: 28px;
  height: 28px;
`;

export default MusicChart;
