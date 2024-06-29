import MainContent from '../../layout/MainContent'

const Terror = () => {
  const urlTerror = '/discover/movie?with_genres=27&'
  return (
    <>
        <MainContent title='Terror' urlCategoria={urlTerror}/>
    </>
  )
}

export default Terror