import { saf4js } from "saf4js";

import type { LavalinkPlayerManager } from "lavalink-saf4js-provider";

export async function main() {
  const playerManager = await saf4js.create<LavalinkPlayerManager>({
    nodes: [ "xxx" ],
    send: (_, __) => void 0
  });

  const player = playerManager.create("566131499506860045");

  await player.play({
    author: "conner",
    title: "menudo",
    length: 6969696n,
    uri: "https://menudo.cum",
    identifier: "the-source-code-copy.jar"
  });

  await player.pause();
  await player.resume();
  await player.stop();
}

void main();
