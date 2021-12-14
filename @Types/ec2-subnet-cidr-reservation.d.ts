import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface Ec2SubnetCidrReservationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_subnet_cidr_reservation.html#cidr_block Ec2SubnetCidrReservation#cidr_block}
    */
    readonly cidrBlock: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_subnet_cidr_reservation.html#description Ec2SubnetCidrReservation#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_subnet_cidr_reservation.html#reservation_type Ec2SubnetCidrReservation#reservation_type}
    */
    readonly reservationType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_subnet_cidr_reservation.html#subnet_id Ec2SubnetCidrReservation#subnet_id}
    */
    readonly subnetId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_subnet_cidr_reservation.html aws_ec2_subnet_cidr_reservation}
*/
export declare class Ec2SubnetCidrReservation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_subnet_cidr_reservation.html aws_ec2_subnet_cidr_reservation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2SubnetCidrReservationConfig
    */
    constructor(scope: Construct, id: string, config: Ec2SubnetCidrReservationConfig);
    private _cidrBlock?;
    get cidrBlock(): string;
    set cidrBlock(value: string);
    get cidrBlockInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    get ownerId(): string;
    private _reservationType?;
    get reservationType(): string;
    set reservationType(value: string);
    get reservationTypeInput(): string;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    get subnetIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ec2-subnet-cidr-reservation.d.ts.map