import { Detector } from "./impl/detection/Detector";

import type { PlayerManager, PlayerManagerOptions } from "./api/PlayerManager";
import type { Player } from "./api/Player";

export namespace saf4js {

  // export const playerManager = Symbol.for("PlayerManager");

  /**
   *
   */
  export async function create(): Promise<PlayerManager<Player, PlayerManagerOptions>>;


  /**
   * Creates a new player manager with the supplied options.
   *
   * @param options The options to supply the player manager.
   * @param klass The class to instantiate.
   */
  export async function create<PM extends PlayerManager<Player, PlayerManagerOptions>>(options: ExtractOptions<PM>, klass?: Class<PM>): Promise<PM>

  export async function create<PM extends PlayerManager<Player, O>, O extends PlayerManagerOptions>(options?: O, klass?: Class<PM>): Promise<PM> {
    if (!klass) {
      const providers = Detector.findProviders();
      if (!providers.length) {
        throw new Error("No pre-installed providers were found, install one or provide a class to instantiate");
      }

      const provider = providers[0];

      const exportedPlayerManager = (require(provider)).playerManager;
      if (!exportedPlayerManager) {
        throw new Error(`The provider "${provider}" doesn't export a PlayerManager using t...`);
      }

      klass = exportedPlayerManager;
    }

    return new klass!!(options);
  }

  type ExtractOptions<P> = P extends PlayerManager<Player, infer O> ? O : never;

  type Class<T> = {
    new (...args: any): T;
  }

}
