import flickrApi from '../axios/flickrApi';

/*
 * Returns an array of terms
 *  
 * @param {string} query, the search term   
 * @param {number} page, page number used for pagination   
 * @return {object} contains array of images and pagination data
*/

export default async (query, page) => {
    try {
        const response = await flickrApi.get(`/?method=flickr.photos.search&per_page=20&page=${page}&text=${query}`);
        if (response.data.stat !== "ok") {
            return {};
        }
        return response.data.photos || {};
    } catch (e) {
        console.log('get random gif exception: ', e);
        return [];
    }
};