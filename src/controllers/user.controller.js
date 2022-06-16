// CRUD
import { request } from "express";
import { usersModel } from "../models/users.js";

const getAll = async (request, response) => {
  try {
    const users = await usersModel.findAll();
    return response.status(200).json(users); 
  } catch (error) {
    return response.status(500).json({
      message: error.message,
    });
  }
};

const createRecord = async (request, response) => {
  try{
    const { name, lastName, userName } = request.body;

    const record = await usersModel.create({
      name, //name: name
      lastName, //lastName: lastName
      userName, // name
    });

    return response.status(201).json(record);
  }catch (error) {
    return response.statu(500).json({
      message: error.messsage,
    });
  }
};

export { getAll, createRecord };
