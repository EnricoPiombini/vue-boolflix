import Vue from 'vue';
import axios from "axios";

export const state = Vue.observable({
    movieList: [],
    tvList: [],
    searchText: ""
})

export function fetchData(type) {
    axios.get('https://api.themoviedb.org/3/search/' + type, {
        params: {
            api_key: "b143daf0620a61a9ad7283983f428869",
            query: state.searchText,
            language: 'it-IT',
            
        }
    }).then((result) => {
        if (type === 'tv') {
            state.tvList = result.data.results
        } else {
        state.movieList = result.data.results }
    })
}