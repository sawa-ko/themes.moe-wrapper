export interface SearchI {
  malID: number;
  name: string;
  year: number;
  season: string;
  themes: Array<{
    themeType: string;
    themeName: string;
    mirror: { mirrorURL: string; priority: number; notes: string };
  }>;
}
