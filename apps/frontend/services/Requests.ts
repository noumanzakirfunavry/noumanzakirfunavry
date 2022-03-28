export const baseUrl='http://157.90.67.186:3001/';
export const baseUrlAdmin='http://157.90.67.186:3002/';
export const newsAPI=baseUrl+'news/api/admin/';
export const adminApi = baseUrlAdmin + 'admin/api/admin/'
export const requests={
    login:newsAPI+'login',
    signup:newsAPI+'register',
    quickLinks:newsAPI+'quickLinks',
    breakingNews:adminApi+'breakingNews',
    branches:adminApi+'branches',
    jobs:adminApi+'jobs'
}
