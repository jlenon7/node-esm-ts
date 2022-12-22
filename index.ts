import { FileReaderService } from '#app/Services/FileReaderService'

import { Path } from '@athenna/common'

const path = Path.resources('hello-world.json')
const content = await FileReaderService.readJson(path)

console.log(content)
