import type { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProductTable1764818804076 implements MigrationInterface {
    name = 'CreateProductTable1764818804076'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "description" SET DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "description" DROP DEFAULT`);
    }

}
