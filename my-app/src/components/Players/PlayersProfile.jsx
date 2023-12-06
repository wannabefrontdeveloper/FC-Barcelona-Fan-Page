import React from "react";
import Players from "./Players";


// 선수 프로필 데이터 배열
const profiles = [
  {
    id: 1,
    title: "테어슈테겐",
    color: "red",
    position: "골키퍼",
    intro: "국적: 독일<br/>등번호: 1<br/>나이: 31세",
    src: "https://www.fcbarcelona.com/photo-resources/2023/10/03/7d67f42b-2a8d-4e51-8d41-8aa3542482e4/01-MARC-ANDRE_TER_STEGEN.jpg?width=470&height=470",
  },
  {
    id: 13,
    title: "이냐키 페냐",
    color: "blue",
    position: "골키퍼",
    intro: "국적: 스페인<br/>등번호: 13<br/>나이: 24세",
    src: "https://www.fcbarcelona.com/photo-resources/2023/10/03/65ae7c6c-8b9a-4d94-94b3-273c30c596a5/26-INAKI_PENA.jpg?width=470&height=470",
  },
  {
    id: 2,
    title: "주앙 칸셀루",
    color: "red",
    position: "수비수",
    intro: "국적: 포르투갈<br/>등번호: 2<br/>나이: 29세",
    src: "https://www.fcbarcelona.com/photo-resources/2023/10/03/f2dec24d-975e-4d4b-b6a6-2a61771e3de3/jugador_fitxa-cancelo.jpg?width=470&height=470",
  },
  {
    id: 3,
    title: "알레한드로 발데",
    color: "blue",
    position: "수비수",
    intro:"국적: 스페인<br/>등번호: 3<br/>나이: 20세",
    src: "https://www.fcbarcelona.com/photo-resources/2023/10/03/993af0d7-2b2c-40d1-9e9b-c24f8d165537/mini_28-BALDE.jpg?width=470&height=470",
  },
  {
    id: 4,
    title: "로날드 아라우호",
    color: "red",
    position: "수비수",
    intro: "국적: 우루과이<br/>등번호: 4<br/>나이: 24세",
    src: "https://www.fcbarcelona.com/photo-resources/2023/10/03/93330ade-5bdf-420a-a989-2c337f8104ca/04-RONALD_ARAUJO_.jpg?width=470&height=470",
  },
  {
    id: 5,
    title: "이니고 마르티네즈",
    color: "blue",
    position: "수비수",
    intro: "국적: 스페인<br/>등번호: 5<br/>나이: 32세",
    src: "https://www.fcbarcelona.com/photo-resources/2023/10/03/8e1f4a73-cca2-48d8-8e43-655334f27886/jugador_fitxa_inigo_2023.jpg?width=470&height=470",
  },
  {
    id: 15,
    title: "안드레아 크리스텐센",
    color: "red",
    position: "수비수",
    intro: "국적: 덴마크<br/>등번호: 15<br/>나이: 27세",
    src: "https://www.fcbarcelona.com/photo-resources/2023/10/03/3acd07d7-8081-4050-a62c-1c1302038c23/15-ANDREAS_CHRISTENSEN.jpg?width=470&height=470",
  },
  {
    id: 17,
    title: "마르코스 알론소",
    color: "blue",
    position: "수비수",
    intro:"국적: 스페인<br/>등번호: 17<br/>나이: 32세",
    src: "https://www.fcbarcelona.com/photo-resources/2023/10/03/383058f5-1126-48c4-8efd-9c3687de8524/17-MARCOS_ALONSO.jpg?width=470&height=470",
  },
  {
    id: 23,
    title: "쥴스 쿤데",
    color: "red",
    position: "수비수",
    intro: "국적: 프랑스<br/>등번호: 23<br/>나이: 24세",
    src: "https://www.fcbarcelona.com/photo-resources/2023/10/03/66fdb7c1-455d-45bb-a132-060fca97925e/23-JULES_KOUNDE.jpg?width=470&height=470",
  },
  {
    id: 6,
    title: "파블로 가비",
    color: "blue",
    position: "미드필더",
    intro: "국적: 스페인<br/>등번호: 6<br/>나이: 19세",
    src: "https://www.fcbarcelona.com/photo-resources/2023/10/03/1a22465f-7e9b-463d-981a-908dd221dd88/30-GAVI_.jpg?width=470&height=470",
  },
  {
    id: 8,
    title: "페드리 곤잘레스",
    color: "red",
    position: "미드필더",
    intro:"국적: 스페인<br/>등번호: 8<br/>나이: 20세",
    src: "https://www.fcbarcelona.com/photo-resources/2023/10/03/4b341216-a50a-4d80-95ff-5ca2e5dcf640/08-PEDRI.jpg?width=470&height=470",
  },
  {
    id: 18,
    title: "오리올 로메우",
    color: "blue",
    position: "미드필더",
    intro: "국적: 스페인<br/>등번호: 18<br/>나이: 32세",
    src: "https://www.fcbarcelona.com/photo-resources/2023/10/03/19b49390-6eb9-49c3-9734-632461612f9b/jugador_fitxa-oriol_romeu.jpg?width=470&height=470",
  },
  {
    id: 20,
    title: "세르지 로베르토",
    color: "red",
    position: "미드필더",
    intro: "국적: 스페인<br/>등번호: 20<br/>나이: 32세",
    src: "https://www.fcbarcelona.com/photo-resources/2023/10/03/b30938f8-9ce1-4a72-be4a-bac6346abf13/20-S_ROBERTO.jpg?width=470&height=470",
  },
  {
    id: 21,
    title: "프랭키 더용",
    color: "blue",
    position: "미드필더",
    intro: "국적: 네덜란드<br/>등번호: 21<br/>나이: 26세",
    src: "https://www.fcbarcelona.com/photo-resources/2023/10/03/d2214796-ebc8-4b1c-bb5d-37f2ce5883c7/21-FRENKIE_DE_JONG.jpg?width=470&height=470",
  },
  {
    id: 22,
    title: "일카이 귄도안",
    color: "red",
    position: "미드필더",
    intro: "국적: 독일<br/>등번호: 22<br/>나이: 33세",
    src: "https://www.fcbarcelona.com/photo-resources/2023/10/03/3f3b9374-b75e-43f7-9e3e-ceddd9dc211d/jugador_fitxa-gundogan.jpg?width=470&height=470",
  },
  {
    id: 7,
    title: "페란 토레스",
    color: "blue",
    position:"공격수",
    intro: "국적: 스페인<br/>등번호: 7<br/>나이: 23세",
    src: "https://www.fcbarcelona.com/photo-resources/2023/10/03/166959ba-fb56-46ae-842b-e778d072ac5a/11-FERRAN_TORRES.jpg?width=470&height=470",
  },
  {
    id: 9,
    title: "로베르트 레반도프스키",
    color: "red",
    position:"공격수",
    intro: "국적: 폴란드<br/>등번호: 9<br/>나이: 35세",
    src: "https://www.fcbarcelona.com/photo-resources/2023/10/03/04101be1-2cef-4fb8-ae97-99a99297f65c/09-ROBERT_LEWANDOWSKI.jpg?width=470&height=470",
  },
  {
    id: 11,
    title: "하피냐",
    color: "blue",
    position:"공격수",
    intro: "국적: 브라질<br/>등번호: 11<br/>나이: 26세",
    src: "https://www.fcbarcelona.com/photo-resources/2023/10/03/865c65cd-9dc0-41b8-b373-6a922e29d594/22-RAPHINHA.jpg?width=470&height=470",
  },
  {
    id: 14,
    title: "주앙 펠릭스",
    color: "red",
    position:"공격수",
    intro:"국적: 포르투갈<br/>등번호: 14<br/>나이: 23세",
    src: "https://www.fcbarcelona.com/photo-resources/2023/10/03/8a21c5f5-bea0-470e-bd2b-c905aeab7ade/jugador_fitxa-felix.jpg?width=470&height=470",
  },
];

