import styled from 'styled-components';
import AppBar from '@/common/components/appbar';
import Container from '@/common/components/layout/Container';
import { musicInfoData } from './data';

interface MusicInfoProps {
  calendarId: string;
  musicId: string;
}

const MusicInfo = ({ calendarId, musicId }: MusicInfoProps) => {
  // TODO: 에러 방지를 위해 임시로 console.log 추가, api 연동 후 삭제
  console.log(calendarId, musicId);
  return (
    <>
      <AppBar leftContent={<AppBar.ArrowLeft />} text="상세" rightContent={<AppBar.GoHome />} />
      <Container>
        <VideoSection>
          <IframeWrapper>
            <Iframe
              src={`https://www.youtube.com/embed/${musicInfoData.youtubeAddr}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></Iframe>
          </IframeWrapper>
        </VideoSection>
        <ContentSection>
          <Title>{musicInfoData.title}</Title>
          <ReleaseDate>{musicInfoData.releaseDate}</ReleaseDate>
        </ContentSection>
        <ContentSection>
          <Description>{musicInfoData.lyrics}</Description>
        </ContentSection>
      </Container>
    </>
  );
};

const VideoSection = styled.section`
  padding: 16px 0;
`;

const IframeWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ContentSection = styled.div`
  margin: 4px 0 12px;
`;

const Title = styled.h1`
  ${({ theme }) => theme.typography.title1.bold};
  padding: 16px 0;
`;

const ReleaseDate = styled.span`
  ${({ theme }) => theme.typography.label.regular}
  color: ${({ theme }) => theme.themeColors.textSecondary};
`;

const Description = styled.p`
  ${({ theme }) => theme.typography.body1.regular}
`;

export default MusicInfo;
