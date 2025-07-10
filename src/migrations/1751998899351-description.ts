import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Description1751998899351 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
                await queryRunner.createTable(
                    new Table({
                        name: "description",
                        columns: [
                            {
                                name: "id",
                                type: "int",
                                isPrimary: true,
                            },
                            {
                                name: "content",
                                type: "varchar",
                            },
                            {
                                name: "userId",
                                type: "int",
                            },
                        ],
                    }),
                    true,
                )
            
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("description");
    }

}
