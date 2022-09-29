import sheet from './character'

type player = {
    Name: string,
    IsAdmin: Boolean,
    LastConnected: Date,
    NbMessages: number,
    Campaign: campaign[]
    ID: number
}

type GM = player & {
    AdminOf: campaign[]
}

type campaign = {
    Name: string,
    Map: map[],
    CharacterSheets: sheet[]
}

type map = {
    Plan: token[],
    Main: token[],
    GM: token[]
}

type token = {
    Image: MediaImage,
    Position: point2D
}

type point2D = {
    x: number,
    y: number
}