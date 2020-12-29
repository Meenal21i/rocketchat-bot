import { driver } from "@rocket.chat/sdk";
import { logBotMessage } from "../helpers/botLogging";
import { CommandInt } from "../interfaces/CommandInt";

export const resources: CommandInt = {
  name: "resources",
  description: "Returns a list of helpful links",
  parameters: [],
  usage: [
    "`{prefix} resources` - will return links to the freeCodeCamp Code of Conduct, the Moderator Handbook, the Contributing Guidelines, the News Style Guide, and PRs ready for review.",
  ],
  modCommand: false,
  command: async (_message, room, BOT) => {
    try {
      const coc =
        "[freeCodeCamp Code of Conduct](https://freecodecamp.org/news/code-of-conduct) - The set of rules we apply to all of our community platforms.";
      const mod =
        "[Moderator Handbook](https://contribute.freecodecamp.org/#/flight-manuals/moderator-handbook) - The guidelines our team follows when moderating the community.";
      const contrib =
        "[Contributing Guidelines](https://contribute.freecodecamp.org/) - Instructions for contributing to the freeCodeCamp codebase, platforms, and community.";
      const news =
        "[News Contributing](https://www.freecodecamp.org/news/developer-news-style-guide/) - Instructions specifically for becoming an author on our `/news` platform.";
      const prs =
        "[Pull Requests](https://github.com/freeCodeCamp/freeCodeCamp/pulls?q=is%3Aopen+is%3Apr+-label%3A%22status%3A+blocked%22+-label%3A%22status%3A+merge+conflict%22+status%3Asuccess+draft%3Afalse) - A list of GitHub pull requests that are ready for review (not in draft, not blocked, passing all CI checks).";
      const header = "Here are some helpful links for you!";
      const response = `${header}\n${coc}\n${mod}\n${contrib}\n${news}\n${prs}`;
      await driver.sendToRoom(response, room);
    } catch (err) {
      await logBotMessage(
        `${room} had an error with the \`resources\` command. Check the logs for more info.`,
        BOT
      );
      console.error(err);
    }
  },
};
