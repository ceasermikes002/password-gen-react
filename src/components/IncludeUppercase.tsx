import { ChangeEvent } from "react";

type IncludeUppercaseProps = {
  includeUppercase: boolean;
  setIncludeUppercase: (include: boolean) => void;
};
export default function IncludeUppercase({
  includeUppercase,
  setIncludeUppercase,
}: IncludeUppercaseProps) {
  function handleIncludeUppercaseChange(event: ChangeEvent<HTMLInputElement>) {
    setIncludeUppercase(!includeUppercase);
  }
  return (
    <div className="mb-2">
      <input
        type="checkbox"
        id="includeUppercase"
        checked={includeUppercase}
        className="mr-2"
        onChange={handleIncludeUppercaseChange}
      />
      <label htmlFor="includeUppercase">Include Uppercase Letters</label>
    </div>
  );
}
