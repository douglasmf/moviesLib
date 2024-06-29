import MainContent from "../../layout/MainContent"

const MaisVotados = () => {
    const urlTopRated = '/movie/top_rated?'

  return (
    <>
        <MainContent title='Melhores Filmes' urlCategoria={urlTopRated}/>
    </>
  )
}

export default MaisVotados