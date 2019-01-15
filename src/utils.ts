import * as fs from 'fs'
import * as Twitter from 'twitter'

// Check if credentials exist
export const client = (configPath: string): object => {
  if (fs.existsSync(`${configPath}/creds.json`)) {
    const creds = fs.readFileSync(`${configPath}/creds.json`)
    console.log(creds)
    // return new Twitter(creds)
    return {}
  }
  throw new Error('Invalid Credentials')
}

client('C:/Users/leand/AppData/twitter-cl')
