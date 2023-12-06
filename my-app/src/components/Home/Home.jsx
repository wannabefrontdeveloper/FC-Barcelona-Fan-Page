import React, { useState, useEffect } from 'react';
import './Home.css'; // 홈 컴포넌트에 적용될 CSS 스타일

// 각종 대회 이미지 파일 임포트
import laligaImage from './laliga_image.png';
import championsLeagueImage from './champions_league_image.png';
import copaDelReyImage from './copa_del_rey_image.png';
import superCupImage from './super_cup_image.png';
import uefaSuperCupImage from './uefa_super_cup_image.png';
import fifaClubWorldCupImage from './fifa_club_world_cup_image.png';
import fanImage from './fan_image.png';

// 대회 이미지를 제목에 매핑하는 객체
const competitionImages = {
  "라리가 우승 27회!": laligaImage,
  "챔피언스리그 우승 5회!": championsLeagueImage,
  "코파 델 레이 우승 31회!": copaDelReyImage,
  "슈퍼컵 우승 18회!": superCupImage,
  "유에파 슈퍼컵 우승 5회!": uefaSuperCupImage,
  "피파 클럽 월드컵 우승 3회!": fifaClubWorldCupImage,
  "클럽 그 이상의 클럽! FC 바르셀로나 팬페이지에 오신걸 환영합니다!": fanImage,
};

function Home() {
  // 초기 컨텐츠 배열 및 현재 컨텐츠 인덱스 상태 변수
  const initialContents = Object.keys(competitionImages);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  // useEffect를 사용하여 일정 간격으로 컨텐츠를 전환하는 타이머 설정
  useEffect(() => {
    const interval = setInterval(() => {
      // 인덱스가 컨텐츠 배열의 끝에 도달하면 타이머 해제
      if (currentContentIndex < initialContents.length - 1) {
        setCurrentContentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 1500);

    // 컴포넌트가 언마운트되거나 업데이트될 때 타이머 해제
    return () => {
      clearInterval(interval);
    };
  }, [currentContentIndex, initialContents.length]);

  // 이미지를 렌더링하는 함수
  const renderImage = (content) => {
    return (
      <img
        src={competitionImages[content]}
        alt={content}
        style={{ width: '700px', height: '500px' }}
      />
    );
  };

  // 화면에 렌더링되는 컴포넌트의 반환값
  return (
    <div className="content-container">
      <div className="content-grid">
        {/* 현재 컨텐츠를 기반으로 한 개의 컨텐츠 아이템 렌더링 */}
        {initialContents.slice(currentContentIndex, currentContentIndex + 1).map((content, index) => (
          <div className="content-item" key={index}>
            <h2>{content}</h2>
            {/* 대회 이미지가 있는 경우 이미지 렌더링 */}
            {content in competitionImages && renderImage(content)}
          </div>
        ))}
      </div>
    </div>
  );
}

// Home 컴포넌트를 외부에서 사용 가능하게 내보냄
export default Home;
