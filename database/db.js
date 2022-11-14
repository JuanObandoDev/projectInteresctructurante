import { Timestamp } from "mongodb";
import { connect, client } from "./conn.js";
import { ObjectId } from 'mongodb';

async function getAllUsers() {
    try {
        await connect();
        const users = await client.db("project").collection("users").find({}).toArray();
        return users;
    } catch (error) {
        throw new Error(error);
    }
}

async function getUserById(id) {
    try {
        await connect();
        const user = await client.db("project").collection("users").findOne({ _id: new ObjectId(id) });
        return user;
    } catch (error) {
        throw new Error("Error getting user");
    }
}

async function getQuestions() {
    try {
        await connect();
        const questions = await client.db("project").collection("questions").find({}).toArray();
        return questions;
    } catch (error) {
        throw new Error("Error getting questions");
    }
}

async function getAnswersByUserId(id) {
    try {
        await connect();
        const answers = await client.db("project").collection("answers").find({ userId: id }).toArray();
        return answers;
    } catch (error) {
        throw new Error("Error getting answers");
    }
}

async function getAnswersByQuestionId(id) {
    try {
        await connect();
        const answers = await client.db("project").collection("answers").find({ questionId: id }).toArray();
        return answers;
    } catch (error) {
        throw new Error("Error getting answers");
    }
}

async function postAnswer(answer) {
    try {
        await connect();
        const newAnswer = await client.db("project").collection("answers").insertOne(answer);
        return newAnswer;
    } catch (error) {
        throw new Error("Error posting answer");
    }
}

async function postUser(user) {
    try {
        await connect();
        const result = await client.db("project").collection("users").insertOne(user);
        return result;
    } catch (error) {
        throw new Error("Error posting user");
    }
}

async function putUser(id, user) {
    try {
        await connect();
        const result = await client.db("project").collection("users").updateOne({ _id: new ObjectId(id) }, { $set: user });
        return result;
    } catch (error) {
        throw new Error("Error updating user");
    }
}

async function deleteUser(id) {
    try {
        await connect();
        const result = await client.db("project").collection("users").deleteOne({ _id: new ObjectId(id) });
        return result;
    } catch (error) {
        throw new Error("Error deleting user");
    }
}

// class Database {
//     constructor() {
//         if(typeof Database.instance === 'object') {
//             return Database.instance;
//         }
//         Database.instance = this;
//         return this;
//     }

//     async connect() {
//         console.log(this.client)
//         if(!this.client?.isConected()) {       
//             this.client = await ClientP;
//             console.log("hola");
//         }
//         this.db = this.client.db("project");
//     }
// }

export { connect, getAllUsers, getUserById, getQuestions, getAnswersByUserId, getAnswersByQuestionId, postAnswer, postUser, putUser, deleteUser };