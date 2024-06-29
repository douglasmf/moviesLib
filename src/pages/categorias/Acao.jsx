import MainContent from '../../layout/MainContent'

const Acao = () => {
  const UrlAcao = '/discover/movie?with_genres=28&'
  return (
    <>
        <MainContent title='Ação' urlCategoria={UrlAcao}/>
    </>
  )
}

export default Acao