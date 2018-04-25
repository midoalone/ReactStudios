// a library to wrap and simplify api calls
import apisauce from 'apisauce'

// our "constructor"
const create = (baseURL = 'http://forms.albumbugs.com/api/framework') => {

    const api = apisauce.create({
        baseURL
    })

    const listTables = () => api.post('sql-render', {
        query: 'SHOW TABLES'
    })

    const listColumns = (table) => api.post('sql-render', {
        query: "SELECT DATA_TYPE, COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = '" + table + "'"
    })

    const executeQuery = (queryString) => api.post('sql-render', {
        query: queryString
    })

    return {
        listTables,
        listColumns,
        executeQuery,
    }

}

// let's return back our create method as the default.
export default {
    create
}
