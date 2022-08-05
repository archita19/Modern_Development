import { error } from "console"
import { v4 as uuidv4 } from "uuid"

class Author {
    constructor(id, { author_name, author_phone, author_email }) {
        this.id = id
        this.author_name = author_name
        this.author_phone = author_phone
        this.author_email = author_email
    }
}

// let author_holder = {}

const fs = require("fs")
let authorsJSON = fs.readFileSync("authors.json", "utf-8")
let author_holder = JSON.parse(authorsJSON)

const resolvers = {
    getAuthor: ({ id }) => {
        if(!author_holder[id])
            throw new Error("Id doesn't exist!")
     
        return new Author(id, author_holder[id])
    },
    getAuthors: () => {
        let authors = []
        Object.keys(author_holder).forEach(key => {
            authors.push(new Author(key, author_holder[key]))
        })

        return authors
    },
    createAuthor: ({ input }) => {
        let id = uuidv4()
        author_holder[id] = input

        fs.writeFile("authors.json", JSON.stringify(author_holder), error => {
            if(error) throw error
            else console.log("author added!");
        })

        return new Author(id, input)
    },
    updateAuthor: ({ id, input }) => {
        if(!author_holder[id]) 
            throw new Error("Id doesn't exist!")
            
        author_holder[id] = input

        fs.writeFile("authors.json", JSON.stringify(author_holder), error => {
            if(error) throw error
            else console.log("author updated!");
        })

        return new Author(id, input)
    },
    deleteAuthor: ({ id }) => {
        if(!author_holder[id]) 
            throw new Error("Id doesn't exist!")

        let new_author_holder = {}, temp
        Object.keys(author_holder).forEach(key => {
            if(key != id) 
                new_author_holder[key] = author_holder[key]
            else
                temp = author_holder[id]
        })

        author_holder = new_author_holder

        fs.writeFile("authors.json", JSON.stringify(author_holder), error => {
            if(error) throw error
            else console.log("author deleted!");
        })

        return new Author(id, temp)
    }
}

export default resolvers;

