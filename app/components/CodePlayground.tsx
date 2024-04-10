import React from "react"
import { Sandpack } from "@codesandbox/sandpack-react"

interface CodePlaygroundProps {
  files: Record<string, string>
}

const CodePlayground: React.FC<CodePlaygroundProps> = ({ files }) => {
  return <Sandpack template="react" files={files} />
}

export default CodePlayground
