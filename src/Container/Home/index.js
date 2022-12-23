
import  React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import CardMoviesComponents from "../Components/CardMovies"
import PaginationComponent from '../Components/Pagination';

const HomeContainer = () => {
  const [content , setContent] = useState([]);
  const [pageno, setPageNo]= useState(1);
  const [paginationno, setPaginationno] = useState(0);

  const API_KEY = "abe51f92942786e4080f7a102b3b76b8"

  const GetDataTrending = async ()=>{
    const {data} = await axios.get(`
    https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${pageno}`);
    setContent(data.results);
    setPaginationno(data.total_pages)
  }

  useEffect(()=>{
    GetDataTrending();
},[])

const handleClick = (number)=>{
  setPageNo(number);}

useEffect(()=>{
  GetDataTrending();
}, [pageno])

  return (
    <>
        <main className='homePage'>
          <Container>
            <Row>
              <Col className='col-12'>
              <section>
                            <h1 className='txtCenter'>Top Trending </h1>
                            <h3 className='txtCenter'>Tv and Movie For You</h3>
              </section>
              </Col>
              {
                        content && content.length > 0 ? content.map((item)=>{
                            return (<CardMoviesComponents key={item.id} data={item} 
                              mediaType="tv"
                            />)
                        }) : 'Loading ....'
                        }
                    {
                      paginationno && paginationno > 1 ? <PaginationComponent maxnum={paginationno} activenum={pageno} handleClick={handleClick}/> : ''
                    }
            </Row>
          </Container>
        </main>
    </>
  )
}

export default HomeContainer;