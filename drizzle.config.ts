import { defineConfig } from "drizzle-kit";
import type { Config } from "drizzle-kit";

export default defineConfig({
    schema: "./db/schemas/*.ts",
    out: "./drizzle",
    dialect: "sqlite",
    driver: "expo",
    dbCredentials: {
      url: "file:///data/user/0/host.exp.exponent/files/SQLite/argos_local_db", // Ruta a tu base de datos SQLite
    },
}satisfies Config);