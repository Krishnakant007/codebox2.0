// 'config/schema.tsx'

// import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

// export const usersTable = pgTable("users", {
//   id: integer().primaryKey().generatedAlwaysAsIdentity(),
//   name: varchar({ length: 255 }).notNull(),
 
//     email: varchar({ length: 255 }).notNull().unique(),
//     points: integer().default(0),
//     subscription:varchar()
// });



// export const CourseTable = pgTable("courses", {
//   id: integer().primaryKey().generatedAlwaysAsIdentity(),
//   courseId: integer().notNull().unique(),
//   title: varchar().notNull,
//   desc: varchar().notNull,
//   bannerImage: varchar().notNull,
//   level: varchar().default('Beginner'),
//   tags:varchar()
// })

import { integer, json, pgTable, varchar,timestamp } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  points: integer().default(0),
  subscription: varchar({ length: 255 })
});

export const CourseTable = pgTable("courses", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  courseId: integer().notNull().unique(),
  title: varchar({ length: 255 }).notNull(),        // FIXED
  desc: varchar({ length: 500 }).notNull(),         // FIXED
  bannerImage: varchar({ length: 500 }).notNull(),  // FIXED
  level: varchar({ length: 50 }).default('Beginner'),
  tags: varchar({ length: 255 })
});




export const CourseChaptersTable = pgTable("courseChapters", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  courseId: integer().notNull(),
  chapterId:integer(),
  name: varchar(),
  desc: varchar(),
  exercises: json(),
  
});

//npx drizzle-kit push


export const EnrolledCourse = pgTable('enrollCourse', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  courseId: integer(),
  userId: varchar(),
  enrolledDate: timestamp().defaultNow(),
  xpEarned:integer()
})