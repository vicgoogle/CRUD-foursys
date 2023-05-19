import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import Client from "./Client";

@Entity("equipment")
class Equipment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "name_equipment" })
  nameEquipment: string;

  @Column({ name: "type_equipment" })
  typeEquipment: string;

  @Column({ name: "price_equipment" })
  priceEquipment: number;

  @Column({ name: "description_equipment" })
  description: string;

  @ManyToOne(() => Client, (client: Client) => client.id)
  @JoinColumn({ name: "client_id" })
  client: Client;

  @Column({ name: "is_rented" })
  isRented: boolean;

  @Column()
  photo: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}

export default Equipment;
