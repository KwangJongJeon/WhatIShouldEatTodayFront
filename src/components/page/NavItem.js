const NavItem = ({ item }) => {
  return (
    <li key={item.id}>
      <a
        href={item.link}
        className={'nav-link px-2 link-secondary'}
        >
        {item.text}
      </a>
    </li>
  )
}

export default NavItem;