import { File } from '@athenna/common'

export class FileReaderService {
  /**
   * Read a file path and return the content.
   */
  static async read(path: string): Promise<string> {
    const buffer = await new File(path).getContent()

    return buffer.toString()
  }

  /**
   * Read a file path and return the content as object.
   */
  static async readJson(path: string): Promise<Record<string, any> | Record<string, any>[]> {
    const string = await this.read(path)

    return JSON.parse(string)
  }
}