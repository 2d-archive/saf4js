import type { Player, Track } from "saf4js";

export class LavalinkPlayer implements Player {

  guildId: string | null = "566131499506860045";
  channelId: string | null = "705418126556266526";

  pause(): Promise<any> {
    console.log("paused");
    return Promise.resolve(undefined);
  }

  play(track: Track): Promise<any> {
    console.log("played track", track.title, "by", track.author);
    return Promise.resolve(undefined);
  }

  resume(): Promise<any> {
    console.log("resumed");
    return Promise.resolve(undefined);
  }

  stop(): Promise<any> {
    console.log("stop");
    return Promise.resolve(undefined);
  }

}
