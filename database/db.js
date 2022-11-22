import { connect, client } from "./conn.js";
import { ObjectId } from 'mongodb';

const getAllUsers = async () => {
    try {
        await connect();
        const users = await client.db("project").collection("users").find({}).toArray();
        const usersWithoutPassword = users.map(user => {
            delete user.password;
            return user;
        });
        return usersWithoutPassword;
    } catch (error) {
        throw new Error(error);
    }
}

const getUserById = async (id) => {
    try {
        await connect();
        const user = await client.db("project").collection("users").findOne({ _id: new ObjectId(id) });
        delete user.password;
        return user;
    } catch (error) {
        throw new Error("Error getting user");
    }
}

const getUserByEmail = async (email) => {
    try {
        await connect();
        const user = await client.db("project").collection("users").findOne({ email: email });
        return user;
    } catch (error) {
        throw new Error("Error getting user");
    }
}

const getQuestions = async () => {
    try {
        await connect();
        const questions = await client.db("project").collection("questions").find({}).toArray();
        return questions;
    } catch (error) {
        throw new Error("Error getting questions");
    }
}

const getAnswersByUserId = async (id) => {
    try {
        await connect();
        const answers = await client.db("project").collection("answers").find({ userId: id }).toArray();
        return answers;
    } catch (error) {
        throw new Error("Error getting answers");
    }
}

const getAnswersByQuestionId = async (id) => {
    try {
        await connect();
        const answers = await client.db("project").collection("answers").find({ questionId: id }).toArray();
        return answers;
    } catch (error) {
        throw new Error("Error getting answers");
    }
}

const postAnswer = async (answer) => {
    try {
        await connect();
        const newAnswer = await client.db("project").collection("answers").insertOne(answer);
        return newAnswer;
    } catch (error) {
        throw new Error("Error posting answer");
    }
}

const postUser = async (user) => {
    try {
        await connect();
        const result = await client.db("project").collection("users").insertOne(user);
        return result;
    } catch (error) {
        throw new Error("Error posting user");
    }
}

const putUser = async (id, user) => {
    try {
        await connect();
        const result = await client.db("project").collection("users").updateOne({ _id: new ObjectId(id) }, { $set: user });
        return result;
    } catch (error) {
        throw new Error("Error updating user");
    }
}

const deleteUser = async (id) => {
    try {
        await connect();
        const result = await client.db("project").collection("users").deleteOne({ _id: new ObjectId(id) });
        return result;
    } catch (error) {
        throw new Error("Error deleting user");
    }
}

export { connect, getAllUsers, getUserById, getUserByEmail, getQuestions, getAnswersByUserId, getAnswersByQuestionId, postAnswer, postUser, putUser, deleteUser };