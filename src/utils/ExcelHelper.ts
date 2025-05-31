//import xlsx
import * as Excel from 'xlsx';
import fs from 'fs';

//define test data structure
interface TestRecords{
    Username : string,
    Password : string
}

//Create method to read excel file
export function readExcelFile(filePath:string){

    // read the excel file as binary string
    const file = fs.readFileSync(filePath);

    // parse into workbook
    const workbook = Excel.read(file);

    // Get first sheet
    const sheet = workbook.Sheets[workbook.SheetNames[0]];

    // Convert sheet into Json
    const rawData: any[]=Excel.utils.sheet_to_json(sheet, {header:1})

    // Conver row data into TestRecords
    const records : TestRecords[] =rawData.slice(1).map((column:any)=>({
            Username : column[0],
            Password : column[1]
    }))
    return records;
}   