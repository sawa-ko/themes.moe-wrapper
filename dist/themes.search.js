"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemesSearch = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
class ThemesSearch {
    constructor() {
        this.baseUrl = 'https://themes.moe/api';
    }
    /**
     * Get themes of anime search
     * @param title Anime title
     * @returns anime music themes
     */
    async animeSearch(title) {
        try {
            const animeSearch = await axios_1.default.get(`/anime/search/${title}`, { baseURL: this.baseUrl });
            const { data } = await axios_1.default.post('/themes/search', animeSearch.data, { baseURL: this.baseUrl });
            return data;
        }
        catch (error) {
            throw new Error(error.message || error);
        }
    }
}
exports.ThemesSearch = ThemesSearch;
