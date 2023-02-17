import dotenv from "dotenv";

dotenv.config();

const port = process.env.MYSQL_ROOT_PORT ? +process.env.MYSQL_ROOT_PORT : 3307;

const params = {
  type: "mysql" as const,
  host: "localhost",
  port,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: ["./src/Entities/*.ts"],
  migrations:
    process.env.NODE_ENV === "dev"
      ? ["./src/Typeorm/Migrations/*.ts"]
      : ["./src/Typeorm/Migrations/*.ts"],
  cli: {
    migrationsDir:
      process.env.NODE_ENV === "dev"
        ? "./src/Typeorm/Migrations/*.ts"
        : "./src/Typeorm/Migrations/*.ts",
  },
};

export default params;
