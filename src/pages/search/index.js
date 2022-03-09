import Grid from '@mui/material/Grid';
import { useSelector, shallowEqual } from "react-redux";
import Skeleton from '@mui/material/Skeleton';
import './index.css'
const Search = () => {

  const { list, loading } = useSelector(state => {
    return {
      list: state.list.list,
      loading: state.header.loading
    };
  }, shallowEqual);

  console.log("list", list, loading)
  const renderBox = (item) => {
    return (
      <div className='search-item'>
        <p>{item.name}</p>
        <p>{item.one_year_exploding}</p>
        <p>{item.name}</p>
      </div>
    )
  }
  return (
    <div className='search-box'>
      <p style={{ textAlign: 'left' }}>Related product trends</p>
      <Grid container spacing={2}>
        {loading ? (
          new Array(3).fill(0).map((item, index) => {
            return (
              <Grid item xl={4} lg={6} md={8} xs={12}>
                <div className='search-item'>
                  <Skeleton variant="text"></Skeleton>
                  <Skeleton variant="text"></Skeleton>
                  <Skeleton variant="rectangular" style={{width: '100%'}} height={118}></Skeleton>
                </div>
              </Grid>
            )
          })
        ) :
          (
            list.map(item => {
              return (
                <Grid item xl={4} lg={6} md={8} xs={12}>
                  {renderBox(item)}
                </Grid>
              )
            })
          )
        }
      </Grid>
    </div>
  )
}
export default Search