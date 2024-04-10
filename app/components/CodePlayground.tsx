import React from "react"
import { Sandpack } from "@codesandbox/sandpack-react"

interface CodePlaygroundProps {
  files: Record<string, string>
  template:
    | "static"
    | "angular"
    | "react"
    | "react-ts"
    | "solid"
    | "svelte"
    | "test-ts"
    | "vanilla-ts"
    | "vanilla"
    | "vue"
    | "vue-ts"
    | "node"
    | "nextjs"
    | "vite"
    | "vite-react"
    | "vite-react-ts"
    | undefined
    | string
  theme: string
}

const CodePlayground: React.FC<CodePlaygroundProps> = ({
  files,
  template,
  theme,
}) => {
  return <Sandpack template={template} theme={theme} files={files} />
}

export default CodePlayground
