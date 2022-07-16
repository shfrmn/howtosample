#!/usr/bin/env node
import {spawnSync} from 'child_process'
import * as fs from 'fs'
import * as path from 'path'
import * as process from 'process'

const {rewriteText} = require('./rewrite')

const [_bin, _path, sampleDir, targetName] = process.argv

if (!sampleDir) {
  throw new Error(`No sample directory provided`)
}

if (!targetName) {
  throw new Error(`No target name provided`)
}

const samplePath = path.join(sampleDir, '_sample/')
const targetPath = path.join(sampleDir, targetName)

console.log(`Copying ${samplePath} into ${targetPath}`)

spawnSync('cp', ['-r', samplePath, targetPath])

const files = fs.readdirSync(targetPath)

for (const fileName of files) {
  const currentFilePath = path.join(
    process.cwd(),
    sampleDir,
    targetName,
    fileName,
  )
  const targetFileName = rewriteText(fileName, targetName)
  const targetFilePath = path.join(
    process.cwd(),
    sampleDir,
    targetName,
    targetFileName,
  )
  const fileContent = fs.readFileSync(currentFilePath, 'utf8')
  const targetFileContent = rewriteText(fileContent, targetName)
  console.log(`Creating ${targetFilePath}`)
  fs.renameSync(currentFilePath, targetFilePath)
  fs.writeFileSync(targetFilePath, targetFileContent, 'utf8')
}
