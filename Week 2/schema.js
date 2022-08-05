import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Book {
        id: ID
        book_name: String
        book_author: Author
        pages: Int
        chapters: [String]
    }
    
    type Author {
        id: ID
        author_name: String
        author_phone: String
        author_email: String
    }

    type Query {
        getAuthor(id: ID): Author
        getAuthors: [Author]
    }

    input AuthorInput {
        id: ID
        author_name: String!
        author_phone: String!
        author_email: String!
    }

    input AuthorNewInput {
        author_name: String
        author_phone: String
        author_email: String
    }

    type Mutation {
        createAuthor(input: AuthorInput): Author
        updateAuthor(id: ID!, input: AuthorNewInput): Author
        deleteAuthor(id: ID): Author
    }
`)

export default schema;