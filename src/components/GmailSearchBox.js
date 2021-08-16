import React from 'react'
import './GmailSearchBox.css';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
export default function GmailSearchBox(props) {
    return (
        <div className="searchbox">
            <IconButton><SearchIcon></SearchIcon></IconButton>
            <input placeholder={props.placeholder}></input>
            <IconButton><ArrowDropDownIcon></ArrowDropDownIcon></IconButton>
        </div>
    )
}
