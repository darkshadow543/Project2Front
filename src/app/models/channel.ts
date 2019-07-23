import { Video } from './video';

export class Channel {
    id:number;
    owner:number;
    name:string;
    videos:Video[];
}
