import fs from 'fs';
import path from 'path';
import { TestData } from '../Interface/Module1TestData.interface';

export async function loadTestData(){
    const environment = `${process.env.Test_Execution_Env}` || 'qa';
    const directoryPath = path.join(__dirname,'../../test-data/',environment);

    const jsonData: TestData = {};
    fs.readdirSync(directoryPath).forEach(file => {
        if(path.extname(file) === '.json') {
            const filePath = path.join(directoryPath,file);
            const fileContent : TestData = JSON.parse(fs.readFileSync(filePath,'utf-8'));
            Object.assign(jsonData,fileContent); //Mearge Content into a Single Object
        }
    });
    return jsonData;
}