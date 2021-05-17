import { SearchI } from './interfaces';
export declare class ThemesSearch {
    private baseUrl;
    constructor();
    /**
     * Get themes of anime search
     * @param title Anime title
     * @returns anime music themes
     */
    animeSearch(title: string): Promise<SearchI>;
}
