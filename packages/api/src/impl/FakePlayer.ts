import type { Player } from "../api/Player";
import type { Track } from "../api/Track";

/**
 * A fake player, created when no providers have been installed or given.
 */
export class FakePlayer implements Player {
  channelId: string | null = null;
  guildId: string | null = null;

  pause(): Promise<void> {
    return Promise.resolve();
  }

  play(_track: Track): Promise<void> {
    return Promise.resolve();
  }

  resume(): Promise<void> {
    return Promise.resolve();
  }

  stop(): Promise<void> {
    return Promise.resolve();
  }
}

