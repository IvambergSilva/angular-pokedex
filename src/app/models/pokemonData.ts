export type pokemonData = {
    id: number
    name: string
    sprites: {
        other: {
            dream_world:{
                front_default: string
            }
        }
    }
    types: {
        slot: number
        type: {
            name: string
            url: string
        }
    }[]
}