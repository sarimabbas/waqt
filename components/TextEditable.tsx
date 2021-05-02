import { Editable, EditableInput, EditablePreview } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const TextEditable = ({
  initialValue = "",
  onBlur,
}: {
  initialValue: string;
  onBlur?: (submittedValue) => void;
}) => {
  const [value, setValue] = useState<string>(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <Editable
      value={value}
      onChange={(nextValue) => setValue(nextValue)}
      onSubmit={(submittedValue) => onBlur(submittedValue)}
    >
      <EditablePreview />
      <EditableInput />
    </Editable>
  );
};

export default TextEditable;
