import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1694683290477 implements MigrationInterface {
    name = 'Migration1694683290477'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "search_history" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "version" integer NOT NULL, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "query" character varying NOT NULL, CONSTRAINT "PK_cb93c8f85dbdca85943ca494812" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "search_history"`);
    }

}
