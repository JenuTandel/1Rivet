export class studio {
    StudioId!: number;
    StudioName!: string;
    StudioDescription!: string;
    StudioAddress!: string;
    HardwareAndEquipment!: string;
    CountryId!: number;
    Country!: string;
    StateId!: number;
    State!: string;
    CityId!: number;
    City!: string;
    StudioDays!: string;
    StudioHours!: string;
    Status!: string;
    StudioServiceTypeId!: number;
    StudioServiceType!: string;
    EventRates!: string[]
    StudioImages!: string[];
}


export class Pagination {
    public pageSize!: number;
    public pageNumber!: number;
}