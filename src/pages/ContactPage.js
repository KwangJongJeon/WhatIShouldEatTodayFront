import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className={'container-fluid'}>

      <h1>Contact me</h1>
      <table className={'table table-hover'}>
        <tr>
          <th scope={'col'}>Email</th>
          <td scope={'col'}>abc8339265@gmail.com</td>
        </tr>
        <tr>
          <th scope={'col'}>Blog</th>
          <td scope={'col'}>https://kj97.tistory.com/</td>
        </tr>
        <tr>
          <th scope={'col'}>Github</th>
          <td scope={'col'}>https://github.com/KwangJongJeon/</td>
        </tr>
      </table>
    </div>
  )
}

export default ContactPage;