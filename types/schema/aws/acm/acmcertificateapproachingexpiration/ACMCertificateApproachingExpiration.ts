

export class ACMCertificateApproachingExpiration {
  'daysToExpiry': number;

    private static discriminator: string | undefined = undefined;

    private static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "daysToExpiry",
            "baseName": "DaysToExpiry",
            "type": "number"
        }    ];

    public static getAttributeTypeMap() {
        return ACMCertificateApproachingExpiration.attributeTypeMap;
    }
}




