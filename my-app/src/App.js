// React 및 라우팅에 필요한 모듈 가져오기
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

// 컴포넌트 가져오기
import Clock from './components/Home/Clock';
import Home from './components/Home/Home';
import TeamInfo from './components/TeamInfo/TeamInfo';
import ScheduleResults from './components/SchedulePage/ScheduleResults';
import NewsBlog from './components/NewsBlog/NewsBlog';
import PlayersProfile from './components/Players/PlayersProfile';

// 전역 스타일 적용
import './App.css';

// 로고 이미지 가져오기
import logo from './fc_barcelona_logo.png';

// App 컴포넌트 정의
function App() {
  useEffect(() => {
    axios.get('/api/test')
      .then(res => console.log(res))
      .catch()
  })
  return (
    <Router>
      {/* 네비게이션 바 */}
      <nav className="navbar navbar-expand-lg navbar-light navbar-bg">
        <div className="d-flex align-items-center">
          {/* 홈 링크 */}
          <Link to="/">
            <div className="d-flex align-items-center">
              <img src={logo} alt="FC Barcelona Logo" className="navbar-logo" />
            </div>
          </Link>
          
          {/* 시계 컴포넌트 */}
          <Clock />
          
          {/* 네비게이션 바 토글 버튼 */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        
        {/* 네비게이션 바 메뉴 */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {/* 홈 메뉴 */}
            <li className="nav-item">
              <Link className="nav-link nav-link-text menu-item home-button" to="/">홈</Link>
            </li>
            
            {/* 팀 정보 메뉴 */}
            <li className="nav-item">
              <Link className="nav-link nav-link-text menu-item" to="/team-info">팀 정보</Link>
            </li>
            
            {/* 일정 및 경기 결과 메뉴 */}
            <li className="nav-item">
              <Link className="nav-link nav-link-text menu-item" to="/schedule-results">일정 및 경기 결과</Link>
            </li>
            
            {/* 뉴스 및 블로그 메뉴 */}
            <li className="nav-item">
              <Link className="nav-link nav-link-text menu-item" to="/news-blog">뉴스 및 블로그</Link>
            </li>
            
            {/* 1군 선수 메뉴 */}
            <li className="nav-item">
              <Link className="nav-link nav-link-text menu-item" to="/playersProfile">1군 선수</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* 라우팅 설정 */}
      <Route path="/team-info" component={TeamInfo} />
      <Route path="/schedule-results" component={ScheduleResults} />
      <Route path="/news-blog" component={NewsBlog} />
      <Route path="/playersProfile" component={PlayersProfile} />
      <Route exact path="/" component={Home} />
    </Router>
  );
}

// App 컴포넌트 내보내기
export default App;
