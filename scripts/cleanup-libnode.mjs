import { existsSync, unlinkSync } from 'fs';

const abis = ['arm64-v8a', 'armeabi-v7a', 'x86_64'];

for (const abi of abis) {
  const soPath = `android/libnode/bin/${abi}/libnode.so`;
  if (existsSync(soPath)) {
    unlinkSync(soPath);
  }
}
