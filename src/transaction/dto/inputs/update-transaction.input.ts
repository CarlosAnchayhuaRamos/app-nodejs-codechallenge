import { Field, InputType, Int } from "@nestjs/graphql";
import { IsString } from "class-validator";
import { TransactionStatus } from "src/transaction/enums/transaction-status.enum";

@InputType()
export class UpdateTransactionInput {

    @Field( () => String)
    @IsString()
    id?: string;

    @Field( () => TransactionStatus)
    transactionStatus?: TransactionStatus;
}