import { Description } from "src/crud-testing/entities/description.entity";
import { Profile } from "src/crud-testing/entities/profile.entity";
import { Role } from "src/crud-testing/entities/role.entity";
import { User } from "src/crud-testing/entities/user.entity";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'test',
    synchronize: false, // Good - never true in production
    logging: true,
    entities: [User, Role, Profile, Description],
    migrations: ['src/migrations/*.ts'],
    migrationsTableName: 'migrations', // Optional but recommended
});

export default AppDataSource;