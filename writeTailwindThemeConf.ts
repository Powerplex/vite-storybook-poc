import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

import { themes } from "./src/themes/index.js";
import type { Theme } from "./src/themes/types";

const __filename = fileURLToPath(import.meta.url);

function objectEntries<T extends Record<string | number, unknown>>(
  obj: T
): [keyof T, T[keyof T]][] {
  return Object.entries(obj) as [keyof T, T[keyof T]][];
}

function toKebabCase(v: string) {
  return v.replace(/[A-Z]/g, (e) => `-${e.toLocaleLowerCase()}`);
}

function toTailwindConfig(theme: Theme): Theme {
  const themeCpy: Theme = JSON.parse(JSON.stringify(theme));

  function flatten(obj: Theme, path?: string) {
    objectEntries(obj).forEach(([key, value]) => {
      if (value !== null && typeof value === "object") {
        const formattedPath = path ? `--${path}-${key}` : `--${key}`;
        flatten(
          value as unknown as Theme,
          toKebabCase(formattedPath.replace(/-{3,}/, "--"))
        );
        return;
      }

      /* eslint-disable */
      if (typeof value === "string") {
        /* @ts-ignore */
        obj[key as any] = `var(${path}-${toKebabCase(key)})`;
        /* eslint-enable */
      }
    });
  }

  flatten(themeCpy);

  return themeCpy;
}

function syncWriteFile(filename: string, data: string) {
  writeFileSync(join(dirname(__filename), filename), data, {
    flag: "w",
  });
}

syncWriteFile(
  "./tailwind.theme.conf.js",
  `module.exports = ${JSON.stringify(toTailwindConfig(themes.default))} `
);
