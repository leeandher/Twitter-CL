import * as fs from 'fs'
import * as Twitter from 'twitter'

// Check if credentials exist
export const tclClient = (configPath: string): Twitter => {
  if (fs.existsSync(`${configPath}/creds.json`)) {
    const creds = JSON.parse(
      fs.readFileSync(`${configPath}/creds.json`, {encoding: 'utf8'})
    )
    return new Twitter(creds)
  }
  throw new Error('Invalid Credentials')
}
