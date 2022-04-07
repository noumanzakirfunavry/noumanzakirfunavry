import { MenuPositionTypes } from '@cnbc-monorepo/enums';
import {
	AutoIncrement, BelongsTo, Column,
	DataType,
	ForeignKey, HasMany, Model,
	PrimaryKey, Table, Unique
} from 'sequelize-typescript';
import { Users } from './users.entity';
// import { MenusService } from '../../../../apps/admin-microservice/src/app/menus/menus.service';

@Table({
  paranoid: true,
  timestamps: true,
})
export class Menus extends Model {
  // @Inject('MENUS_REPOSITORY') private static MenuRepo: typeof Menus;
  // private static readonly menusService = new MenusService(),

  @PrimaryKey
  @AutoIncrement
  @Unique
  @Column
  id: number;

  @Column
  title: string;

  @Column
  orderNo: number;

  @Column
  url: string;

  @Column({
    type: DataType.BOOLEAN,
  })
  visible: boolean;

  @Column({
    type: DataType.BOOLEAN,
  })
  isActive: boolean;

  @ForeignKey(() => Menus)
  @Column({ allowNull: true })
  parentMenuId: number;

  @BelongsTo(() => Menus)
  menu: Menus;

  @HasMany(() => Menus, { as: 'childMenus', foreignKey: 'parentMenuId' })
  childMenus: Menus[];

  @Column({
    type: DataType.ENUM,
    values: Object.values(MenuPositionTypes),
  })
  position: MenuPositionTypes;

  @Column
  menuPosition: number;

  @ForeignKey(() => Users)
  @Column
  publishedBy: number;
  @BelongsTo(() => Users)
  user: Users;
}
