export default class Constants {
    static API_BASE_URL = process.env.NODE_ENV === 'production' ? '/api/' : 'http://localhost:8544/api/';
}