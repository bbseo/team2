import axios from 'axios';
import { useState } from 'react';

function Users() {
    const [users, setUsers] = useState(null);
    axios.get('/v1/search/local.json', {
        params: {
            query: '톤쇼우',
            display: 5
        },
        headers: {
            'X-Naver-Client-Id': '_int0L_yBJq92kJewH_J',
            'X-Naver-Client-Secret': 'zDzGVtdkd4'   
        }
    })

    axios.get('/v1/search/image', {
        params: {
            query: '톤쇼우',
            display: 10
        },
        headers: {
            'X-Naver-Client-Id': '_int0L_yBJq92kJewH_J',
            'X-Naver-Client-Secret': 'zDzGVtdkd4'
        }
    })
    .then(response => response)
    .then(data => data)
}


export default Users