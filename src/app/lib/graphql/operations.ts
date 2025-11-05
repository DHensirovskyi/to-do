import { gql } from '@apollo/client';

// Task Queries
export const GET_TASKS = gql`
  query GetTasks {
    tasks {
      _id
      title
      description
      priority
      status
      color
      image
      createdDate
      category
      createdAt
      updatedAt
    }
  }
`;

export const GET_TASK = gql`
  query GetTask($id: ID!) {
    task(id: $id) {
      _id
      title
      description
      priority
      status
      color
      image
      createdDate
      category
      createdAt
      updatedAt
    }
  }
`;

// Task Mutations
export const CREATE_TASK = gql`
  mutation CreateTask($input: CreateTaskInput!) {
    createTask(input: $input) {
      _id
      title
      description
      priority
      status
      color
      image
      createdDate
      category
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation UpdateTask($id: ID!, $input: UpdateTaskInput!) {
    updateTask(id: $id, input: $input) {
      _id
      title
      description
      priority
      status
      color
      image
      createdDate
      category
    }
  }
`;

export const DELETE_TASK = gql`
  mutation DeleteTask($id: ID!) {
    deleteTask(id: $id)
  }
`;

// User Queries
export const GET_USERS = gql`
  query GetUsers {
    users {
      _id
      email
      first_name
      last_name
      img
      createdAt
      updatedAt
    }
  }
`;

export const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      _id
      email
      first_name
      last_name
      img
      createdAt
      updatedAt
    }
  }
`;

// User Mutations
export const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      _id
      email
      first_name
      last_name
      img
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      _id
      email
      first_name
      last_name
      img
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`;