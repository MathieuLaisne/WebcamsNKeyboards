import { sheet } from './character'

/**
 * Name: Name of the player.
 * Campaign: All campaigns the player is in as normal player.
 */
type player = {
    Name: string,
    Campaign: campaign[]
}

/**
 * Extends player to be admin of campaigns
 */
type GM = player & {
    AdminOf: campaign[]
}

/**
 * Name: Name of the campaign.
 * Map: List of Maps in the campaign.
 * CharacterSheets: All character Sheets linked to the campaign.
 */
type campaign = {
    Name: string,
    Map: map[],
    CharacterSheets: sheet[]
}

/**
 * Plan: Tokens in the lower layer.
 * Main: Tokens in the middle layer. Players and visible objects, etc.
 * GM: Tokens in the hidden layer. Visible only to the GM.
 */
type map = {
    Plan: token[],
    Main: token[],
    GM: token[]
}

/**
 * Image: Image corresponding to the token.
 * Position: Optional. Position on the map.
 */
type token = {
    Image: MediaImage,
    Position?: point2D
}

type point2D = {
    x: number,
    y: number
}

/**
 * Sender: Player talking.
 * Content: Text to be displayed.
 * Type: Either "Chat", "Roll" or "Info". 
 * Visibility: Either "All", "GM" or "Personal".
 * Receiver: When "Personal", show only to the Receiver with corresponding id (and GM).
 */
type message = {
    Sender: player,
    Content: string,
    Type: string,
    Visibility: string,
    Receiver?: player
}

/**
 * Sender: Player who summon the dice.
 * Faces: Number of face sof the dice (Example : 6, 10, etc...).
 * ZeroIncluded: True if the dice include a face with 0. False otherwise.
 */
type dice = {
    Sender: player,
    Faces: number,
    ZeroIncluded: boolean
}