import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { IsNotEmpty } from "class-validator";

import BoardColumn from "./BoardColumn";

@Entity()
class Task extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  @IsNotEmpty()
  content: string;

  @ManyToOne(() => BoardColumn, (column) => column.tasks)
  @IsNotEmpty()
  column: number;

  constructor({ content, column }: Partial<Task> = {}) {
    super();

    this.content = content;
    this.column = column;
  }
}

export default Task;
