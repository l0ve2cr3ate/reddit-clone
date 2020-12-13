import { MikroORM } from "@mikro-orm/core";
import path from "path";

import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { User } from "./entities/User";
require("dotenv").config();

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post, User],
  dbName: "reddit-clone",
  debug: !__prod__,
  type: "postgresql",
  password: process.env.PASSWORD,
} as Parameters<typeof MikroORM.init>[0];
