import MainContent from '../../layout/MainContent'

const Documentario = () => {
  const urlDocumentario = '/discover/movie?with_genres=99&'
  return (
    <>
        <MainContent title='Documentário' urlCategoria={urlDocumentario}/>
    </>
  )
}

export default Documentario