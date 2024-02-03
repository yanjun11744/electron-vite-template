import { contextBridge, ipcRenderer, IpcRendererEvent, shell, clipboard } from "electron"
import { platform, release, arch } from 'os'

contextBridge.exposeInMainWorld("ipcRenderer", {
    send: (channel: string, args?: any) => ipcRenderer.send(channel, args),
    sendSync: (channel: string, args?: any) => ipcRenderer.sendSync(channel, args),
    on: (channel: string, listener: (event: IpcRendererEvent, ...args: any[]) => void) =>
        ipcRenderer.on(channel, listener),
    once: (channel: string, listener: (event: IpcRendererEvent, ...args: any[]) => void) =>
        ipcRenderer.once(channel, listener),
    invoke: (channel: string, args: any) => ipcRenderer.invoke(channel, args),
    removeAllListeners: (channel: string) => ipcRenderer.removeAllListeners(channel)
});

contextBridge.exposeInMainWorld("systemInfo", {
    platform: platform(),
    release: release(),
    arch: arch()
})

contextBridge.exposeInMainWorld("shell", shell)

contextBridge.exposeInMainWorld("clipboard", {
  writeText: (text) => clipboard.writeText(text),
  readText: () => clipboard.readText(),
  // ... 其他需要暴露的 clipboard 方法
})

contextBridge.exposeInMainWorld("crash", {
    start: () => {
        process.crash()
    }
})
