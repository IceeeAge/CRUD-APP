// GlobalApi.js
import { request, gql } from "graphql-request";

const MASTER_URL =
  "";

const CreateNote = async (data) => {
  const mutation = gql`
    mutation CreateNote($text: String!) {
      createNote(data: { text: $text }) {
        id
      }
      publishManyNotes(to: PUBLISHED) {
        count
      }
    }
  `;

  const result = await request(MASTER_URL, mutation, { text: data.text });
  return result;
};

const GetNote = async () => {
  const query = gql`
    query GetNote {
      notes {
        id
        text
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const UpdateNote = async (id, text) => {
  const mutation = gql`
    mutation UpdateNote($id: ID!, $text: String!) {
      updateNote(data: { text: $text }, where: { id: $id }) {
        id
      }
      publishManyNotes(to: PUBLISHED) {
        count
      }
    }
  `;

  const result = await request(MASTER_URL, mutation, { id, text });
  return result;
};

const DeleteNote = async (id) => {
  const mutation = gql`
    mutation DeleteNote($id: ID!) {
      deleteManyNotes(where: { id: $id }) {
        count
      }
    }
  `;

  const result = await request(MASTER_URL, mutation, { id });
  return result;
};

export default {
  CreateNote,
  GetNote,
  UpdateNote,
  DeleteNote,
};
