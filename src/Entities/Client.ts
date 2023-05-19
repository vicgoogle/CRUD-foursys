import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import Rent from "./Rent";
import Equipment from "./Equipment";

@Entity("client")
class Client {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ name: "birth_date" })
  birthDate: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column()
  cpf: string;

  @OneToMany(() => Rent, (rent) => rent.client)
  rents: Rent[];

  @OneToMany(() => Equipment, (equipment) => equipment.client)
  equipments: Equipment[];

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}

export default Client;
