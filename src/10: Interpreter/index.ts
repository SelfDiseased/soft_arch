import { Client } from "./client";

const client = new Client();

client.process("1 + 3 - 1 + 4");

client.process("4 - 1 - 1 + 12 - 11");
