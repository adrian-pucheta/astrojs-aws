import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    environment: "node",
    testTimeout: 60000,
    resolveSnapshotPath(path, extension) {
      return path + extension
    },
    coverage: {
      all: true,
      include: ["**/*.ts"],
    },
  },
})
