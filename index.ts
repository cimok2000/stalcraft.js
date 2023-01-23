import { IEmission, TFriends, TRegions, TCharacters, IClan, TClanMembers, IClans, IAuctionLots, IAuctionHistory, IError } from "types";

class Stalcraft {
  private demoUrl: string = "https://dapi.stalcraft.net";
  private prodUrl: string = "https://eapi.stalcraft.net";
  private githubDbUrl: string = "https://api.github.com/repos/EXBO-Studio/stalcraft-database/contents/";

  constructor(private appToken: string) { }

  private async request(url: string, endpoint: string, method: string = "GET", params?: string, userToken?: string) {
    const requestUrl = params ? `${endpoint}?${params}` : endpoint;
    try {
      const req = await fetch(`${url}/${requestUrl}`, {
        method: method,
        headers: {
          Authorization: userToken ? `Bearer ${userToken}` : `Bearer ${this.appToken}`,
        },
      });
      if (!req.ok) {
        return { data: null, error: await req.json() as IError };
      }
      return { data: await req.json(), error: null };
    } catch (error) {
      return { data: null, error: error as IError };
    }
  }

  public async getRegions() {
    const { data, error } = await this.request(this.demoUrl, `regions`);
    return { data: data as TRegions, error };
  }

  public async getAuctionHistory(region: string, item: string) {
    const { data, error } = await this.request(this.demoUrl, `${region}/auction/${item}/history`);
    return { data: data as IAuctionHistory, error };
  }

  public async getAuctionLots(region: string, item: string) {
    const { data, error } = await this.request(this.demoUrl, `${region}/action/${item}/lots`);
    return { data: data as IAuctionLots, error };
  }

  public async getCharacters(region: string, userToken: string) {
    const { data, error } = await this.request(this.demoUrl, `${region}/characters`, "GET", undefined, userToken);
    return { data: data as TCharacters, error };
  }

  public async getClan(region: string, clanId: string) {
    const { data, error } = await this.request(this.demoUrl, `${region}/clan/${clanId}/info`);
    return { data: data as IClan, error };
  }

  public async getClanMembers(region: string, clanId: string, userToken: string) {
    const { data, error } = await this.request(this.demoUrl, `${region}/clan/${clanId}/members`, "GET", undefined, userToken);
    return { data: data as TClanMembers, error };
  }

  public async getClans(region: string) {
    const { data, error } = await this.request(this.demoUrl, `${region}/clans`);
    return { data: data as IClans, error };
  }

  public async getEmission(region: string) {
    const { data, error } = await this.request(this.demoUrl, `${region}/emission`);
    return { data: data as IEmission, error };
  }

  public async getFriends(region: string, character: string, userToken: string) {
    const { data, error } = await this.request(this.demoUrl, `${region}/friends/${character}`, "GET", undefined, userToken);
    return { data: data as TFriends, error };
  }

  public async getItems(region: "global" | "ru") {
    const { data, error } = await this.request(this.githubDbUrl, `${region}/`);
    return { data, error };
  }
}

export default Stalcraft;