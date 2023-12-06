import React from "react";

// Players 함수형 컴포넌트 정의
function Players(props) {
  // props에서 필요한 값 추출
  const { title, backgroundColor, children } = props;

  // JSX 반환
  return (
    <div
      style={{
        margin: 8, // 외부 여백
        padding: 8, // 내부 여백
        borderRadius: 8, // 테두리 모서리 둥글게
        boxShadow: "0px 0px 4px gray", // 그림자 효과
        backgroundColor: backgroundColor || "white", // 배경색 (기본값: 흰색)
      }}
    >
      {/* title이 주어진 경우 h1 태그로 표시 */}
      {title && <h1>{title}</h1>}
      {/* 자식 컴포넌트 혹은 엘리먼트 표시 */}
      {children}
    </div>
  );
}

// Players 컴포넌트 외부에서 사용 가능하게 내보냄
export default Players;
