/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OAuthTokenWhereInput } from "./OAuthTokenWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { OAuthTokenOrderByInput } from "./OAuthTokenOrderByInput";

@ArgsType()
class OAuthTokenFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => OAuthTokenWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => OAuthTokenWhereInput, { nullable: true })
  @Type(() => OAuthTokenWhereInput)
  where?: OAuthTokenWhereInput;

  @ApiProperty({
    required: false,
    type: [OAuthTokenOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [OAuthTokenOrderByInput], { nullable: true })
  @Type(() => OAuthTokenOrderByInput)
  orderBy?: Array<OAuthTokenOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { OAuthTokenFindManyArgs as OAuthTokenFindManyArgs };
