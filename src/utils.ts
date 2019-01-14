import * as fs from 'fs'
import * as Twitter from 'twitter'

// Check if credentials exist
export const client = (configPath: string): object => {
  if (fs.existsSync(`${configPath}/creds.json`)) {
    const creds = fs.readFileSync(`${configPath}/creds.json`)
    return new Twitter(creds)
  }
  throw new Error('Invalid Credentials')
}
