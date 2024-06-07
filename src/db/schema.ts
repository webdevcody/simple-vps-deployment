import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const subscriptions = sqliteTable("subscriptions", {
  id: integer("id").primaryKey(),
  email: text("email").notNull(),
});

export type InsertUser = typeof subscriptions.$inferInsert;
export type SelectUser = typeof subscriptions.$inferSelect;
