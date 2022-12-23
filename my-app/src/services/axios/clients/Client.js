import http from '../http-common'

const url = "clients"

export const get = (letter, str, page) => {
    let params = "?"
    if(str!='')
        params = "?str=" + str + "&";
    if(letter!='')
        params = "?letter=" + letter + "&";
    if(!page)
        params = params + "page=" + 0;

    if(page)
    params = params + "page=" + page;

    return http.get(url + "/pages" + params);
}

export const getPage = () => {
    return http.get(url + "/getPage");
}

export const getAll = () => {
    return http.get(url + "/getAll");
}

export const getAlpha = async () => {
    return await http.get(url + "/getAlpha");
}

export const update = async (client) => {
    return await http.put(url + "/update", client);
}

export const deleteById = async (id) => {
    return await http.delete(url + "/delete?id=" + id);
}
