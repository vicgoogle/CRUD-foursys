import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export default class Rent1648796514402 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "rent",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "uuid",
          },
          {
            name: "equipment_id",
            type: "varchar",
          },
          {
            name: "name_equipment",
            type: "varchar",
          },
          {
            name: "client_id",
            type: "varchar",
          },
          {
            name: "date_start",
            type: "varchar",
          },
          {
            name: "date_end",
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
      "rent",
      new TableForeignKey({
        columnNames: ["equipment_id"],
        referencedTableName: "equipment",
        referencedColumnNames: ["id"],
      })
    );
    await queryRunner.createForeignKey(
      "rent",
      new TableForeignKey({
        columnNames: ["client_id"],
        referencedTableName: "client",
        referencedColumnNames: ["id"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("rent");
  }
}
