import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// 텍스트 스타일 객체
const textStyle = {
  color: 'black',
};

// h3 스타일 객체
const h3Style = {
  backgroundColor: '#3498db',
  color: 'white',
  padding: '10px',
  borderRadius: '5px',
};

// PostDetail 컴포넌트 정의
const PostDetail = ({ match, posts }) => {
  // useHistory 훅을 사용하여 라우터 히스토리 관리
  const history = useHistory();
  
  // URL 파라미터에서 포스트 ID 추출
  const postId = parseInt(match.params.id);
  
  // ID에 해당하는 포스트를 배열에서 찾아옴
  const post = posts.find((post) => post.id === postId);
  
  // 댓글을 담을 상태 변수
  const [comments, setComments] = useState([]);

  // useEffect를 사용하여 포스트가 변경될 때 댓글 업데이트
  useEffect(() => {
    setComments(post ? post.comments : []);
  }, [post]);

  // 새 댓글과 닉네임을 담을 상태 변수
  const [newComment, setNewComment] = useState('');
  const [nickname, setNickname] = useState('');

  // 댓글 내용 변경 핸들러
  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  // 닉네임 변경 핸들러
  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  // 댓글 추가 핸들러
  const handleAddComment = () => {
    // 입력된 댓글과 닉네임이 둘 다 비어 있지 않으면 댓글 추가
    if (newComment.trim() !== '' && nickname.trim() !== '') {
      const newCommentObject = {
        id: postId,
        nickname: nickname,
        content: newComment,
      };
      // 기존 댓글 배열에 새로운 댓글 추가
      setComments((prevComments) => [...prevComments, newCommentObject]);
      // 입력 필드 초기화
      setNewComment('');
      setNickname('');
    }
  };

  // 뒤로 가기 핸들러
  const handleGoBack = () => {
    history.goBack();
  };

  // 만약 포스트가 없다면 빈 화면 반환
  if (!post) {
    return <div></div>;
  }

  // 컴포넌트의 반환값
  return (
    <div>
      {/* 포스트 제목 및 내용 표시 */}
      <h2>{post.title}</h2>
      <p style={textStyle}>{post.content}</p>

      {/* 댓글이 존재한다면 댓글 목록 표시 */}
      {comments.length > 0 && (
        <div className="comment-list">
          <h3 style={h3Style}>댓글목록</h3>
          {/* 각 댓글을 매핑하여 표시 */}
          {comments.map((comment) => (
            <div key={comment.id} className="comment-item">
              <p>{`${comment.nickname}: ${comment.content}`}</p>
            </div>
          ))}
        </div>
      )}

      {/* 댓글 작성 폼 */}
      <div className="comment-section">
        <div className="comment-form">
          {/* 닉네임 입력 필드 */}
          <input
            type="text"
            placeholder="닉네임을 입력하세요..."
            value={nickname}
            onChange={handleNicknameChange}
          />
          {/* 댓글 입력 필드 */}
          <textarea
            placeholder="댓글을 입력하세요..."
            value={newComment}
            onChange={handleCommentChange}
          ></textarea>
          {/* 댓글 추가 버튼 */}
          <button onClick={handleAddComment}>댓글 추가</button>
        </div>
      </div>

      {/* 뒤로 가기 버튼 */}
      <button onClick={handleGoBack}>뒤로 가기</button>
    </div>
  );
};

// PostDetail 컴포넌트 외부에서 사용 가능하게 내보냄
export default PostDetail;
