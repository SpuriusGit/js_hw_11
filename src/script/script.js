import  "../css/style.css";
import * as _ from "lodash";
import CountryInfo from "../template/CountryInfo.hbs";
import searchItem from "../template/Items.hbs";
// import Pnoty from "./Pnoty";
import alertError from "./Pnoty";
// import { json } from "express";

const refs = {
    input: document.querySelector('.js-input'),
    countryList: document.querySelector('.js-country-list'),
    countryListItem: document.querySelector('.js-country-list__item'),
    singleItem: document.querySelector('.js-single-item')
};
refs.input.addEventListener('input',_.debounce((e)=>{
    refs.countryList.innerHTML = '';
    searchCountry(e.target.value);
}),3000);

function searchCountry(name){
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(response => response.json())
    .then(json => checkInfo(json));
};
function checkInfo(json){
    console.log(json);
    if(json.length > 10) alertError();
    if(json.length < 10 && json.length >= 2){
        renderList(json);
    }
    if(json.length === 1) renderItem(json);
}
function renderList(json) {
    refs.singleItem.innerHTML = '';
    json.map((item) => {
      let markup = searchItem(item);
      refs.countryList.innerHTML += markup;
    });
};
function renderItem(json){
    refs.singleItem.innerHTML = CountryInfo(json[0]);
}

