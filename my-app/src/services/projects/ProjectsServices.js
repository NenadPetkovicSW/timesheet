import * as mock from '../../mock/mock';

export const getAll = () => {
    return mock.PROJECTS_DATA;
}

export const getById = (id) => {
    return (getAll().filter(c =>
        (c.id == id))
    )
}

export const getAphabet = () => {
    return getAll().map((data, index) => {
        return data.name.charAt(0).toUpperCase();
    })
}

export const getPageNumbers = () => {
    let projects = getAll();
    return (projects.length % mock.CARDS_PER_PAGE) == 0 && Math.floor(projects.length / mock.CARDS_PER_PAGE) != 0 ?
        Math.floor(projects.length / mock.CARDS_PER_PAGE) :
        Math.floor(projects.length / mock.CARDS_PER_PAGE) + 1
}

export const filterBy = (searchStr, letter, page, nmberOfPages) => {
    return (getAll().filter(p =>
        (p.name.toUpperCase().includes(searchStr.toUpperCase()) && (p.name.charAt(0).toUpperCase() == letter.toUpperCase() || letter == ''))
    )).slice(
        (page == 1 ? 0 : (page - 1) * nmberOfPages + 1),
        getAll().length
    )
}

export const getNumberOfPages = (searchStr, letter) => {
    return ((getAll().filter(p =>
        (p.name.toUpperCase().includes(searchStr.toUpperCase()) && (p.name.charAt(0).toUpperCase() == letter.toUpperCase() || letter == ''))
    )).length % mock.CARDS_PER_PAGE) == 0 && Math.floor((getAll().filter(p =>
        (p.name.toUpperCase().includes(searchStr.toUpperCase()) && (p.name.charAt(0).toUpperCase() == letter.toUpperCase() || letter == ''))
    )).length / mock.CARDS_PER_PAGE) != 0 ? Math.floor((getAll().filter(p =>
        (p.name.toUpperCase().includes(searchStr.toUpperCase()) && (p.name.charAt(0).toUpperCase() == letter.toUpperCase() || letter == ''))
    )).length / mock.CARDS_PER_PAGE) : Math.floor((getAll().filter(p =>
        (p.name.toUpperCase().includes(searchStr.toUpperCase()) && (p.name.charAt(0).toUpperCase() == letter.toUpperCase() || letter == ''))
    )).length / mock.CARDS_PER_PAGE) + 1
}