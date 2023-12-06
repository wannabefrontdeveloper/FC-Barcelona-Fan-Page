import React, { useState } from 'react';

// 경기 일정 및 결과 데이터
const scheduleData = [
  {
    match: "헤타페 vs 바르셀로나",
    date: '2023-8-14 월요일',
    time: '04:30',
    location: 'Coliseum Alfonso Pérez',
    highlight: 'https://www.youtube.com/watch?v=felsQxapUPg',
    result: '헤타페 0 : 0 바르셀로나',
    homeTeamLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8305_small.png',
    awayTeamLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8634_small.png',
  },
  {
    match: "바르셀로나 vs 카디스",
    date: '2023-8-21 월요일',
    time: '02:30',
    location: 'Estadi Olímpic Lluís Companys',
    highlight: 'https://www.youtube.com/watch?v=alCgydXog4Q',
    result: '바르셀로나 2 : 0 카디스',
    homeTeamLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8634_small.png',
    awayTeamLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8385_small.png',
  },
  {
    match: "비야레알 vs 바르셀로나",
    date: '2023-8-28 월요일',
    time: '00:30',
    location: 'Estadio de la Cerámica',
    highlight: 'https://www.youtube.com/watch?v=aelQ8Nvspuw',
    result: '비야레알 3 : 4 바르셀로나',
    homeTeamLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/10205_small.png',
    awayTeamLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8634_small.png',
  },
  {
    match: "오사수나 vs 바르셀로나",
    date: '2023-9-4 월요일',
    time: '04:00',
    location: 'Estadio El Sadar',
    highlight: 'https://www.youtube.com/watch?v=Z5fVUc796iI',
    result: '오사수나 1 : 2 바르셀로나',
    homeTeamLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8371_small.png',
    awayTeamLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8634_small.png',
  },
  {
    match: "바르셀로나 vs 레알 베티스",
    date: '2023-9-17 일요일',
    time: '04:00',
    location: 'Estadi Olímpic Lluís Companys',
    highlight: 'https://www.youtube.com/watch?v=Eua1F4e-foQ',
    result: '바르셀로나 5 : 0 레알 베티스',
    homeTeamLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8634_small.png',
    awayTeamLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8603_small.png',
  },
  
];

// ScheduleResults 컴포넌트
function ScheduleResults() {
  // 선택된 게임의 인덱스 상태 관리
  const [selectedGameIndex, setSelectedGameIndex] = useState(null);

  // 게임 클릭 이벤트 핸들러
  const handleGameClick = (index) => {
    // 선택된 게임이 이미 선택된 상태인 경우 해제, 그렇지 않으면 선택
    if (selectedGameIndex === index) {
      setSelectedGameIndex(null);
    } else {
      setSelectedGameIndex(index);
    }
  };

  // JSX 반환
  return (
    <div style={{ background: 'linear-gradient(to bottom, #4e70a9, #c8d0f4)', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      {/* 페이지 제목 */}
      <h2 style={{ color: 'white', paddingTop: '20px' }}>일정 및 경기 결과</h2>
      
      {/* 일정 목록 */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {scheduleData.map((game, index) => (
          <li key={index} onClick={() => handleGameClick(index)} style={{ cursor: 'pointer', marginBottom: '10px', backgroundColor: 'white', padding: '10px', color: 'black', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
            {/* 홈팀 로고, 경기명, 어웨이팀 로고를 가로로 나란히 표시 */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <img src={game.homeTeamLogo} alt="Home Team Logo" style={{ maxWidth: '30px', maxHeight: '30px' }} />
              <strong>{game.match}</strong>
              <img src={game.awayTeamLogo} alt="Away Team Logo" style={{ maxWidth: '30px', maxHeight: '30px' }} />
            </div>

            {/* 선택된 게임의 경우 세부 정보 표시 */}
            {selectedGameIndex === index && (
              <div>
                <p><strong>날짜:</strong> {game.date}</p>
                <p><strong>시간:</strong> {game.time}</p>
                <p><strong>장소:</strong> {game.location}</p>
                <p>
                  <strong>하이라이트:</strong>{' '}
                  <a href={game.highlight} target="_blank" rel="noopener noreferrer">
                    시청하기
                  </a>
                </p>
                <p><strong>경기 결과:</strong> {game.result}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ScheduleResults 컴포넌트를 외부에서 사용할 수 있도록 내보냄
export default ScheduleResults;