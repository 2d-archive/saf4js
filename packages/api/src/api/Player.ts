import type { Track } from "./Track";

export interface Player {

  /**
   * ID of the guild that this player was created for.
   */
  guildId: string | null;

  /**
   * ID of the channel this player has joined, or null if no voice channel has been joined.
   */
  channelId: string | null;

  /**
   * Plays the supplied track.
   * @param track The track to play.
   */
  play(track: Track): Promise<any>;

  /**
   * Pauses playback of the current track.
   */
  pause(): Promise<any>;

  /**
   * Resumes playback of the current track.
   */
  resume(): Promise<any>;

  /**
   * Stops the current track, if any.
   */
  stop(): Promise<any>;

}