// 선수 프로필을 포지션에 따라 그룹화하는 함수
function PlayersProfile(props) {
  // 포지션별로 그룹화된 객체 생성
  const profileGroups = {};
  profiles.forEach((profile) => {
    if (!profileGroups[profile.position]) {
      profileGroups[profile.position] = [];
    }
    profileGroups[profile.position].push(profile);
  });

  // JSX 반환
  return (
    <div>
      {/* 포지션별로 섹션 생성 */}
      {Object.keys(profileGroups).map((position, positionIndex) => (
        <div key={positionIndex}>
          {/* 포지션 제목 */}
          <h2 style={{ color: 'white' }}>{position}</h2>
          {/* 포지션별 선수 프로필 그룹 */}
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {/* 해당 포지션의 각 선수 프로필을 Players 컴포넌트로 렌더링 */}
            {profileGroups[position].map((profile, profileIndex) => {
              // 선수 프로필 타이틀 스타일
              const titleStyle = {
                color: "white",
                fontSize: "25px",
                textAlign: "center",
              };

              // 각 선수 프로필을 Players 컴포넌트로 렌더링
              return (
                <Players key={profile.id} backgroundColor={profile.color}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    {/* 선수 이름 */}
                    <p style={{ ...titleStyle, fontSize: "30px" }}>{profile.title}</p>
                    {/* 선수 이미지 */}
                    <img src={profile.src} style={{ width: "300px", margin: "0 auto" }} alt={profile.title} />
                    {/* 선수 소개 (HTML 코드로 렌더링) */}
                    <p style={{ color: "white", fontSize: "18px", textAlign: "center" }} dangerouslySetInnerHTML={{ __html: profile.intro }}></p>
                  </div>
                </Players>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

// PlayersProfile 컴포넌트 외부에서 사용 가능하게 내보냄
export default PlayersProfile;
