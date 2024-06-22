type IncludeNumbersProps = {
  includeNumbers: boolean;
  setIncludeNumbers: (include: boolean) => void;
};
export default function IncludeNumbers({
  includeNumbers,
  setIncludeNumbers,
}: IncludeNumbersProps) {
  function handleIncludeNumbersChange() {
    setIncludeNumbers(!includeNumbers);
  }
  return (
    <div className="mb-2">
      <input
        type="checkbox"
        id="includeNumbers"
        checked={includeNumbers}
        className="mr-2"
        onChange={handleIncludeNumbersChange}
      />
      <label htmlFor="includeNumbers">Include Numbers</label>
    </div>
  );
}
