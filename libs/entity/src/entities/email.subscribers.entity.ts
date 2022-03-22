import {
  Table,
  Model,
  PrimaryKey,
  AutoIncrement,
  Unique,
  Column,
  DataType,
  BeforeCreate,
} from 'sequelize-typescript';
import { hash } from 'bcrypt';

@Table({
  paranoid: true,
  timestamps: true,
  defaultScope: {
    attributes: { exclude: ['password'] },
  },
})
export class EmailSubscribers extends Model {
  @PrimaryKey
  @AutoIncrement
  @Unique
  @Column
  id: number;

  @Column
  name: string;

  @Column({ unique: true })
  email: string;

  @Column
  password: string;

  @Column({ unique: true })
  phone: string;

  @Column
  jobPosition: string;

  @Column
  industry: string;

  @Column
  DOB: Date;

  @Column
  country: string;

  @Column
  gender: string;

  @Column({
    type: DataType.BOOLEAN,
  })
  status: boolean;

  @BeforeCreate
  static async hashPassword(instance: EmailSubscribers) {
    instance.password = await hash(
      instance.password,
      parseInt(process.env.HASH_SALT_ROUNDS)
    );
  }
}
