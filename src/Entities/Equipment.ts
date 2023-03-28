import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("equipment")
class Equipment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  nameEquipment: string;

  @Column()
  typeEquipment: string;

  @Column()
  priceEquipment: number;

  @Column()
  nameClient: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}

export default Equipment;
