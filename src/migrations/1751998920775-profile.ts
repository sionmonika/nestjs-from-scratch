import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Profile1751998920775 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
                await queryRunner.createTable(
                    new Table({
                        name: "profile",
                        columns: [
                            {
                                name: "id",
                                type: "int",
                                isPrimary: true,
                            },
                            {
                                name: "bio",
                                type: "varchar",
                            },
                            {
                                name: "user",
                                type: "varchar",
                            },
                        ],
                    }),
                    true,
                )
            
    }

    public async down(queryRunner: QueryRunner): Promise<void> {        
        await queryRunner.dropTable("profile");
    }

}
