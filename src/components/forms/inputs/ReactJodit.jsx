import JoditEditor from "jodit-react";
import { useMemo, useRef } from "react";

const ReactJodit = ({ placeholder, data, onChange }) => {
  const editor = useRef(null);
  const config = useMemo(() => {
    return { readonly: false, placeholder: placeholder || "Start typing..." };
  }, [placeholder]);
  return (
    <JoditEditor
      config={config}
      value={data}
      ref={editor}
      className="z-[40]"
      onChange={onChange}
    />
  );
};

export default ReactJodit;
