import {
  sqliteTable,
  text,
  integer,
  uniqueIndex,
  index,
} from "drizzle-orm/sqlite-core";
import { relations, sql } from "drizzle-orm";
import crypto from "crypto";
export const timestamps = {
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .default(sql`(unixepoch() * 1000)`),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" })
    .notNull()
    .default(sql`(unixepoch() * 1000)`),
};

export const usersTable = sqliteTable("users", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: integer("email_verified", { mode: "boolean" }).notNull(),
  image: text("image"),
  ...timestamps,
});

export const usersRelations = relations(usersTable, ({ many }) => ({
  sessions: many(sessionsTable),
  accounts: many(accountsTable),
  projectMembers: many(projectMembersTable),
}));

export const sessionsTable = sqliteTable("sessions", {
  id: text("id").primaryKey(),
  expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
  token: text("token").notNull().unique(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  ...timestamps,
});

export const sessionsRelations = relations(sessionsTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [sessionsTable.userId],
    references: [usersTable.id],
  }),
}));

export const accountsTable = sqliteTable("accounts", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: integer("access_token_expires_at", {
    mode: "timestamp",
  }),
  refreshTokenExpiresAt: integer("refresh_token_expires_at", {
    mode: "timestamp",
  }),
  scope: text("scope"),
  password: text("password"),
  ...timestamps,
});

export const accountsRelations = relations(accountsTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [accountsTable.userId],
    references: [usersTable.id],
  }),
}));

export const verificationsTable = sqliteTable("verifications", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
  ...timestamps,
});

export const projectsTable = sqliteTable("projects", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name").notNull(),
  description: text("description"),
  // Store the number of available resources directly on the project for simplicity, in the future where
  resourceCount: integer("resource_count").notNull().default(1),
  ...timestamps,
});

export const projectsRelations = relations(projectsTable, ({ many }) => ({
  projectMembers: many(projectMembersTable),
  tasks: many(tasksTable),
  dependencies: many(dependenciesTable),
  assignees: many(assigneesTable),
}));

export const projectMembersTable = sqliteTable(
  "project_members",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    projectId: text("project_id")
      .notNull()
      .references(() => projectsTable.id, { onDelete: "cascade" }),
    userId: text("user_id")
      .notNull()
      .references(() => usersTable.id, { onDelete: "cascade" }),
    // this is a permissions level role, job title would be added later when users can be assigned tasks
    role: text("role", { enum: ["owner", "editor", "viewer"] }).notNull(),
    ...timestamps,
  },
  (table) => [
    // Add index for finding members by projectId (essential for loading a project's members)
    index("member_project_idx").on(table.projectId),
    // Add index for finding projects by userId (essential for listing user's projects)
    index("member_user_idx").on(table.userId),
    // Your unique index is good too, keeps user unique per project
    uniqueIndex("unique_project_user_idx").on(table.projectId, table.userId),
  ],
);

export const projectUsersRelations = relations(
  projectMembersTable,
  ({ one }) => ({
    project: one(projectsTable, {
      fields: [projectMembersTable.projectId],
      references: [projectsTable.id],
    }),
    user: one(usersTable, {
      fields: [projectMembersTable.userId],
      references: [usersTable.id],
    }),
  }),
);

export const assigneesTable = sqliteTable(
  "assignees",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    projectId: text("project_id")
      .notNull()
      .references(() => projectsTable.id, { onDelete: "cascade" }),
    name: text("name").notNull(), // this is the name of the assignee, could be a user or a team
    // in the future could add more metadata like skills, type to help auto-assign tasks based on task requirements
    ...timestamps,
  },
  (table) => [index("assignee_project_idx").on(table.projectId)],
);

export const assigneesRelations = relations(assigneesTable, ({ one }) => ({
  project: one(projectsTable, {
    fields: [assigneesTable.projectId],
    references: [projectsTable.id],
  }),
}));

export const tasksTable = sqliteTable(
  "tasks",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    projectId: text("project_id")
      .notNull()
      .references(() => projectsTable.id, { onDelete: "cascade" }),
    name: text("name").notNull(),
    // optional assignee, if the task is assigned to a person or team
    assigneeId: text("assignee_id").references(() => assigneesTable.id, {
      onDelete: "cascade",
    }),
    description: text("description"),
    estimatedDuration: integer("estimated_duration"),
    durationUnit: text("duration_unit", {
      enum: ["hours", "days", "weeks"],
    }).default("days"),
    ...timestamps,
  },
  (table) => [
    index("task_project_idx").on(table.projectId),
    index("task_assignee_idx").on(table.assigneeId),
  ],
);

export const tasksRelations = relations(tasksTable, ({ one, many }) => ({
  project: one(projectsTable, {
    fields: [tasksTable.projectId],
    references: [projectsTable.id],
  }),
  // A task can be a prerequisite for many other tasks
  prerequisiteFor: many(dependenciesTable, { relationName: "prerequisite" }),
  // A task can depend on many other tasks (prerequisites)
  dependsOn: many(dependenciesTable, { relationName: "dependent" }),
  assignee: one(assigneesTable, {
    fields: [tasksTable.assigneeId],
    references: [assigneesTable.id],
  }),
}));

export const dependenciesTable = sqliteTable(
  "dependencies",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    // Including projectId helps scope dependency queries and ensures dependencies are within the same project
    projectId: text("project_id")
      .notNull()
      .references(() => projectsTable.id, { onDelete: "cascade" }),
    // The task that must be completed first
    prerequisiteTaskId: text("prerequisite_task_id")
      .notNull()
      .references(() => tasksTable.id, { onDelete: "cascade" }),
    // The task that depends on the prerequisite
    dependentTaskId: text("dependent_task_id")
      .notNull()
      .references(() => tasksTable.id, { onDelete: "cascade" }),
    ...timestamps,
  },
  (table) => [
    // Ensure a task cannot depend on itself (handled in application logic ideally, but good belt-and-suspenders)
    // Note: Drizzle doesn't directly support CHECK constraints in SQLite dialect definition yet. Add manually or enforce in application logic.
    uniqueIndex("unique_dependency_idx").on(
      table.projectId,
      table.prerequisiteTaskId,
      table.dependentTaskId,
    ),
    index("dep_project_idx").on(table.projectId),
    index("dep_prereq_idx").on(table.prerequisiteTaskId),
    index("dep_depend_idx").on(table.dependentTaskId),
  ],
);

export const dependenciesRelations = relations(
  dependenciesTable,
  ({ one }) => ({
    project: one(projectsTable, {
      fields: [dependenciesTable.projectId],
      references: [projectsTable.id],
    }),
    prerequisiteTask: one(tasksTable, {
      fields: [dependenciesTable.prerequisiteTaskId],
      references: [tasksTable.id],
      relationName: "prerequisite",
    }),
    dependentTask: one(tasksTable, {
      fields: [dependenciesTable.dependentTaskId],
      references: [tasksTable.id],
      relationName: "dependent",
    }),
  }),
);
