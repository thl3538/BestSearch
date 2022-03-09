import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { setSearchInfo as setSearchInfoAction, updateLoading as updateLoadingAction } from "../../store/actions/header";
import { fetchPost as fetchPostAction } from "../../store/actions/list";
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import './index.css'
import { useNavigate } from "react-router";

export default function Header() {
  const { searchVal } = useSelector(state => {
    return {
      searchVal: state.header.searchVal,
    };
  }, shallowEqual);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const searchInfo = () => {
    navigate(`/search/${searchVal}`)
    dispatch(fetchPostAction())
    dispatch(
      updateLoadingAction({
        loading: true
      })
    )
  }
  const changeInputVal = (e) => {
    dispatch(
      setSearchInfoAction({
        searchVal: e.target.value
      })
    );
  } 
  return (
    <div className="header">
      <span className="mr-10" style={{cursor: 'pointer'}} onClick={() => navigate('/home')}>SimplyTrends</span>
      <TextField size="small" className="search-input mr-10" onChange={changeInputVal} id="demo-helper-text-misaligned-no-helper" />
      <div className="search-icon-box" onClick={searchInfo}>
        <SearchIcon />
      </div>
    </div>
  );
}
