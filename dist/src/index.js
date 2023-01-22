"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Stalcraft {
    constructor(appToken) {
        this.appToken = appToken;
        this.demoUrl = "https://dapi.stalcraft.net";
        this.prodUrl = "https://eapi.stalcraft.net";
    }
    async request(endpoint, method = "GET", params, userToken) {
        const requestUrl = params ? `${endpoint}?${params}` : endpoint;
        try {
            const req = await fetch(`${this.demoUrl}/${requestUrl}`, {
                method: method,
                headers: {
                    Authorization: userToken ? `Bearer ${userToken}` : `Bearer ${this.appToken}`,
                },
            });
            return { data: await req.json(), error: null };
        }
        catch (error) {
            return { data: null, error: error };
        }
    }
    async getRegions() {
        const { data, error } = await this.request(`regions`);
        return { data: data, error };
    }
    async getAuctionHistory(region, item) {
        const res = await this.request(`${region}/auction/${item}/history`);
        return res;
    }
    async getAuctionLots(region, item) {
        const res = await this.request(`${region}/action/${item}/lots`);
        return res;
    }
    async getCharacters(region, userToken) {
        const res = await this.request(`${region}/characters`, "GET", undefined, userToken);
        return res;
    }
    async getClan(region, clanId) {
        const res = await this.request(`${region}/clan/${clanId}/info`);
        return res;
    }
    async getClanMembers(region, clanId) {
        const res = await this.request(`${region}/clan/${clanId}/members`);
        return res;
    }
    async getClans(region) {
        const res = await this.request(`${region}/clans`);
        return res;
    }
    async getEmission(region) {
        const { data, error } = await this.request(`${region}/emission`);
        return { data: data, error };
    }
    async getFriends(region, character, userToken) {
        const { data, error } = await this.request(`${region}/friends/${character}`, "GET", undefined, userToken);
        return { data: data, error };
    }
}
exports.default = Stalcraft;
//# sourceMappingURL=index.js.map