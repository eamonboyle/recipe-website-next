import fs from 'fs';
import path from 'path';

const dataReader = <T>(fileName: string, folderPath: string): T | null => {
    const filePath = path.join(__dirname, '..', folderPath, fileName);
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data) as T;
    } catch (err) {
        console.error(`Error reading file ${filePath}: ${err}`);
        return null;
    }
};

export default dataReader;