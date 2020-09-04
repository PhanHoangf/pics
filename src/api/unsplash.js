import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 
            'Client-ID OLytCtPUKpYuCbEu-8Yc61q20Gr2IdK0B4h2n4gWuqA'
    }
})