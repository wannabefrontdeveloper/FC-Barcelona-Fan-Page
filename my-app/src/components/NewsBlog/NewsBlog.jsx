import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import PostDetail from './PostDetail'; // PostDetail 컴포넌트 임포트
import './NewsBlog.css'; // NewsBlog 컴포넌트에 적용될 CSS 스타일
import jsonData from '../NewsBlog/data.json'; // 블로그 데이터가 담긴 JSON 파일 임포트

function NewsBlog() {
  // 포스트 데이터를 관리할 상태 변수
  const [posts, setPosts] = useState([]);

  // 컴포넌트가 처음 렌더링될 때 useEffect를 사용해 초기 데이터 설정
  useEffect(() => {
    setPosts(jsonData);
  }, []);

  // NewsBlog 컴포넌트의 반환값
  return (
    <div className="news-blog">
      {/* 블로그 섹션 제목 */}
      <h2>뉴스 및 블로그</h2>

      {/* 포스트 목록 섹션 */}
      <div className="post-section">
        <div className="post-list">
          <ul>
            {/* 포스트 목록 매핑 */}
            {posts.map((post, index) => (
              <li key={index}>
                {/* 각 포스트에 대한 Link 컴포넌트 */}
                <Link to={`/news-blog/${index + 1}`}>제목: {post.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Switch를 사용한 동적 라우팅 설정 */}
      <Switch>
        {/* 동적 라우트 설정, :id는 파라미터로 전달됨 */}
        <Route path="/news-blog/:id" render={(props) => <PostDetail {...props} posts={posts} />} />
      </Switch>
    </div>
  );
}

// NewsBlog 컴포넌트를 외부에서 사용 가능하게 내보냄
export default NewsBlog;
