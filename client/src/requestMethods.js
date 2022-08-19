import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmVkZDlhNWI5NjU5MzE5ZjUxOTM5OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDg4MjEyMSwiZXhwIjoxNjYxMTQxMzIxfQ.I6q8ACa3VvZeVI1LTXQqCdcIvMZTcNbNXPUs7h0Ordc";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
