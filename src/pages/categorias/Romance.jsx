import MainContent from '../../layout/MainContent'

const Romance = () => {
  const urlRomance = '/discover/movie?with_genres=10749&'
  return (
    <>
        <MainContent title='Romance' urlCategoria={urlRomance}/>
    </>
  )
}

export default Romance