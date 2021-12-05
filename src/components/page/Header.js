import styled from 'styled-components';


const Header = () => {
  return (
    <header className={'d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom'}>
      <a
        href={'/'}
        className={'d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none'}>
        LOGO
      </a>
      <ul className={'nav col-12 col-md-auto mb-2 justify-content-center mb-md-0'}>
        <li><a href="/" className="nav-link px-2 link-secondary">식사 추천</a></li>
        <li><a href="/feature" className="nav-link px-2 link-dark">설계</a></li>
        <li><a href="/contact" className="nav-link px-2 link-dark">Contact</a></li>
      </ul>
      <div className="col-md-3 text-end">
        <a href={'/login'} type="button" className="btn btn-outline-success me-2">로그인</a>
        <a href={'/register'} type="button" className="btn btn-success">회원가입</a>
      </div>
    </header>
  )
}

export default Header;