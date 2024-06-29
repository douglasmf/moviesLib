import MainContent from '../../layout/MainContent'

const Comedia = () => {
  const urlComedia = '/discover/movie?with_genres=35&'
  return (
    <>
        <MainContent title='Comédia' urlCategoria={urlComedia}/>
    </>
  )
}

export default Comedia