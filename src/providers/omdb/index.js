import { apiUrl, apiKey } from './config';

function buildUrlParams(params, isSearch = true) {
    let urlParams = [];
    urlParams.push('apikey=' + apiKey);
    if(!isSearch) {
        urlParams.push('i=' + params);
        return urlParams;
    }
    urlParams.push('s=' + params.title);
    params.year && urlParams.push('y=' + params.year);
    params.type && urlParams.push('type=' + params.type);
    params.page && urlParams.push('page=' + params.page);
    return urlParams;
}

function formatResults(item) {
    return {
        title: item.Title,
        poster: item.Poster === 'N/A' ? null : item.Poster,
        year: item.Year,
        id: item.imdbID
    }
}

export function search(params) {
    return new Promise((resolve, reject) => {
        fetch(apiUrl + '?' + buildUrlParams(params).join('&')).then((response) => {
            response.json().then((res) => {
                if (res.Error) {
                    reject(res.Error);
                }
                else if (res.Search) {
                    resolve({
                        results: res.Search.map(formatResults),
                        pages: Math.ceil(res.totalResults / 10)
                    });
                }
                else {
                    reject('Something went wrong');
                }
            });
        }).catch((err) => {
            console.log('error', err);
            reject(err.message);
        });
    });
}

export function searchDetails(id) {
    return new Promise((resolve, reject) => {
        fetch(apiUrl + '?' + buildUrlParams(id, false).join('&')).then((response) => {
            response.json().then((res) => {
                if (res.Error) {
                    reject(res.Error);
                }
                else if (res && typeof res === 'object') {
                    resolve({
                        type: res.Type,
                        title: res.Title,
                        poster: res.Poster,
                        year: res.Year,
                        plot: res.Plot,
                        genre: res.Genre,
                        released: res.Released,
                        length: res.Runtime,
                        actors: res.Actors.split(', '),
                        director: res.Director,
                        seasons: res.totalSeasons
                    });
                }
                else if (res.Error) {
                    reject(res.Error);
                }
                else {
                    reject('Something went wrong');
                }
            });
        }).catch((err) => {
            console.log('error', err);
            reject(err.message);
        });
    });
}