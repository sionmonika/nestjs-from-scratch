// ormconfig.ts (in project root)
import { DataSource } from "typeorm";
import { User } from "./src/crud-testing/entities/user.entity";
import { Role } from "./src/crud-testing/entities/role.entity";
import { Profile } from "./src/crud-testing/entities/profile.entity";
import { Description } from "./src/crud-testing/entities/description.entity";
import { CrudTesting } from "@/crud-testing/entities/crud-testing.entity";

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'test',
    synchronize: false,
    logging: true,
    entities: [User, Role, Profile, Description, CrudTesting],
    migrations: ['src/migrations/*.ts'],
    migrationsTableName: 'migrations',
});