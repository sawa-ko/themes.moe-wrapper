import axios from 'axios';

import { SearchI } from './interfaces';

export class ThemesSearch {
  private baseUrl = 'https://themes.moe/api';

  constructor() {}

  /**
   * Get themes of anime search
   * @param title Anime title
   * @returns anime music themes
   */
  public async animeSearch(title: string): Promise<SearchI> {
    try {
      const animeSearch = await axios.get(`/anime/search/${title}`, { baseURL: this.baseUrl });
      const { data } = await axios.post('/themes/search', animeSearch.data, { baseURL: this.baseUrl });
      return data;
    } catch (error) {
      throw new Error(error.message || error);
    }
  }
}
