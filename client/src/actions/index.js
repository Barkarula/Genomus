import axios from 'axios';

export function getBooks(
    limit = 10,
    start = 0,
    order = 'asc',
    list = ''
){
    
    const request = axios.get(`/api/books?limit=${limit}&skip=${start}&order=${order}`)
                    .then(response => {
                            if(list){
                                return [...list,...response.data]
                            } else {
                                return response.data
                            }
                        }
                    )

    return {
        type:'GET_BOOKS',
        payload:request
    }

}

export function getBookWithReviewer(id){
    const request = axios.get(`/api/getBook?id=${id}`)

    return (dispatch)=>{
        request.then(({data})=>{
            let book = data;

            axios.get(`/api/getReviewer?id=${book.ownerId}`)
            .then(({data})=>{
                let response = {
                    book,
                    reviewer:data
                }

                dispatch({
                    type:'GET_BOOK_W_REVIEWER',
                    payload:response
                })
            })
        })
    }
}

export function getUserRoleTest(id) {
    const request = axios.get(`/api/getUser?id=${id}`)

    return (dispatch)=>{
        request.then(({data})=>{
            let user = data;

            axios.get(`/api/getUser?id=${user.role}`)
            .then(({data})=>{
                let response = {
                    user,
                    reviewer:data
                }

                dispatch({
                    type:'GET_BOOK_W_REVIEWER',
                    payload:response
                })
            })
        })
    }
}

export function clearBookWithReviewer(){
    return {
        type:'CLEAR_BOOK_W_REVIEWER',
        payload:{
            book:{},
            reviewer:{}
        }
    }
}

export function addBook(book){
    const request = axios.post('/api/book',book)
        .then(response => response.data);

    return {
        type:'ADD_BOOK',
        payload:request
    }
}

export function clearNewBook() {
    return {
        type:'CLEAR_NEWBOOK',
        payload:{}
    }
}

export function getUserPosts(userId){
    const request = axios.get(`/api/user_posts?user=${userId}`)
                    .then(response => response.data)

    return {
        type:'GET_USER_POSTS',
        payload:request
    }
}

export function getBook(id){
    const request = axios.get(`/api/getBook?id=${id}`)
                    .then(response => response.data);

    return {
        type:'GET_BOOK',
        payload:request
    }
}


export function updateBook(data){
    const request = axios.post(`/api/book_update`,data)
                .then(response => response.data);

    return {
        type:'UPDATE_BOOK',
        payload:request
    }

}

export function deleteBook(id){
    const request = axios.delete(`/api/delete_book?id=${id}`)
                    .then(response => response.data)

    return {
        type:'DELETE_BOOK',
        payload:request
    }
}

export function clearBook(){
    return{
        type:'CLEAR_BOOK',
        payload:{
            book:null,
            updateBook:false,
            postDeleted:false
        }
    }
}


/*========= USER ===========*/

export function getUser(id){
    const request = axios.get(`/api/getUser?id=${id}`)
                    .then(response => response.data);

    return {
        type:'GET_USER_ID',
        payload:request
    }
}

export function getUserRole(role){
    const request = axios.get(`/api/getUserRole?user=${role}`)
                    .then(response => response.data)

    return {
        type:'GET_USER_POSTS',
        payload:request
    }
}

export function loginUser({email,password}){
    const request = axios.post('/api/login',{email,password})
                .then(response => response.data)

    return {
        type:'USER_LOGIN',
        payload:request
    }
}

export function auth(){
    const request = axios.get('/api/auth')
                .then(response => response.data);

    return {
        type:'USER_AUTH',
        payload:request
    }

}

export function getUsers(){
    const request = axios.get(`/api/users`)
                    .then(response => response.data);
        
    return {
        type:'GET_USER',
        payload:request
    }
}


export function userRegister(user,userList){
    const request = axios.post(`/api/register`,user)

    return (dispatch) =>{
        request.then(({data})=>{
            let users = data.success ? [...userList,data.user]:userList;
            let response = {
                success:data.success,
                users
            }

            dispatch({
                type:'USER_REGISTER',
                payload:response
            })
        })
    }
}

export function deleteUser(id){
    const request = axios.delete(`/api/delete_user?id=${id}`)
                    .then(response => response.data)

    return {
        type:'DELETE_USER',
        payload:request
    }
}

export function clearUser(){
    return{
        type:'CLEAR_USER',
        payload:{
            user:null,
            updateUser:false,
            userDeleted:false
        }
    }
}

/*========= GENOM ===========*/

export function addGen(gen){
    const request = axios.post('/api/gen',gen)
        .then(response => response.data);

    return {
        type:'ADD_GEN',
        payload:request
    }
}

export function clearNewGen() {
    return {
        type:'CLEAR_NEWGEN',
        payload:{}
    }
}

export function getUserGens(userId){
    const request = axios.get(`/api/user_gens?user=${userId}`)
                    .then(response => response.data)

    return {
        type:'GET_USER_GENS',
        payload:request
    }
}

export function updateUser(data){
    const request = axios.post(`/api/user_update`,data)
                .then(response => response.data);

    return {
        type:'UPDATE_USER',
        payload:request
    }

}

/*========= GENINFO ===========*/

export function getIgen(id){
    const request = axios.get(`/api/getIgen?id=${id}`)
                    .then(response => response.data);

    return {
        type:'GET_IGEN',
        payload:request
    }
}

export function updateIgen(data){
    const request = axios.post(`/api/igen_update`,data)
                .then(response => response.data);

    return {
        type:'UPDATE_IGEN',
        payload:request
    }

}