import * as fs from 'fs'
import * as Twitter from 'twitter'

// Check if credentials exist
export const tclClient = (configPath: string) => {
  if (fs.existsSync(`${configPath}/creds.json`)) {
    const creds = JSON.parse(
      fs.readFileSync(`${configPath}/creds.json`, {encoding: 'string'})
    )
    return new Twitter(creds)
  }
  throw new Error('Invalid Credentials')
}
