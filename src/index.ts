import { IEmission, TFriends, TRegions } from "types";

class Stalcraft {
  private demoUrl: string = "https://dapi.stalcraft.net";
  private prodUrl: string = "https://eapi.stalcraft.net";

  constructor(private appToken: string) { }

  private async request(endpoint: string, method: string = "GET", params?: string, userToken?: string) {
    const requestUrl = params ? `${endpoint}?${params}` : endpoint;
    try {
      const req = await fetch(`${this.demoUrl}/${requestUrl}`, {
        method: method,
        headers: {
          Authorization: userToken ? `Bearer ${userToken}` : `Bearer ${this.appToken}`,
        },
      })
      return { data: await req.json(), error: null };
    } catch (error) {
      return { data: null, error: error };
    }
  }

  public async getRegions() {
    const { data, error } = await this.request(`regions`);
    return { data: data as TRegions, error };
  }

  public async getAuctionHistory(region: string, item: string) {
    const res = await this.request(`${region}/auction/${item}/history`);
    return res;
  }

  public async getAuctionLots(region: string, item: string) {
    const res = await this.request(`${region}/action/${item}/lots`);

    return res;
  }

  public async getCharacters(region: string, userToken: string) {
    const res = await this.request(`${region}/characters`, "GET", undefined, userToken);
    return res;
  }

  public async getClan(region: string, clanId: string) {
    const res = await this.request(`${region}/clan/${clanId}/info`);
    return res;
  }

  public async getClanMembers(region: string, clanId: string) {
    const res = await this.request(`${region}/clan/${clanId}/members`);
    return res;
  }

  public async getClans(region: string) {
    const res = await this.request(`${region}/clans`);
    return res;
  }

  public async getEmission(region: string) {
    const { data, error } = await this.request(`${region}/emission`);
    return { data: data as IEmission, error };
  }

  public async getFriends(region: string, character: string, userToken: string) {
    const { data, error } = await this.request(`${region}/friends/${character}`, "GET", undefined, userToken);
    return { data: data as TFriends, error };
  }
}

export default Stalcraft;
