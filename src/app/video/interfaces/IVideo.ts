import { IVideoSnippet } from "src/app/video/interfaces/IVideoSnippet";
import { IStatistics } from "./istatistics";

export interface IVideo extends IVideoSnippet, IStatistics{
    id: string;
    snippet: IVideoSnippet;
    statistics: IStatistics;
}
