import mongoose from 'mongoose';

const Connection = async (username,password) => {
    const URL=`mongodb://${username}:${password}@ac-s3b9hr7-shard-00-00.7xnspuh.mongodb.net:27017,ac-s3b9hr7-shard-00-01.7xnspuh.mongodb.net:27017,ac-s3b9hr7-shard-00-02.7xnspuh.mongodb.net:27017/?ssl=true&replicaSet=atlas-2jbrik-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{ useNewUrlParser: true });
        console.log('Database connected successfully');
    }catch (error){
        console.log('Error while connecting with the database', error);
    }
};

export default Connection;

// ${username}:${password}