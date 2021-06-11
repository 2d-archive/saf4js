import { LavalinkPlayer } from "./LavalinkPlayer";

import type { PlayerManager, PlayerManagerOptions } from "saf4js";

export class LavalinkPlayerManager implements PlayerManager<LavalinkPlayer, LavalinkPlayerManagerOptions> {
  readonly options: LavalinkPlayerManagerOptions;
  readonly players: Map<string, LavalinkPlayer>;

  constructor(options: LavalinkPlayerManagerOptions) {
    this.options = options
    this.players = new Map<string, LavalinkPlayer>();
  }

  create(guildId: string): LavalinkPlayer {
    console.log("created player for", guildId);
    return new LavalinkPlayer();
  }

  destroy(guildId: string): void;
  destroy(player: LavalinkPlayer): void;
  destroy(arg0: string | LavalinkPlayer): void {
    console.log("destroyed player", typeof arg0 === "string" ? `for guild ${arg0}` : `player ${arg0.guildId}`);
  }

}

export interface LavalinkPlayerManagerOptions extends PlayerManagerOptions {
  nodes: string[];
  send: (id: string, payload: NodeJS.Dict<any>) => void;
}
