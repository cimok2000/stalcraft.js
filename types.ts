export type TRegions = IRegion[];
export interface IRegion {
  id: string;
  name: string
}
export type TFriends = string[];
export interface IEmission {
  currentStart: number;
  previousStart: number;
  previousEnd: number;
};
export interface IAuctionHistory {
  total: number;
  prices: IAuctionItem[];
}
interface IAuctionItem {
  amount: number;
  price: number;
  time: string;
}
export interface IAuctionLots {
  total: number;
  lots: IAuctionLot[];
}
interface IAuctionLot {
  itemId: string;
  startPrice: number;
  currentPrice: number;
  buyoutPrice: number;
  startTime: string;
  endTime: string;
  additional: {
    property1: string;
    property2: string;
  }
}
export type TCharacters = ICharacter[];
interface ICharacter {
  information: {
    id: string;
    name: string;
    creationTime: string;
  },
  clan: {
    info: IClan,
    member: {
      name: string;
      rank: string;
      joinTime: string;
    }
  }
}
export interface IClan {
  id: string;
  name: string;
  tag: string;
  level: number;
  levelPoints: number;
  registrationTime: string;
  alliance: string;
  description: string;
  leader: string;
  memberCount: number;
}
export interface IClans {
  totalClans: number;
  data: IClan[];
};
export type TClanMembers = IClanMember[];
export interface IClanMember {
  name: string;
  rank: string;
  joinTime: string;
}
export interface IError {
  title: string;
  status: number;
  details: object;
}