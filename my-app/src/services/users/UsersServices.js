import * as mock from '../../mock/mock';

export const getAll = () => {
    return mock.USERS_DATA;
}

export const getById = (id) => {
    return (getAll().filter(c =>
        (c.id == id))
    )
}

export const getLogedUser = () => {
    return mock.LOGED_IN;
}

export const getAphabet = () => {
    return getAll().map((data, index) => {
        return data.name.charAt(0).toLowerCase();
    })
}

export const getPageNumbers = () => {
    let users = getAll();
    return (users.length % mock.CARDS_PER_PAGE) == 0 && Math.floor(users.length / mock.CARDS_PER_PAGE) != 0 ?
        Math.floor(users.length / mock.CARDS_PER_PAGE) :
        Math.floor(users.length / mock.CARDS_PER_PAGE) + 1
}

export const filterBy = (searchStr, letter, page, nmberOfPages) => {
    return (getAll().filter(u =>
        (u.name.toUpperCase().includes(searchStr.toUpperCase()) && (u.name.charAt(0).toUpperCase() == letter.toUpperCase() || letter == ''))
    )).slice(
        (page == 1 ? 0 : (page - 1) * nmberOfPages + 1),
        getAll().length
    )
}

export const getNumberOfPages = (searchStr, letter) => {
    return ((getAll().filter(u =>
        (u.name.toUpperCase().includes(searchStr.toUpperCase()) && (u.name.charAt(0).toUpperCase() == letter.toUpperCase() || letter == ''))
    )).length % mock.CARDS_PER_PAGE) == 0 && Math.floor((getAll().filter(u =>
        (u.name.toUpperCase().includes(searchStr.toUpperCase()) && (u.name.charAt(0).toUpperCase() == letter.toUpperCase() || letter == ''))
    )).length / mock.CARDS_PER_PAGE) != 0 ? Math.floor((getAll().filter(u =>
        (u.name.toUpperCase().includes(searchStr.toUpperCase()) && (u.name.charAt(0).toUpperCase() == letter.toUpperCase() || letter == ''))
    )).length / mock.CARDS_PER_PAGE) : Math.floor((getAll().filter(u =>
        (u.name.toUpperCase().includes(searchStr.toUpperCase()) && (u.name.charAt(0).toUpperCase() == letter.toUpperCase() || letter == ''))
    )).length / mock.CARDS_PER_PAGE) + 1
}