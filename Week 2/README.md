# lco-graphqls

git clone https://github.com/hiteshchoudhary/lco-graphql.git
npm install express graphql express-graphql uuid

mutation -> create, update, delete
query -> read

npm install -g babel-cli

mutation  {
  createAuthor(input: {
    author_name: "Random Author",
    author_phone: "9836726822",
    author_email: "abcd@gmail.com"
  }) {
    id
    author_name
    author_phone
    author_email
  }
}

mutation {
  updateAuthor(id: "89aabcaa-049b-4a6f-b36d-38b8873272c3", input: {
    author_name: "abcdef"
    author_phone: "9090909090"
    author_email: "ahbgja@jhdbs.com"
  }) {
    author_name
    author_phone
    author_email
  }
}

mutation {
  deleteAuthor(id: "c53b57d2-f58f-4e73-9463-b69db1973926") {
    id
    author_name
    author_phone
    author_email
  }
}

query {
  getAuthor(id: "3ace47b4-6140-4381-8bb2-145b96e221d5") {
    author_name
    author_email
    author_name
  }
}

query {
  getAuthors {
    id
    author_name
    author_phone
    author_email
  }
}

todo -> read all entries, update, delete, storing in json file
install (Elastic search, logstash, kibana) OR docker
