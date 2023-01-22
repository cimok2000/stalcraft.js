import { IEmission, TFriends, TRegions } from "types";
declare class Stalcraft {
    private appToken;
    private demoUrl;
    private prodUrl;
    constructor(appToken: string);
    private request;
    getRegions(): Promise<{
        data: TRegions;
        error: unknown;
    }>;
    getAuctionHistory(region: string, item: string): Promise<{
        data: any;
        error: null;
    } | {
        data: null;
        error: unknown;
    }>;
    getAuctionLots(region: string, item: string): Promise<{
        data: any;
        error: null;
    } | {
        data: null;
        error: unknown;
    }>;
    getCharacters(region: string, userToken: string): Promise<{
        data: any;
        error: null;
    } | {
        data: null;
        error: unknown;
    }>;
    getClan(region: string, clanId: string): Promise<{
        data: any;
        error: null;
    } | {
        data: null;
        error: unknown;
    }>;
    getClanMembers(region: string, clanId: string): Promise<{
        data: any;
        error: null;
    } | {
        data: null;
        error: unknown;
    }>;
    getClans(region: string): Promise<{
        data: any;
        error: null;
    } | {
        data: null;
        error: unknown;
    }>;
    getEmission(region: string): Promise<{
        data: IEmission;
        error: unknown;
    }>;
    getFriends(region: string, character: string, userToken: string): Promise<{
        data: TFriends;
        error: unknown;
    }>;
}
export default Stalcraft;
