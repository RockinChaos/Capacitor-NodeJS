import { createReadStream, existsSync } from 'fs'
import { Extract } from 'unzipper'

const abis = ['arm64-v8a', 'armeabi-v7a', 'x86_64']

for (const abi of abis) {
  const zipPath = `android/libnode/bin/${abi}/libnode.zip`
  const soPath = `android/libnode/bin/${abi}/libnode.so`
  if (!existsSync(soPath)) {
    await new Promise((resolve, reject) => {
      createReadStream(zipPath)
        .pipe(Extract({ path: `android/libnode/bin/${abi}` }))
        .on('close', resolve)
        .on('error', reject)
    })
  }
}