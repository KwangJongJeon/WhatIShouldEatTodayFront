const UserMyPage = ({userDetails, onChange, onSubmit}) => {
  let midLength = 0;
  return (
      <div>
        {!userDetails && <h1>로딩중입니다...</h1>}
        {userDetails &&
        <div>
          <h2>회원 정보</h2>
          <hr/>
          <form onSubmit={onSubmit}>
            <div className={'form-group row'}>
              <label htmlFor={'staticEmail'} className={'col-sm-2 col-form-label fw-bold'}>이메일</label>
              <div className={'col-sm-10'}>
                <input type={'text'} readOnly className={'form-control-plaintext'} id={'staticEmail'} value={userDetails.memberEmail}/>
              </div>
            </div>
            <div className={'form-group row'}>
              <label htmlFor={'nickname'} className={'col-sm-2 col-form-label fw-bold'}>닉네임</label>
              <div className={'col-sm-10'}>
                <input type={'text'}
                       className={'form-control'}
                       id={'nickname'}
                       name={'nickName'}
                       value={userDetails.nickName}
                       placeholder={'email@email.com'}
                       onChange={onChange}/>
              </div>
            </div>
            <div className={'form-group row'}>
              <label htmlFor={'staticEmail'} className={'col-sm-2 col-form-label fw-bold'}>이름</label>
              <div className={'col-sm-10'}>
                <input type={'text'} readOnly className={'form-control-plaintext'}
                       id={'staticEmail'} value={userDetails.memberName}/>
              </div>
            </div>
            <div className={'form-group row'}>
              <label htmlFor={'nickname'} className={'col-sm-2 col-form-label fw-bold'}>전화번호</label>
              <div className={'col-sm-10'}>
                <input type={'text'}
                       className={'form-control'}
                       id={'nickname'}
                       name={'phoneNumber'}
                       value={userDetails.phoneNumber}
                       onChange={onChange}
                />
              </div>
            </div>
            <div>
              <button className={'btn-dark mt-5 p-2'}>회원정보 수정</button>
            </div>
          </form>
        </div>
        }

      </div>
  )
}

export default UserMyPage;