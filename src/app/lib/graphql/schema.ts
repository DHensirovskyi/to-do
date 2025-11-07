// src/app/lib/graphql/schema.ts
import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type Task {
    _id: ID!
    title: String!
    description: String!
    priority: String!
    status: String!
    color: String!
    image: String!
    createdDate: String!
    category: String
    createdAt: String!
    updatedAt: String!
  }

  type User {
    _id: ID!
    email: String!
    first_name: String!
    last_name: String
    img: String
    createdAt: String!
    updatedAt: String!
  }

  input CreateTaskInput {
    title: String!
    description: String!
    priority: String
    status: String
    color: String
    image: String
    category: String
    createdDate: String
  }

  input UpdateTaskInput {
    title: String
    description: String
    priority: String
    status: String
    color: String
    image: String
    category: String
    createdDate: String
  }

  input CreateUserInput {
    email: String!
    password: String!
    first_name: String!
    last_name: String
    img: String
  }

  input UpdateUserInput {
    email: String
    first_name: String
    last_name: String
    img: String
  }

  type Query {
    tasks: [Task!]!
    task(id: ID!): Task
    users: [User!]!
    user(id: ID!): User
  }

  type Mutation {
    createTask(input: CreateTaskInput!): Task!
    updateTask(id: ID!, input: UpdateTaskInput!): Task!
    deleteTask(id: ID!): Boolean!
    
    createUser(input: CreateUserInput!): User!
    updateUser(id: ID!, input: UpdateUserInput!): User!
    deleteUser(id: ID!): Boolean!
  }
`;