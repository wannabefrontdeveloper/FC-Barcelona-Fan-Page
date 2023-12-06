import React, { useState, useEffect } from 'react';

function Clock() {
  // 현재 시간을 저장하는 상태 변수
  const [time, setTime] = useState(new Date());

  // 컴포넌트가 처음 렌더링될 때 한 번만 실행되는 부수 효과 함수
  useEffect(() => {
    // 1초마다 현재 시간을 갱신하는 타이머를 설정
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); 

    // 컴포넌트가 언마운트되면 타이머를 해제
    return () => {
      clearInterval(interval); 
    };
  }, []); // 의존성 배열이 빈 배열이므로 한 번만 실행

  // 현재 시간을 특정 포맷으로 변환
  const formattedTime = time.toLocaleTimeString('en-US', {
    timeZone: 'Europe/Madrid', 
    hour: '2-digit',
    minute: '2-digit',
  });

  // 시계 텍스트의 스타일을 정의
  const style = {
    fontSize: '24px',
    color: 'white',
  };

  // 컴포넌트의 반환값
  return (
    <div className="clock">
      {/* 시계 텍스트를 렌더링하고, 현재 시각을 포함한 추가 정보를 표시 */}
      <p style={style}>  Visca Barca!! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;바르셀로나 현지 시각: {formattedTime} </p>
    </div>
  );
}

// Clock 컴포넌트를 외부에서 사용 가능하게 내보냄
export default Clock;
