import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class User1751998931849 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
                await queryRunner.createTable(
                    new Table({
                        name: "user",
                        columns: [
                            {
                                name: "id",
                                type: "int",
                                isPrimary: true,
                            },
                            {
                                name: "name",
                                type: "varchar",
                            },
                            {
                                name: "descriptions",
                                type: "varchar",
                            },
                            {
                                name: "profile",
                                type: "varchar",
                            },
                            {
                                name: "roles",
                                type: "varchar",
                            },
                        ],
                    }),
                    true,
                )
            
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user");
    }

}
