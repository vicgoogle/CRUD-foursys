import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import Equipment from "./Equipment";
import Client from "./Client";

@Entity("rent")
class Rent {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToOne(() => Equipment, (equipment: Equipment) => equipment.id)
  @JoinColumn({ name: "equipment_id" })
  equipment: Equipment;

  @OneToOne(() => Client, (client: Client) => client.id)
  @JoinColumn({ name: "client_id" })
  client: Client;

  @Column({ name: "name_equipment" })
  nameEquipment: string;

  @Column({ name: "date_start" })
  dateStart: string;

  @Column({ name: "date_end" })
  dateEnd: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}

export default Rent;
