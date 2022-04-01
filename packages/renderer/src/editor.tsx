import React, { useCallback, useEffect } from 'react'
import './editor.css'
import useCodeMirror from './use-codemirror'

interface Props {
  initialDoc: string,
  onChange: (doc: string) => void
}

const Editor: React.FC<Props> = (props) => {
  const { initialDoc, onChange } = props
  const handleChange = useCallback(
    state => onChange(state.doc.toString()),
    [onChange]
  )
  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    initialDoc: initialDoc,
    onChange: handleChange
  })

  useEffect(() => {
    if (editorView) {
    }
  }, [editorView])
  return <div className='editor-wrapper' ref={refContainer}></div>
}

export default Editor
