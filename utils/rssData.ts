import Parser from "rss-parser";
import { PromiseValue } from "./utilityTypes";

type CustomFeed = Record<string, never>;
type CustomItem = { itunes: { image: string; summary: string }; guid: string };

const parser: Parser<CustomFeed, CustomItem> = new Parser({});

let timeoutId: ReturnType<typeof setTimeout> | undefined;
let cache: PromiseValue<ReturnType<typeof DataFetcher>> | undefined;

const cachedDataFetcher = async () => {
  if (cache) return cache;

  const result = await DataFetcher();

  cache = result;

  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  timeoutId = setTimeout(() => {
    cache = undefined;
    timeoutId = undefined;
  }, 10000);

  return result;
};

const DataFetcher = async () => {
  const feed = await parser.parseURL(
    "https://feeds.soundcloud.com/users/soundcloud:users:884239870/sounds.rss"
  );

  const newItems = feed.items.map((element) => {
    return {
      // ye olde item thingies
      ...element,
      title: element.title ?? "",
      slug: element.title
        ?.toLowerCase()
        .split("-")
        .slice(0, 1)
        .join()
        .trim()
        .split(" ")
        .join("-"),
    };
  });

  const newFeed = {
    ...feed,
    items: newItems,
  };

  return newFeed;
};

export default cachedDataFetcher;
