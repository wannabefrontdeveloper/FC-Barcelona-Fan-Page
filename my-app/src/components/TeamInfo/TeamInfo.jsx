import React, { useState, useRef } from 'react';

// TeamInfo 컴포넌트
const TeamInfo = () => {
  // 이미지 설명 및 선택된 이미지 상태 관리
  const [imageDescription, setImageDescription] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // 스크롤을 조작하기 위한 ref
  const scrollRef = useRef(null);

  // 이미지 클릭 이벤트 핸들러
  const handleImageClick = (description, imageSrc) => {
    // 이미지 설명과 선택된 이미지 설정
    setImageDescription(description);
    setSelectedImage(imageSrc);

    // 스크롤이 있는 경우 해당 이미지 위치로 부드러운 스크롤 이동
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 선택된 이미지 초기화
  const clearSelectedImage = () => {
    setImageDescription(null);
    setSelectedImage(null);
  };

  // JSX 반환
  return (
    <div className="container overflow-hidden text-center">
      <div className="my-3">
        <p style={{ color: 'white' }}>사진들을 더블클릭하여 자세한 설명을 보세요.</p>
      </div>

      {/* 사진 목록 */}
      <div className="row gy-5">
        {/* 연고지 정보 */}
        <div className="col-6">
          <div className="p-3" onClick={() => handleImageClick('FC 바르셀로나는 스페인 바르셀로나에 연고지를 둔 프로 축구 클럽입니다. 바르셀로나(Barcelona)는 스페인 북동부에 위치한 도시로, 스페인의 카탈루냐 지역의 수도이자 가장 큰 도시 중 하나입니다. 이곳은 문화, 역사, 미술, 디자인 및 스포츠와 같은 다양한 분야에서 높은 중요성을 지니며 세계적으로 유명합니다.', 'https://i.namu.wiki/i/MXGcsc5gcZtZjedvPZbj6blBIHjDMtTcnxQuny2R8t2j-M3FYTAA2J1S8zXCH14B0A_rjYo27yw_sES75fnhog.webp')}>
            <h2 style={{ color: 'white' }}>연고지</h2>
            <img
              src="https://thetourguy.com/wp-content/uploads/2021/03/TTTD-Barcelona-feature-1440-675-rt-900x420.jpg"
              alt="팀 연고지 이미지"
              style={{ width: '100%' }}
            />
          </div>
        </div>

        {/* 감독 정보 */}
        <div className="col-6">
          <div className="p-3" onClick={() => handleImageClick('바르셀로나의 현재 감독은 사비 에르난데스입니다. 그는 스페인의 축구 선수 출신 감독이며. 2021년 11월부터 FC 바르셀로나의 감독을 맡고 있습니다. 패스 마스터란 별명에 걸맞게 유소년부터 황혼기까지 바르셀로나에서 보내며 수많은 우승과 2번의 트레블을 이끌었고, 스페인 대표팀에서도 축구 역사상 최초의 메이저 3연패를 견인했습니다.', 'https://blog.kakaocdn.net/dn/cDaRLz/btrkr5mWR6X/CmwSoPVKqVYNsJW61blc41/img.jpg')}>
            <h2 style={{ color: 'white' }}>감독</h2>
            <img
              src="https://cdn.sportivomedia.net/news/photo/202205/3024_2914_5034.jpg"
              alt="감독 이미지"
              style={{ width: '100%' }}
            />
          </div>
        </div>

        {/* 경기장 정보 */}
        <div className="col-6">
          <div className="p-3" onClick={() => handleImageClick('바르셀로나의 홈 구장은 스포티파이 캄프누입니다. FC 바르셀로나의 공식 홈페이지에 따르면 좌석 수는 총 99,354석으로 세계에서 가장 큰 축구 전용 경기장입니다.경기장 규모가 엄청나게 크고 약 10만명의 바르셀로나 팬들의 열렬한 응원에 원정팀 선수들과 팬들에게 주는 부담감이 어마어마한곳입니다.', 'https://www.fcbarcelona.com/photo-resources/2021/08/09/c4f2dddd-2152-4b8b-acf8-826b4377e29d/Camp-Nou-4.jpg?width=1200&height=750')}>
            <h2 style={{ color: 'white' }}>경기장</h2>
            <img
              src="https://www.fcbarcelona.com/photo-resources/2021/08/09/d4236e65-4502-4cca-816d-a97c441abdac/Camp-nou-1.jpg?width=1200&height=750"
              alt="경기장 이미지"
              style={{ width: '100%' }}
            />
          </div>
        </div>

        {/* 역사 정보 */}
        <div className="col-6">
          <div className="p-3" onClick={() => handleImageClick('1899년 10월 22일, 바르셀로나에 거주하는 외국인들이 점점 널리 퍼지는 축구의 인기에 힘입어 스위스인 주안 감페르를 주축으로 <로스 데 포르테스> 신문에 창단 광고를 실어 클럽의 탄생을 알렸습니다. 11월 29일 솔레 힘나시오에서 스위스인 오토 쿤슬, 욀터 윌드, 잉글랜드인 윌리엄 파손스, 독일인 오토 마이어, 카탈루냐인 루이스 드 오소, 바르토메우 테라다스, 에흐리크 두칼, 페레 카보트, 카를레스 푸올, 주제프 요베트과 조안 감페르를 포함하여 11명이 회의를 진행하였고 만장일치로 팀 명을 Futbol Club Barcelona로 정하기로 했습니다.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDizX7LFfzO_s9igCU-ZVcy_trzKqfqq7NxQ&usqp=CAU')}>
            <h2 style={{ color: 'white' }}>역사</h2>
            <img
              src="https://i.namu.wiki/i/j4o1fXMeCxiqW_YVLuuw00HDr3IM0Qt-rPhuZHu81aqe-1MvRe-YM69YmRepwckIWuurvHB0Utpl8uJ-XioLyA.webp"
              alt="역사 이미지"
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </div>

      {/* 선택된 이미지가 있는 경우 */}
      {selectedImage && (
        <div className="row gy-5">
          <div className="col-12">
            {/* 선택된 이미지 및 설명 표시 */}
            <div className="p-3" onClick={clearSelectedImage} style={{ display: 'flex' }}>
              <div style={{ flex: 2 }}>
                <img
                  src={selectedImage}
                  alt="선택된 이미지"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
              <div style={{ flex: 1, paddingLeft: '1rem', textAlign: 'left' }}>
                <h2 style={{ color: 'white' }}>자세한 설명</h2>
                <p style={{ color: 'white' }}>{imageDescription}</p>
              </div>
            </div>
            
            {/* 스크롤 위치 이동을 위한 빈 요소 */}
            <div ref={scrollRef} />
          </div>
        </div>
      )}
    </div>
  );
}

// TeamInfo 컴포넌트를 외부에서 사용할 수 있도록 내보냄
export default TeamInfo;
