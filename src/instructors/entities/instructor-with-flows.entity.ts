import { ApiProperty } from "@nestjs/swagger";
import { FlowEntityBase as FlowEntity} from "src/flows/entities/flow.entity";

export class InstructorEntityWithFlow {
    @ApiProperty({ required: true })
    id: string;
    @ApiProperty({ required: true })
    email: string;
    @ApiProperty()
    fullName: string;
    @ApiProperty({ required: true })
    departmentId: number
    @ApiProperty({ required: true })
    facultyId: number
    @ApiProperty({ required: true })
    department: string
    @ApiProperty({ required: true })
    faculty: string
    @ApiProperty()
    flows_count: number
    @ApiProperty({isArray: true})
    flows: FlowEntity
}
