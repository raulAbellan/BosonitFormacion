export interface CharacterInfo {
    info:    Info;
    results: Result[];
}

export interface Info {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}

export interface Result {
    id:       number;
    name:     string;
    status:   Status;
    species:  Species;
    type:     string;
    gender:   Gender;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}

export enum Gender {
    Female = "Female",
    Genderless = "Genderless",
    Male = "Male",
}

export interface Location {
    name: string;
    url:  string;
}

export enum Species {
    Robot = "Robot",
}

export enum Status {
    Dead = "Dead",
    Unknown = "unknown",
}
