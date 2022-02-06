import { ISearchSnippet } from "./ISearchSnippet";

export interface ISearch extends ISearchSnippet {
    id: { videoId: string };
    snippet: ISearchSnippet;
}
