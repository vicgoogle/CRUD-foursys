import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export default class Equipment1648796514401 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "equipment",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "uuid",
          },
          {
            name: "name_equipment",
            type: "varchar",
          },
          {
            name: "type_equipment",
            type: "varchar",
          },
          {
            name: "price_equipment",
            type: "varchar",
          },
          {
            name: "description_equipment",
            type: "varchar",
          },
          {
            name: "client_id",
            type: "varchar",
          },
          {
            name: "is_rented",
            type: "boolean",
            default: "false",
          },
          {
            name: "photo",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
    await queryRunner.createForeignKey(
      "equipment",
      new TableForeignKey({
        columnNames: ["client_id"],
        referencedTableName: "client",
        referencedColumnNames: ["id"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("equipment");
  }
}
