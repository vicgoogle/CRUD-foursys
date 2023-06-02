import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from "typeorm";
import Rent from "./Rent";
import Equipment from "./Equipment";
import Client from "./Client";

@Entity("address")
class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToOne(() => Client, (client: Client) => client.id)
  @JoinColumn({ name: "client_id" })
  client: Client;

  @Column({ name: "zip_code" })
  zipCode: string;

  @Column()
  number: string;

  @Column()
  complement: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}

export default Address;
