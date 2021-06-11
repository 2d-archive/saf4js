import type { Player } from "./Player";

export interface PlayerManager<P extends Player, O extends PlayerManagerOptions> {

  /**
   * The options provided to this player manager.
   */
  readonly options: O;

  /**
   * All players that have been created by this player manager.
   */
  readonly players: Map<string, P>;

  /**
   * Creates a new instance of this player manager.
   * @param options The options to use.
   */
  // new(options: O): PlayerManager<P, O>;

  /**
   * Creates a new player for the supplied guildId
   * @param guildId ID of the guild to create the player for.
   */
  create(guildId: string): P;

  /**
   *
   * @param guildId
   */
  destroy(guildId: string): void;

  /**
   * Destroys the supplied player.
   * @param player The player to destroy.
   */
  destroy(player: P): void;

}

export interface PlayerManagerOptions {}
