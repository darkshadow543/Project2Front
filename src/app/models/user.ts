import { Channel } from './channel';
import { Subscription } from './subscription';

export class User {
    id:number;
    userName:string;
    email:string;
    password:string;
    isYoutuber:boolean = false;
    channels:Channel[];
    subs:Subscription[];
}
