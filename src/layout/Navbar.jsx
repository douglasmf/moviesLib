import {useState} from 'react'
import * as S from '../styles/Navbar.style'
import { Link, useNavigate } from 'react-router-dom'
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'
import { FaBars } from "react-icons/fa";


const Navbar = () => {
  const [search, setSearch] = useState("")
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(!search) return

    navigate(`/search?q=${search}`)
    setSearch("")
  }

  const openMenu = () => {
    setOpen(!open)
  }

  return (
    <S.NavbarStyle>
        <S.NavbarTop>
          <S.Logo>
              <Link to="/"><BiCameraMovie/><span className='titulo'>MoviesLib</span></Link>
          </S.Logo>
          <S.Form onSubmit={handleSubmit}>
            <input type="text" placeholder='Busque um filme' onChange={(e) => setSearch(e.target.value)} value={search}/>
            <button type="submit">
              <BiSearchAlt2/>
            </button>
          </S.Form>
          <S.ButtonOpenMenu onClick={openMenu}>
            <FaBars/>
          </S.ButtonOpenMenu>
          <S.MenuSM open={open}>
            <S.ButtonCloseMenu onClick={openMenu}>X</S.ButtonCloseMenu>
            <h4>Categorias</h4>
            <hr />
            <S.Links>
              <Link to="action" onClick={openMenu}>Ação</Link>
              <Link to="comedy" onClick={openMenu}>Comédia</Link>
              <Link to="documentary" onClick={openMenu}>Documentário</Link>
              <Link to="romance" onClick={openMenu}>Romance</Link>
              <Link to="horror" onClick={openMenu}>Terror</Link>
              <Link to="topRated" onClick={openMenu}>Mais Votados</Link>
            </S.Links>
          </S.MenuSM>
        </S.NavbarTop>
        <S.MenuLgContainer>
          <S.MenuLG>
            <Link to="action">Ação</Link>
            <Link to="comedy">Comédia</Link>
            <Link to="documentary">Documentário</Link>
            <Link to="romance">Romance</Link>
            <Link to="horror">Terror</Link>
            <Link to="topRated">Mais Votados</Link>
          </S.MenuLG>
        </S.MenuLgContainer>
        
    </S.NavbarStyle>
  )
}

export default Navbar