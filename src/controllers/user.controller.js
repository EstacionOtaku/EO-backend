// CRUD
import { request, response } from "express";
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

const getById = async (request, response)=> {
  try{
    // /user/:id
    const { id } = request.params;

    const record = await usersModel.findOne({
      where: {
        id
      },
    })
    // SELECT * FROM users WHERE id = :id

    return response.status(200).json(record);
  }catch (error) {
    return response.statu(500).json({
      message: error.messsage,
    });
  }
};

const updateRecord = async (request, response)=> {
  try{
    // /user/:id - body request
    const { id } = request.params;
    const { name, lastName, userName } = request.body;
//primera forma
//     const record = await usersModel.findByPk(id);
//       record.name = name,
//       record.lastName = lastName,
//       record.userName = userName,
//       await record.save() 
// //segunda forma
     await usersModel.update(
      {
        name,
        lastName,
        userName,
      },
      {
        where:{
          id,
        }, 
      }
     );

    return response.status(200).json({
      message: `Se actualizo el usuario con el ID: ${id}`,
    });
  }catch (error) {
    return response.statu(500).json({
      message: error.messsage,
    });
  }
};

export { getAll, createRecord, getById, updateRecord };
